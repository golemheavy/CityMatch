function Model() {
  this.staticModel = new StaticModel();

  // For now, drive the model with mediocre, statically-sourced data.
  // This will evolve to a fullstack model with backend db.
  // I can't give all the IP away :D

  this.data = this.staticModel.data;
}

Model.prototype.githubUrl =
  "https://github.com/zenglenn42/CityMatch/blob/master/README.md";

Model.prototype.getMinHappinessValue = function() {
  return this.staticModel.minHappinessValue;
};
Model.prototype.getMidHappinessValue = function() {
  return this.staticModel.midHappinessValue;
};
Model.prototype.getMaxHappinessValue = function() {
  return this.staticModel.maxHappinessValue;
};
Model.prototype.getMinAffordabilityValue = function() {
  return this.staticModel.minAffordabilityValue;
};
Model.prototype.getMidAffordabilityValue = function() {
  return this.staticModel.midAffordabilityValue;
};
Model.prototype.getMaxAffordabilityValue = function() {
  return this.staticModel.maxAffordabilityValue;
};
Model.prototype.getMidPoliticsValue = function() {
  return this.staticModel.midPoliticsValue;
};

Model.prototype.distance = function(v, w) {
  let squaredDiffs = 0;
  let distance = NaN;
  if (v.length == w.length) {
    for (let i = 0; i < v.length; i++) {
      if (isNaN(v[i])) continue; // Ignore disabled user preferences.
      squaredDiffs += Math.pow(v[i] - w[i], 2);
    }
    distance = Math.sqrt(squaredDiffs);
  } else {
    console.log("Model.distance() error: input vectors are different lengths.");
  }
  return distance;
};

Model.prototype.isEmpty = function(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

Model.prototype.getCityRankCB = function() {
  return this.cityRank;
};

Model.prototype.cityRank = function(userPrefs) {
  // userPrefs = {"happiness": value,
  //              "affordability": value,
  //              "politics": {"rep16_frac": val, "dem16_frac": val}}

  if (this.isEmpty(userPrefs)) {
    console.log("Model.cityRank() Error: empty userPrefs");
    return [];
  }
  let rankedCities = [];
  rankedCities = this.data.slice();
  // console.log(rankedCities);

  let minHappiness = parseInt(this.staticModel.minHappinessValue);
  let maxHappiness = parseInt(this.staticModel.maxHappinessValue);
  let happinessRange = maxHappiness - minHappiness;

  let minAffordability = parseInt(this.staticModel.minAffordabilityValue);
  let maxAffordability = parseInt(this.staticModel.maxAffordabilityValue);
  let affordabilityRange = maxAffordability - minAffordability;

  let scaledHappiness = NaN;
  let scaledAffordability = NaN;
  let scaledPolitics = userPrefs.politics;
  if (!isNaN(userPrefs.happiness)) {
    scaledHappiness =
      (userPrefs.happiness - minHappiness) * (100 / happinessRange);
  }
  if (!isNaN(userPrefs.affordability)) {
    scaledAffordability =
      (userPrefs.affordability - minAffordability) * (100 / affordabilityRange);
  }

  let v = [scaledHappiness, scaledAffordability, scaledPolitics.rep16_frac];
  // console.log("userPrefs v = ", v);

  for (let i = 0; i < rankedCities.length; i++) {
    let item = rankedCities[i];
    // IMPORTANT: Order of picked fields must match order of fields in v.
    let cityAttr = Object.values(
      this.cherryPickFields(["happiness", "affordability", "politics"], item)
    );
    // console.log(cityAttr);
    scaledHappiness =
      (parseFloat(cityAttr[0]) - minHappiness) * (100 / happinessRange);
    scaledAffordability =
      (parseFloat(cityAttr[1]) - minAffordability) * (100 / affordabilityRange);

    let w = [
      scaledHappiness,
      scaledAffordability,
      parseFloat(cityAttr[2].rep16_frac)
    ];
    // vector difference between user preferences (v) and city metrics (w)
    let vDistance = this.distance(v, w);

    // pass these individual deltas back to caller so they can be reported
    // in the chart-view
    let hDistance = v[0] - w[0];
    let aDistance = v[1] - w[1];
    let pDistance = v[2] - w[2];

    let distance = {
      vector: vDistance,
      happiness: hDistance,
      affordability: aDistance,
      politics: pDistance
    };

    let key = Object.keys(item)[0];
    rankedCities[i][key]["distance"] = distance;
    // console.log(key, "distance = ", distance);
  }
  let compareFn = this.getCompareDistance();
  rankedCities.sort(compareFn);
  return rankedCities;
};

Model.prototype.cherryPickFields = function(arrayOfFields, item) {
  results = {};
  for (let fieldName of arrayOfFields) {
    let key = this.getCityST(item);
    results[fieldName] = item[key][fieldName];
  }
  return results;
};

Model.prototype.getCityST = function(item) {
  return Object.keys(item).join();
};

Model.prototype.getCompareDistance = function() {
  function compareDistance(a, b) {
    let aKey = Object.keys(a)[0];
    let bKey = Object.keys(b)[0];
    let aDistance = a[aKey].distance.vector;
    let bDistance = b[bKey].distance.vector;
    if (aDistance > bDistance) return 1;
    if (aDistance == bDistance) return 0;
    if (aDistance < bDistance) return -1;
  }
  return compareDistance;
};
