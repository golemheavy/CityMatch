function StaticModel() {
  // TODO: Derive these from the data below rather than hardcode.
  this.minAffordabilityValue = "82500";
  this.midAffordabilityValue = "504950"; // mid-point of median home price range
  this.maxAffordabilityValue = "927400";
  this.minHappinessValue = "29"; // from 3rd party study
  this.midHappinessValue = "51";
  this.maxHappinessValue = "73";
  this.midPoliticsValue = { rep16_frac: 50, dem16_frac: 50 };
  this.wikiErrorImg = "assets/img/wiki-img-fail.png";

  this.data = [
    {
      "Plano, TX": {
        affordability: 265300,
        happiness: 72.3,
        img: {
          imgAuthor: "Danny20111993",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Plano_Skyline.jpg/1200px-Plano_Skyline.jpg"
        },
        location: {
          lat: 33.0198431,
          lng: -96.6988856
        },
        politics: {
          dem16_frac: 39.22001430394481,
          rep16_frac: 56.20468664544448
        }
      }
    },
    {
      "Irvine, CA": {
        affordability: 620500,
        happiness: 71.86,
        img: {
          imgAuthor: "Poppashoppa22",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/a/a8/Campus_of_the_University_of_California%2C_Irvine_%28aerial_view%2C_circa_2006%29.jpg"
        },
        location: {
          lat: 33.6845673,
          lng: -117.8265049
        },
        politics: {
          dem16_frac: 50.96015441583128,
          rep16_frac: 43.28010943892407
        }
      }
    },
    {
      "Madison, WI": {
        affordability: 242700,
        happiness: 71.81,
        img: {
          imgAuthor: "Av9",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Madison_Picnic_Point.jpg/1200px-Madison_Picnic_Point.jpg"
        },
        location: {
          lat: 43.0730517,
          lng: -89.4012302
        },
        politics: {
          dem16_frac: 71.37686272064687,
          rep16_frac: 23.387993922468816
        }
      }
    },
    {
      "Fremont, CA": {
        affordability: 649100,
        happiness: 71.17,
        img: {
          imgAuthor: "Oleg Alexandrov",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lake_Elizabeth_in_Fremont%2C_California_%28cropped%29.JPG/1200px-Lake_Elizabeth_in_Fremont%2C_California_%28cropped%29.JPG"
        },
        location: {
          lat: 37.5482697,
          lng: -121.9885719
        },
        politics: {
          dem16_frac: 79.31424750691053,
          rep16_frac: 14.871125824574563
        }
      }
    },
    {
      "Huntington Beach, CA": {
        affordability: 620500,
        happiness: 69.74,
        img: {
          imgAuthor: "D Ramey Logan",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Huntington_Beach_CA_Aerial_by_Don_Ramey_Logan.jpg/1200px-Huntington_Beach_CA_Aerial_by_Don_Ramey_Logan.jpg"
        },
        location: {
          lat: 33.6594835,
          lng: -117.9988026
        },
        politics: {
          dem16_frac: 50.96015441583128,
          rep16_frac: 43.28010943892407
        }
      }
    },
    {
      "Fargo, ND": {
        affordability: 198100,
        happiness: 69.57,
        img: {
          imgAuthor: "formulanone",
          imgLic: "(CC BY-SA 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Fargo%2C_ND_-_Aerial_Facing_East_%2843610135662%29.jpg/1200px-Fargo%2C_ND_-_Aerial_Facing_East_%2843610135662%29.jpg"
        },
        location: {
          lat: 46.8771863,
          lng: -96.7898034
        },
        politics: {
          dem16_frac: 39.7058636923116,
          rep16_frac: 50.424454680421796
        }
      }
    },
    {
      "Grand Prairie, TX": {
        affordability: 148300,
        happiness: 69.3,
        img: {
          imgAuthor: "Gp user",
          imgLic: "(CC BY-SA)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/GP_Main_Street_at_Dusk.JPG/1200px-GP_Main_Street_at_Dusk.JPG"
        },
        location: {
          lat: 32.7459645,
          lng: -96.99778459999999
        },
        politics: {
          dem16_frac: 61.12643858847478,
          rep16_frac: 34.88514605361494
        }
      }
    },
    {
      "San Jose, CA": {
        affordability: 829600,
        happiness: 68.9,
        img: {
          imgAuthor: "Ben Loomis",
          imgLic: "(CC BY 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/SJ_skyline_at_night_horizontal.jpg/1200px-SJ_skyline_at_night_horizontal.jpg"
        },
        location: {
          lat: 37.3382082,
          lng: -121.8863286
        },
        politics: {
          dem16_frac: 73.34801895780613,
          rep16_frac: 20.852979907395607
        }
      }
    },
    {
      "Scottsdale, AZ": {
        affordability: 225000,
        happiness: 68.24,
        img: {
          imgAuthor: "Joseph Plotz",
          imgLic: "(CC BY 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Scottsdale_waterfront.jpg/1200px-Scottsdale_waterfront.jpg"
        },
        location: {
          lat: 33.4941704,
          lng: -111.9260519
        },
        politics: {
          dem16_frac: 45.6797128627695,
          rep16_frac: 49.12624154071688
        }
      }
    },
    {
      "San Francisco, CA": {
        affordability: 927400,
        happiness: 67.53,
        img: {
          imgAuthor: "Noahnmf",
          imgLic: "(CC BY-SA)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg/1200px-San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg"
        },
        location: {
          lat: 37.7749295,
          lng: -122.4194155
        },
        politics: {
          dem16_frac: 85.53169356273696,
          rep16_frac: 9.442505372370276
        }
      }
    },
    {
      "Bismarck, ND": {
        affordability: 237000,
        happiness: 67.38,
        img: {
          imgAuthor: "Bobak Ha'Eri",
          imgLic: "(CC BY 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/2009-0521-CDNtrip049-ND-Bismarck-McKenziePatterson.jpg/1200px-2009-0521-CDNtrip049-ND-Bismarck-McKenziePatterson.jpg"
        },
        location: {
          lat: 46.8083268,
          lng: -100.7837392
        },
        politics: {
          dem16_frac: 23.17916115543798,
          rep16_frac: 69.33267909715407
        }
      }
    },
    {
      "Overland Park, KS": {
        affordability: 232500,
        happiness: 67.37,
        img: {
          imgAuthor: "Popcorn700",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/4/46/DwntwnOPKS.png"
        },
        location: {
          lat: 38.9822282,
          lng: -94.6707917
        },
        politics: {
          dem16_frac: 45.155547929780916,
          rep16_frac: 47.8661533567111
        }
      }
    },
    {
      "Santa Rosa, CA": {
        affordability: 513300,
        happiness: 67.18,
        img: {
          imgAuthor: "Frank Schulengurg",
          imgLic: "(CC BY-SA)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Santa_Rosa%2C_Empire_Building_%282012%29.jpg/1200px-Santa_Rosa%2C_Empire_Building_%282012%29.jpg"
        },
        location: {
          lat: 38.440429,
          lng: -122.7140548
        },
        politics: {
          dem16_frac: 70.72229672071192,
          rep16_frac: 22.809338047055956
        }
      }
    },
    {
      "Austin, TX": {
        affordability: 275800,
        happiness: 67.16,
        img: {
          imgAuthor: "Caleb Feese",
          imgLic: "(CC BY 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Austin_skyline_in_2014.jpg/1200px-Austin_skyline_in_2014.jpg"
        },
        location: {
          lat: 30.267153,
          lng: -97.7430608
        },
        politics: {
          dem16_frac: 66.2632888731295,
          rep16_frac: 27.40475361667074
        }
      }
    },
    {
      "Sioux Falls, SD": {
        affordability: 166600,
        happiness: 66.97,
        img: {
          imgAuthor: "Maxpower2727",
          imgLic: "(CC BY-SA)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Downtown_Sioux_Falls_from_6th_St_Bridge_overlooking_Big_Sioux_River.jpg/1200px-Downtown_Sioux_Falls_from_6th_St_Bridge_overlooking_Big_Sioux_River.jpg"
        },
        location: {
          lat: 43.5473028,
          lng: -96.728333
        },
        politics: {
          dem16_frac: 39.11171307003309,
          rep16_frac: 53.72014872928459
        }
      }
    },
    {
      "Pearl City, HI": {
        affordability: 626400,
        happiness: 66.77,
        img: {
          imgAuthor: "D Coetzee",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://live.staticflickr.com/3741/9452800636_1552f01882_z.jpg"
        },
        location: {
          lat: 21.3972222,
          lng: -157.9733333
        },
        politics: {
          dem16_frac: 61.47863191019417,
          rep16_frac: 31.607060973176566
        }
      }
    },
    {
      "Glendale, CA": {
        affordability: 495800,
        happiness: 66.25,
        img: {
          imgAuthor: "Gedstrom",
          imgLic: "(CC BY-SA)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Glendale_from_Forest_Lawn.jpg/1200px-Glendale_from_Forest_Lawn.jpg"
        },
        location: {
          lat: 34.1425078,
          lng: -118.255075
        },
        politics: {
          dem16_frac: 71.40718653188904,
          rep16_frac: 23.388693821283887
        }
      }
    },
    {
      "San Diego, CA": {
        affordability: 484900,
        happiness: 66.01,
        img: {
          imgAuthor: "Marelbu",
          imgLic: "(CC BY 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/San_Diego%2C_CA_USA_-_View_from_Coronado_-_panoramio.jpg/640px-San_Diego%2C_CA_USA_-_View_from_Coronado_-_panoramio.jpg"
        },
        location: {
          lat: 32.715738,
          lng: -117.1610838
        },
        politics: {
          dem16_frac: 56.07101658575932,
          rep16_frac: 38.23522143506011
        }
      }
    },
    {
      "St Paul, MN": {
        affordability: 208700,
        happiness: 65.79,
        img: {
          imgAuthor: "Cliff",
          imgLic: "(CC BY 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Saint_Paul_skyline%2C_Lake_of_the_Isles%2C_West_Side.jpg/640px-Saint_Paul_skyline%2C_Lake_of_the_Isles%2C_West_Side.jpg"
        },
        location: {
          lat: 44.9537029,
          lng: -93.0899578
        },
        politics: {
          dem16_frac: 65.73352008649098,
          rep16_frac: 26.29578579363281
        }
      }
    },
    {
      "Charleston, SC": {
        affordability: 273100,
        happiness: 65.48,
        img: {
          imgAuthor: "Salvationistdan",
          imgLic: "(CC BY-SA)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Charleston_SC_Collage-1.jpg/1200px-Charleston_SC_Collage-1.jpg"
        },
        location: {
          lat: 32.7764749,
          lng: -79.93105120000001
        },
        politics: {
          dem16_frac: 50.63861245379585,
          rep16_frac: 42.782485072504976
        }
      }
    },
    {
      "Gilbert, AZ": {
        affordability: 225000,
        happiness: 65.07,
        img: {
          imgAuthor: "Marine 69-71",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/c/cb/Gilbert-Gilbert_Heritage_District_as_viewed_from_Gilbert_Rd..jpg"
        },
        location: {
          lat: 33.3528264,
          lng: -111.789027
        },
        politics: {
          dem16_frac: 45.6797128627695,
          rep16_frac: 49.12624154071688
        }
      }
    },
    {
      "Anaheim, CA": {
        affordability: 620500,
        happiness: 65.02,
        img: {
          imgAuthor: "HarshLight",
          imgLic: "(CC BY 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Sleeping_Beauty_Castle_%2828926761750%29.jpg/1200px-Sleeping_Beauty_Castle_%2828926761750%29.jpg"
        },
        location: {
          lat: 33.8365932,
          lng: -117.9143012
        },
        politics: {
          dem16_frac: 50.96015441583128,
          rep16_frac: 43.28010943892407
        }
      }
    },
    {
      "Raleigh, NC": {
        affordability: 195900,
        happiness: 64.99,
        img: {
          imgAuthor: "Indy beetle",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/9/9d/Raleigh_photo_collage.jpg"
        },
        location: {
          lat: 35.7795897,
          lng: -78.6381787
        },
        politics: {
          dem16_frac: 78.90303767030018,
          rep16_frac: 18.518961359877245
        }
      }
    },
    {
      "Cape Coral, FL": {
        affordability: 190200,
        happiness: 64.96,
        img: {
          imgAuthor: "ISS Exp 47",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/f/f6/ISS047-E-84351_Cape_Coral%2C_Florida_%28annotated%29.jpg"
        },
        location: {
          lat: 26.5628537,
          lng: -81.9495331
        },
        politics: {
          dem16_frac: 38.28304128030645,
          rep16_frac: 58.66874157834479
        }
      }
    },
    {
      "Cedar Rapids, IA": {
        affordability: 150600,
        happiness: 64.9,
        img: {
          imgAuthor: "Iowahwyman",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/1/19/Cedar_Rapids_skyline.jpg"
        },
        location: {
          lat: 41.9778795,
          lng: -91.6656232
        },
        politics: {
          dem16_frac: 51.002058187399705,
          rep16_frac: 42.02103537291565
        }
      }
    },
    {
      "Minneapolis, MN": {
        affordability: 245400,
        happiness: 64.82,
        img: {
          imgAuthor: "RGully07",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/8/82/MinneapolisCollage2018.jpg"
        },
        location: {
          lat: 44.977753,
          lng: -93.2650108
        },
        politics: {
          dem16_frac: 63.820237748348305,
          rep16_frac: 28.509583078121565
        }
      }
    },
    {
      "Chula Vista, CA": {
        affordability: 484900,
        happiness: 64.54,
        img: {
          imgAuthor: "Roman Eugeniusz",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Chula_Vista%2C_CA%2C_USA_-_panoramio_%2877%29.jpg/1200px-Chula_Vista%2C_CA%2C_USA_-_panoramio_%2877%29.jpg"
        },
        location: {
          lat: 32.6400541,
          lng: -117.0841955
        },
        politics: {
          dem16_frac: 56.07101658575932,
          rep16_frac: 38.23522143506011
        }
      }
    },
    {
      "Pembroke Pines, FL": {
        affordability: 223400,
        happiness: 64.51,
        img: {
          imgAuthor: "economic development plan",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc: "assets/img/pembroke_pines_fl.png"
        },
        location: {
          lat: 26.007765,
          lng: -80.2962555
        },
        politics: {
          dem16_frac: 66.47197440076225,
          rep16_frac: 31.4182517315094
        }
      }
    },
    {
      "Honolulu, HI": {
        affordability: 626400,
        happiness: 64.21,
        img: {
          imgAuthor: "",
          imgLic: "",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/HonoluluM.png/288px-HonoluluM.png"
        },
        location: {
          lat: 21.3069444,
          lng: -157.8583333
        },
        politics: {
          dem16_frac: 61.47863191019417,
          rep16_frac: 31.607060973176566
        }
      }
    },
    {
      "Des Moines, IA": {
        affordability: 165500,
        happiness: 64.17,
        img: {
          imgAuthor: "Raivena",
          imgLic: "(CC BY 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Des_Moines_Montage.jpg/261px-Des_Moines_Montage.jpg"
        },
        location: {
          lat: 41.5868353,
          lng: -93.6249593
        },
        politics: {
          dem16_frac: 52.390771386043255,
          rep16_frac: 40.898782943700205
        }
      }
    },
    {
      "Irving, TX": {
        affordability: 148300,
        happiness: 64.07,
        img: {
          imgAuthor: "Av9",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Irving_Montage.jpg/343px-Irving_Montage.jpg"
        },
        location: {
          lat: 32.8140177,
          lng: -96.9488945
        },
        politics: {
          dem16_frac: 61.12643858847478,
          rep16_frac: 34.88514605361494
        }
      }
    },
    {
      "Santa Clarita, CA": {
        affordability: 495800,
        happiness: 64,
        img: {
          imgAuthor: "Jeffrey Beall",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/CanyonCountry.JPG/640px-CanyonCountry.JPG"
        },
        location: {
          lat: 34.3916641,
          lng: -118.542586
        },
        politics: {
          dem16_frac: 71.40718653188904,
          rep16_frac: 23.388693821283887
        }
      }
    },
    {
      "Chandler, AZ": {
        affordability: 225000,
        happiness: 63.83,
        img: {
          imgAuthor: "Chandlernews",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Neighborhoods_in_the_City_of_Chandler.jpg/640px-Neighborhoods_in_the_City_of_Chandler.jpg"
        },
        location: {
          lat: 33.3061605,
          lng: -111.8412502
        },
        politics: {
          dem16_frac: 45.6797128627695,
          rep16_frac: 49.12624154071688
        }
      }
    },
    {
      "Oceanside, CA": {
        affordability: 484900,
        happiness: 63.82,
        img: {
          imgAuthor: "Todd Schlender",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ocean_Americanization_%28cropped%29.jpg/640px-Ocean_Americanization_%28cropped%29.jpg"
        },
        location: {
          lat: 33.1958696,
          lng: -117.3794834
        },
        politics: {
          dem16_frac: 56.07101658575932,
          rep16_frac: 38.23522143506011
        }
      }
    },
    {
      "Omaha, NE": {
        affordability: 155100,
        happiness: 63.5,
        img: {
          imgAuthor: "Raymond Bucko",
          imgLic: "(CC BY 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Heartland_of_America_Park%2C_Omaha%2C_Nebraska.jpg/640px-Heartland_of_America_Park%2C_Omaha%2C_Nebraska.jpg"
        },
        location: {
          lat: 41.2565369,
          lng: -95.9345034
        },
        politics: {
          dem16_frac: 47.92352788444457,
          rep16_frac: 46.53146935968041
        }
      }
    },
    {
      "Lincoln, NE": {
        affordability: 162900,
        happiness: 63.43,
        img: {
          imgAuthor: "Hanyou23",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Skyline_of_Downtown_Lincoln%2C_Nebraska%2C_U.S._%282015%29.jpg/640px-Skyline_of_Downtown_Lincoln%2C_Nebraska%2C_U.S._%282015%29.jpg"
        },
        location: {
          lat: 40.813616,
          lng: -96.7025955
        },
        politics: {
          dem16_frac: 46.63451538100044,
          rep16_frac: 46.57519471814981
        }
      }
    },
    {
      "Oakland, CA": {
        affordability: 649100,
        happiness: 63.16,
        img: {
          imgAuthor: "Basil D Soufi",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/OAKLAND%2C_CA%2C_USA_-_Skyline_and_Bridge.JPG/640px-OAKLAND%2C_CA%2C_USA_-_Skyline_and_Bridge.JPG"
        },
        location: {
          lat: 37.8043637,
          lng: -122.2711137
        },
        politics: {
          dem16_frac: 79.31424750691053,
          rep16_frac: 14.871125824574563
        }
      }
    },
    {
      "Billings, MT": {
        affordability: 210500,
        happiness: 62.82,
        img: {
          imgAuthor: "Sara goth",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Billings%2C_Montana_Collage_4.jpg/385px-Billings%2C_Montana_Collage_4.jpg"
        },
        location: {
          lat: 45.7832856,
          lng: -108.5006904
        },
        politics: {
          dem16_frac: 32.53624639847156,
          rep16_frac: 59.58892501117051
        }
      }
    },
    {
      "Tempe, AZ": {
        affordability: 225000,
        happiness: 62.8,
        img: {
          imgAuthor: "Schwnj",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/e/e4/Tempeskyline3.jpg"
        },
        location: {
          lat: 33.4255104,
          lng: -111.9400054
        },
        politics: {
          dem16_frac: 45.6797128627695,
          rep16_frac: 49.12624154071688
        }
      }
    },
    {
      "Garden Grove, CA": {
        affordability: 620500,
        happiness: 62.7,
        img: {
          imgAuthor: "Arnold C",
          imgLic: "(CC)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Crys-ext.jpg/587px-Crys-ext.jpg"
        },
        location: {
          lat: 33.7742692,
          lng: -117.9379952
        },
        politics: {
          dem16_frac: 50.96015441583128,
          rep16_frac: 43.28010943892407
        }
      }
    },
    {
      "Denver, CO": {
        affordability: 322900,
        happiness: 62.41,
        img: {
          imgAuthor: "Hogs555",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/DenverCP.JPG/640px-DenverCP.JPG"
        },
        location: {
          lat: 39.7392358,
          lng: -104.990251
        },
        politics: {
          dem16_frac: 75.16907671842645,
          rep16_frac: 18.785488891089194
        }
      }
    },
    {
      "Fort Worth, TX": {
        affordability: 158200,
        happiness: 62.35,
        img: {
          imgAuthor: "TheTexasNationalist99",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Fort_Worth_Collage.png/320px-Fort_Worth_Collage.png"
        },
        location: {
          lat: 32.7554883,
          lng: -97.3307658
        },
        politics: {
          dem16_frac: 43.4500748304246,
          rep16_frac: 52.15243078185724
        }
      }
    },
    {
      "Burlington, VT": {
        affordability: 280000,
        happiness: 62.31,
        img: {
          imgAuthor: "Superbug2399",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Collage_of_Burlington%2C_VT%2C_USA.jpg/395px-Collage_of_Burlington%2C_VT%2C_USA.jpg"
        },
        location: {
          lat: 44.4758825,
          lng: -73.21207199999999
        },
        politics: {
          dem16_frac: 70.49040290954272,
          rep16_frac: 23.6827459456661
        }
      }
    },
    {
      "Peoria, AZ": {
        affordability: 225000,
        happiness: 62.3,
        img: {
          imgAuthor: "Ceemo",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Peoria_Collage_Christian_M_Williams.JPG/360px-Peoria_Collage_Christian_M_Williams.JPG"
        },
        location: {
          lat: 33.5805955,
          lng: -112.2373779
        },
        politics: {
          dem16_frac: 45.6797128627695,
          rep16_frac: 49.12624154071688
        }
      }
    },
    {
      "Boise, ID": {
        affordability: 219900,
        happiness: 61.94,
        img: {
          imgAuthor: "Rickmouser45",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Clearwater_Analytics_Boise.jpg/640px-Clearwater_Analytics_Boise.jpg"
        },
        location: {
          lat: 43.6150186,
          lng: -116.2023137
        },
        politics: {
          dem16_frac: 38.69173309064509,
          rep16_frac: 47.931610996640885
        }
      }
    },
    {
      "Garland, TX": {
        affordability: 148300,
        happiness: 61.86,
        img: {
          imgAuthor: "Randy Colborn",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Collage_of_Photos_of_Garland%2C_TX.jpg/371px-Collage_of_Photos_of_Garland%2C_TX.jpg"
        },
        location: {
          lat: 32.912624,
          lng: -96.63888329999999
        },
        politics: {
          dem16_frac: 61.12643858847478,
          rep16_frac: 34.88514605361494
        }
      }
    },
    {
      "Aurora, CO": {
        affordability: 292900,
        happiness: 61.83,
        img: {
          imgAuthor: "Jeffrey Beall",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Aurora_Municipal_Center.JPG/640px-Aurora_Municipal_Center.JPG"
        },
        location: {
          lat: 39.7294319,
          lng: -104.8319195
        },
        politics: {
          dem16_frac: 52.675585284280935,
          rep16_frac: 38.92593144877831
        }
      }
    },
    {
      "El Paso, TX": {
        affordability: 116600,
        happiness: 61.73,
        img: {
          imgAuthor: "TheTexasNationalist99",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/El_Paso_montage.png/301px-El_Paso_montage.png"
        },
        location: {
          lat: 31.7618778,
          lng: -106.4850217
        },
        politics: {
          dem16_frac: 69.13921067386367,
          rep16_frac: 25.92773855115985
        }
      }
    },
    {
      "Arlington, TX": {
        affordability: 158200,
        happiness: 61.73,
        img: {
          imgAuthor: "TheTexasNationalist99",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Arlington_collage.png/301px-Arlington_collage.png"
        },
        location: {
          lat: 32.735687,
          lng: -97.10806559999999
        },
        politics: {
          dem16_frac: 43.4500748304246,
          rep16_frac: 52.15243078185724
        }
      }
    },
    {
      "Washington, DC": {
        affordability: 537400,
        happiness: 61.68,
        img: {
          imgAuthor: "AlexTref871",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Washington_Montage_2016.png/343px-Washington_Montage_2016.png"
        },
        location: {
          lat: 38.9071923,
          lng: -77.0368707
        },
        politics: {
          dem16_frac: 92.84659188217161,
          rep16_frac: 4.122067134783354
        }
      }
    },
    {
      "Charlotte, NC": {
        affordability: 203900,
        happiness: 61.22,
        img: {
          imgAuthor: "TheTexasNationalist99",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Charlotte_NC_collage.png/400px-Charlotte_NC_collage.png"
        },
        location: {
          lat: 35.2270869,
          lng: -80.8431267
        },
        politics: {
          dem16_frac: 63.28204506381081,
          rep16_frac: 33.410922539267354
        }
      }
    },
    {
      "Fort Lauderdale, FL": {
        affordability: 223400,
        happiness: 61.16,
        img: {
          imgAuthor: "KeanoManu",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Skyline_of_Fort_Lauderdale%2C_Nov-15.jpg/640px-Skyline_of_Fort_Lauderdale%2C_Nov-15.jpg"
        },
        location: {
          lat: 26.1224386,
          lng: -80.13731740000001
        },
        politics: {
          dem16_frac: 66.47197440076225,
          rep16_frac: 31.4182517315094
        }
      }
    },
    {
      "Seattle, WA": {
        affordability: 446600,
        happiness: 61.11,
        img: {
          imgAuthor: "CommunistSquared",
          imgLic: "(CC0 1.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seattle_Kerry_Park_Skyline.jpg/640px-Seattle_Kerry_Park_Skyline.jpg"
        },
        location: {
          lat: 47.6062095,
          lng: -122.3320708
        },
        politics: {
          dem16_frac: 72.14892465385701,
          rep16_frac: 21.714537292097365
        }
      }
    },
    {
      "Aurora, IL": {
        affordability: 223400,
        happiness: 61.05,
        img: {
          imgAuthor: "Cbradshaw",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Aurora_Stolp_Island_Fox_R.JPG/640px-Aurora_Stolp_Island_Fox_R.JPG"
        },
        location: {
          lat: 41.7605849,
          lng: -88.32007150000001
        },
        politics: {
          dem16_frac: 51.36382428940568,
          rep16_frac: 42.422222222222224
        }
      }
    },
    {
      "Missoula, MT": {
        affordability: 259600,
        happiness: 60.99,
        img: {
          imgAuthor: "Missoulian",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Missoula_Collage_Wikipedia_8.jpg/480px-Missoula_Collage_Wikipedia_8.jpg"
        },
        location: {
          lat: 46.8721284,
          lng: -113.9940314
        },
        politics: {
          dem16_frac: 53.52323577037592,
          rep16_frac: 37.78141486601779
        }
      }
    },
    {
      "Santa Ana, CA": {
        affordability: 620500,
        happiness: 60.96,
        img: {
          imgAuthor: "Charlie Nguyen",
          imgLic: "(CC BY 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Santa_Ana_Amtrak_Station_%28cropped%29.jpg/640px-Santa_Ana_Amtrak_Station_%28cropped%29.jpg"
        },
        location: {
          lat: 33.7454725,
          lng: -117.867653
        },
        politics: {
          dem16_frac: 50.96015441583128,
          rep16_frac: 43.28010943892407
        }
      }
    },
    {
      "Boston, MA": {
        affordability: 430900,
        happiness: 60.96,
        img: {
          imgAuthor: "rokker",
          imgLic: "(CC BY 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Boston_-_panoramio_%2823%29.jpg/640px-Boston_-_panoramio_%2823%29.jpg"
        },
        location: {
          lat: 42.3600825,
          lng: -71.0588801
        },
        politics: {
          dem16_frac: 79.47231950763877,
          rep16_frac: 16.48737961959297
        }
      }
    },
    {
      "Colorado Springs, CO": {
        affordability: 238200,
        happiness: 60.96,
        img: {
          imgAuthor: "Postoak",
          imgLic: "(CC BY 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/CC_COSPRINGS.jpg/640px-CC_COSPRINGS.jpg"
        },
        location: {
          lat: 38.8338816,
          lng: -104.8213634
        },
        politics: {
          dem16_frac: 33.7746949146591,
          rep16_frac: 56.34255106568392
        }
      }
    },
    {
      "Durham, NC": {
        affordability: 195900,
        happiness: 60.9,
        img: {
          imgAuthor: "Dreid1987",
          imgLic: "(CC0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Durham-montage-05-08.jpg/279px-Durham-montage-05-08.jpg"
        },
        location: {
          lat: 35.9940329,
          lng: -78.898619
        },
        politics: {
          dem16_frac: 78.90303767030018,
          rep16_frac: 18.518961359877245
        }
      }
    },
    {
      "Portland, ME": {
        affordability: 259400,
        happiness: 60.83,
        img: {
          imgAuthor: "Karmos",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Portland%2C_Maine_Montage.jpg/421px-Portland%2C_Maine_Montage.jpg"
        },
        location: {
          lat: 43.6590993,
          lng: -70.2568189
        },
        politics: {
          dem16_frac: 60.10838019492084,
          rep16_frac: 33.69187557299605
        }
      }
    },
    {
      "Grand Rapids, MI": {
        affordability: 153500,
        happiness: 60.33,
        img: {
          imgAuthor: "Rachel Kramer",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Grand_Rapids_montage.jpg/279px-Grand_Rapids_montage.jpg"
        },
        location: {
          lat: 42.9633599,
          lng: -85.6680863
        },
        politics: {
          dem16_frac: 45.2434126750906,
          rep16_frac: 48.3099879191563
        }
      }
    },
    {
      "Rancho Cucamonga, CA": {
        affordability: 280200,
        happiness: 60.14,
        img: {
          imgAuthor: "Cheryl",
          imgLic: "(CC BY 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cucamonga_Peak_122608.jpg/640px-Cucamonga_Peak_122608.jpg"
        },
        location: {
          lat: 34.10639889999999,
          lng: -117.5931084
        },
        politics: {
          dem16_frac: 52.1920294998355,
          rep16_frac: 42.41302775796908
        }
      }
    },
    {
      "Salt Lake City, UT": {
        affordability: 260700,
        happiness: 60.11,
        img: {
          imgAuthor: "Eric Pancer",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Salt_Lake_City_montage_19_July_2011.jpg/329px-Salt_Lake_City_montage_19_July_2011.jpg"
        },
        location: {
          lat: 40.7607793,
          lng: -111.8910474
        },
        politics: {
          dem16_frac: 42.848287103532066,
          rep16_frac: 32.62819395207377
        }
      }
    },
    {
      "Yonkers, NY": {
        affordability: 513300,
        happiness: 60.1,
        img: {
          imgAuthor: "Famartin",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/2013-05-05_13_23_39_View_of_Yonkers%2C_New_York_from_Alpine_Overlook_on_the_New_Jersey_Palisades.jpg/640px-2013-05-05_13_23_39_View_of_Yonkers%2C_New_York_from_Alpine_Overlook_on_the_New_Jersey_Palisades.jpg"
        },
        location: {
          lat: 40.9312099,
          lng: -73.89874689999999
        },
        politics: {
          dem16_frac: 64.90517983862871,
          rep16_frac: 32.13766756669643
        }
      }
    },
    {
      "Rapid City, SD": {
        affordability: 172400,
        happiness: 60.07,
        img: {
          imgAuthor: "Dvorak86",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/RC-Downtown-Hills.jpg/510px-RC-Downtown-Hills.jpg"
        },
        location: {
          lat: 44.0805434,
          lng: -103.2310149
        },
        politics: {
          dem16_frac: 29.479901971052136,
          rep16_frac: 62.42852055884879
        }
      }
    },
    {
      "Dallas, TX": {
        affordability: 148300,
        happiness: 59.82,
        img: {
          imgAuthor: "Av9",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Dallas_Collage_Montage.png/348px-Dallas_Collage_Montage.png"
        },
        location: {
          lat: 32.7766642,
          lng: -96.79698789999999
        },
        politics: {
          dem16_frac: 61.12643858847478,
          rep16_frac: 34.88514605361494
        }
      }
    },
    {
      "South Burlington, VT": {
        affordability: 280000,
        happiness: 59.81,
        img: {
          imgAuthor: "Superbug2399",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/South_Burlington%2C_VT_City_Hall_2.jpg/519px-South_Burlington%2C_VT_City_Hall_2.jpg"
        },
        location: {
          lat: 44.4669941,
          lng: -73.1709604
        },
        politics: {
          dem16_frac: 70.49040290954272,
          rep16_frac: 23.6827459456661
        }
      }
    },
    {
      "Virginia Beach, VA": {
        affordability: 267300,
        happiness: 59.71,
        img: {
          imgAuthor: "Jason Pratt",
          imgLic: "(CC 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/VirginiaBeach.jpg/640px-VirginiaBeach.jpg"
        },
        location: {
          lat: 36.8529263,
          lng: -75.97798499999999
        },
        politics: {
          dem16_frac: 44.650794759012314,
          rep16_frac: 49.09876887989015
        }
      }
    },
    {
      "Long Beach, CA": {
        affordability: 495800,
        happiness: 59.58,
        img: {
          imgAuthor: "Tisoy",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/LBCmontagebytisoy.JPG/337px-LBCmontagebytisoy.JPG"
        },
        location: {
          lat: 33.7700504,
          lng: -118.1937395
        },
        politics: {
          dem16_frac: 71.40718653188904,
          rep16_frac: 23.388693821283887
        }
      }
    },
    {
      "Cheyenne, WY": {
        affordability: 202800,
        happiness: 59.51,
        img: {
          imgAuthor: "publichall",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Downtown_Cheyenne.jpg/640px-Downtown_Cheyenne.jpg"
        },
        location: {
          lat: 41.1399814,
          lng: -104.8202462
        },
        politics: {
          dem16_frac: 28.9698335210915,
          rep16_frac: 62.195518838402805
        }
      }
    },
    {
      "Columbia, MD": {
        affordability: 439900,
        happiness: 59.47,
        img: {
          imgAuthor: "Kittamaqundi",
          imgLic: "(CC BY 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Columbia_Lake_Front.jpg/640px-Columbia_Lake_Front.jpg"
        },
        location: {
          lat: 39.2037144,
          lng: -76.86104619999999
        },
        politics: {
          dem16_frac: 64.07606505420046,
          rep16_frac: 30.595419430195147
        }
      }
    },
    {
      "Mesa, AZ": {
        affordability: 225000,
        happiness: 59.25,
        img: {
          imgAuthor: "Ixnayonthetimmay",
          imgLic: "(CC BY 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Downtown_Mesa_Arizona.jpg/640px-Downtown_Mesa_Arizona.jpg"
        },
        location: {
          lat: 33.4151843,
          lng: -111.8314724
        },
        politics: {
          dem16_frac: 45.6797128627695,
          rep16_frac: 49.12624154071688
        }
      }
    },
    {
      "Chesapeake, VA": {
        affordability: 260900,
        happiness: 58.63,
        img: {
          imgAuthor: "US Army Corps of Eng",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Great_Dismal_Swamp_Canal.jpg/640px-Great_Dismal_Swamp_Canal.jpg"
        },
        location: {
          lat: 36.7682088,
          lng: -76.2874927
        },
        politics: {
          dem16_frac: 46.995806021801535,
          rep16_frac: 48.278143918731615
        }
      }
    },
    {
      "Reno, NV": {
        affordability: 268100,
        happiness: 58.58,
        img: {
          imgAuthor: "Kc0616",
          imgLic: "(CC BY 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Reno_skyline.JPG/640px-Reno_skyline.JPG"
        },
        location: {
          lat: 39.5296329,
          lng: -119.8138027
        },
        politics: {
          dem16_frac: 46.36423581578922,
          rep16_frac: 45.16824189371279
        }
      }
    },
    {
      "Tallahassee, FL": {
        affordability: 187400,
        happiness: 58.54,
        img: {
          imgAuthor: "Urbantallahassee",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Tallahassee_Header_for_Wikipedia_2.png/316px-Tallahassee_Header_for_Wikipedia_2.png"
        },
        location: {
          lat: 30.4382559,
          lng: -84.28073289999999
        },
        politics: {
          dem16_frac: 60.514069442158956,
          rep16_frac: 35.397070923152874
        }
      }
    },
    {
      "Atlanta, GA": {
        affordability: 268900,
        happiness: 58.46,
        img: {
          imgAuthor: "Atlantacitizen",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Midtown_Atlanta_Skyline.jpg/640px-Midtown_Atlanta_Skyline.jpg"
        },
        location: {
          lat: 33.7489954,
          lng: -84.3879824
        },
        politics: {
          dem16_frac: 69.22733088883595,
          rep16_frac: 27.106905418581288
        }
      }
    },
    {
      "Oxnard, CA": {
        affordability: 520300,
        happiness: 58.36,
        img: {
          imgAuthor: "Gemma.godina501",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/en/5/5a/OxnardWalkway1.JPG"
        },
        location: {
          lat: 34.1975048,
          lng: -119.1770516
        },
        politics: {
          dem16_frac: 55.37496630191535,
          rep16_frac: 38.57464409950598
        }
      }
    },
    {
      "Nampa, ID": {
        affordability: 144000,
        happiness: 58.2,
        img: {
          imgAuthor: "Visitor7",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Depot_%28Nampa%2C_Idaho%29.jpg/640px-Depot_%28Nampa%2C_Idaho%29.jpg"
        },
        location: {
          lat: 43.5788175,
          lng: -116.55978
        },
        politics: {
          dem16_frac: 23.16858083241907,
          rep16_frac: 64.93118724568446
        }
      }
    },
    {
      "Los Angeles, CA": {
        affordability: 495800,
        happiness: 58.12,
        img: {
          imgAuthor: "Adoramassey",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg/640px-Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg"
        },
        location: {
          lat: 34.0522342,
          lng: -118.2436849
        },
        politics: {
          dem16_frac: 71.40718653188904,
          rep16_frac: 23.388693821283887
        }
      }
    },
    {
      "Orlando, FL": {
        affordability: 192400,
        happiness: 58.04,
        img: {
          imgAuthor: "Artystyk386",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Orlando_collage.jpg/376px-Orlando_collage.jpg"
        },
        location: {
          lat: 28.5383355,
          lng: -81.3792365
        },
        politics: {
          dem16_frac: 60.38457310370099,
          rep16_frac: 35.74404543788934
        }
      }
    },
    {
      "Portland, OR": {
        affordability: 330900,
        happiness: 57.72,
        img: {
          imgAuthor: "Amateria1121",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Portland_and_Mt_Hood.jpg/640px-Portland_and_Mt_Hood.jpg"
        },
        location: {
          lat: 45.5154586,
          lng: -122.6793461
        },
        politics: {
          dem16_frac: 75.95943672050134,
          rep16_frac: 17.624845567723792
        }
      }
    },
    {
      "Salem, OR": {
        affordability: 205600,
        happiness: 57.71,
        img: {
          imgAuthor: "OR DOT",
          imgLic: "(CC BY 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Salem_Oregon_aerial.jpg/640px-Salem_Oregon_aerial.jpg"
        },
        location: {
          lat: 44.9428975,
          lng: -123.0350963
        },
        politics: {
          dem16_frac: 44.04443882892314,
          rep16_frac: 49.0379408685607
        }
      }
    },
    {
      "Brownsville, TX": {
        affordability: 82500,
        happiness: 57.55,
        img: {
          imgAuthor: "Westofzephyr",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Brownsville_Collage.jpg/310px-Brownsville_Collage.jpg"
        },
        location: {
          lat: 25.9017472,
          lng: -97.4974838
        },
        politics: {
          dem16_frac: 64.61483159775173,
          rep16_frac: 32.059605245958785
        }
      }
    },
    {
      "Pittsburgh, PA": {
        affordability: 140600,
        happiness: 57.45,
        img: {
          imgAuthor: "Yassie",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Montage_Pittsburgh.jpg/343px-Montage_Pittsburgh.jpg"
        },
        location: {
          lat: 40.44062479999999,
          lng: -79.9958864
        },
        politics: {
          dem16_frac: 56.44157948172575,
          rep16_frac: 40.03401884096503
        }
      }
    },
    {
      "Riverside, CA": {
        affordability: 304500,
        happiness: 57.25,
        img: {
          imgAuthor: "Steve Rouhotas",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/First_Church_Of_Christ_Historical_0196_Wiki_a_%28cropped%29.jpg/465px-First_Church_Of_Christ_Historical_0196_Wiki_a_%28cropped%29.jpg"
        },
        location: {
          lat: 33.9806005,
          lng: -117.3754942
        },
        politics: {
          dem16_frac: 49.610744106305916,
          rep16_frac: 45.27626782443843
        }
      }
    },
    {
      "Fontana, CA": {
        affordability: 280200,
        happiness: 57.23,
        img: {
          imgAuthor: "Jordan W",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Fontana%2C_California_City_Hall_-_panoramio.jpg/640px-Fontana%2C_California_City_Hall_-_panoramio.jpg"
        },
        location: {
          lat: 34.0922335,
          lng: -117.435048
        },
        politics: {
          dem16_frac: 52.1920294998355,
          rep16_frac: 42.41302775796908
        }
      }
    },
    {
      "New York, NY": {
        affordability: 623900,
        happiness: 57.1,
        img: {
          imgAuthor: "Jleon",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/NYC_Montage_2014_4_-_Jleon.jpg/365px-NYC_Montage_2014_4_-_Jleon.jpg"
        },
        location: {
          lat: 40.7127753,
          lng: -74.0059728
        },
        politics: {
          dem16_frac: 79.73870922356441,
          rep16_frac: 17.908869816895464
        }
      }
    },
    {
      "Nashua, NH": {
        affordability: 256300,
        happiness: 57.09,
        img: {
          imgAuthor: "Jon Platek",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Nashua_NH_Main_Street_50.JPG/640px-Nashua_NH_Main_Street_50.JPG"
        },
        location: {
          lat: 42.7653662,
          lng: -71.46756599999999
        },
        politics: {
          dem16_frac: 47.23349964902962,
          rep16_frac: 47.43459619434274
        }
      }
    },
    {
      "Huntsville, AL": {
        affordability: 173400,
        happiness: 57,
        img: {
          imgAuthor: "Anivron",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Downtown_Huntsville%2C_Alabama_cropped.jpg/640px-Downtown_Huntsville%2C_Alabama_cropped.jpg"
        },
        location: {
          lat: 34.7303688,
          lng: -86.5861037
        },
        politics: {
          dem16_frac: 39.15082803985628,
          rep16_frac: 55.93360631580268
        }
      }
    },
    {
      "Jersey City, NJ": {
        affordability: 349500,
        happiness: 56.85,
        img: {
          imgAuthor: "MusikAnimal",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Jersey_City_skyline_-_June_2017.jpg/640px-Jersey_City_skyline_-_June_2017.jpg"
        },
        location: {
          lat: 40.7177545,
          lng: -74.0431435
        },
        politics: {
          dem16_frac: 74.45947623184809,
          rep16_frac: 22.646146208266103
        }
      }
    },
    {
      "West Valley City, UT": {
        affordability: 260700,
        happiness: 56.83,
        img: {
          imgAuthor: "Leon7",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/LDS_stake_center_in_West_Valley_City%2C_Utah_%28cropped%29.jpg/640px-LDS_stake_center_in_West_Valley_City%2C_Utah_%28cropped%29.jpg"
        },
        location: {
          lat: 40.6916132,
          lng: -112.0010501
        },
        politics: {
          dem16_frac: 42.848287103532066,
          rep16_frac: 32.62819395207377
        }
      }
    },
    {
      "Manchester, NH": {
        affordability: 256300,
        happiness: 56.49,
        img: {
          imgAuthor: "Graham Nadig",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Manchester%2C_New_Hampshire_Montage.jpg/320px-Manchester%2C_New_Hampshire_Montage.jpg"
        },
        location: {
          lat: 42.9956397,
          lng: -71.4547891
        },
        politics: {
          dem16_frac: 47.23349964902962,
          rep16_frac: 47.43459619434274
        }
      }
    },
    {
      "Ontario, CA": {
        affordability: 280200,
        happiness: 56.35,
        img: {
          imgAuthor: "Mack Male",
          imgLic: "(CC BY-SA 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Ontario_Convention_Center.jpg/640px-Ontario_Convention_Center.jpg"
        },
        location: {
          lat: 34.0633443,
          lng: -117.6508876
        },
        politics: {
          dem16_frac: 52.1920294998355,
          rep16_frac: 42.41302775796908
        }
      }
    },
    {
      "San Antonio, TX": {
        affordability: 142300,
        happiness: 56.34,
        img: {
          imgAuthor: "TheTexasNationalist99",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/San_Antonio_Montage.png/343px-San_Antonio_Montage.png"
        },
        location: {
          lat: 29.4241219,
          lng: -98.49362819999999
        },
        politics: {
          dem16_frac: 54.465922005057685,
          rep16_frac: 40.98044836682945
        }
      }
    },
    {
      "Amarillo, TX": {
        affordability: 89000,
        happiness: 56.21,
        img: {
          imgAuthor: "Chris Hale",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Amarillo_Skyline_at_Dusk_in_January_2018.png/640px-Amarillo_Skyline_at_Dusk_in_January_2018.png"
        },
        location: {
          lat: 35.2219971,
          lng: -101.8312969
        },
        politics: {
          dem16_frac: 26.897282033180375,
          rep16_frac: 68.82809742322627
        }
      }
    },
    {
      "Vancouver, WA": {
        affordability: 272400,
        happiness: 56.17,
        img: {
          imgAuthor: "Drown Soda",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Vancouver_WA_Collage.jpg/311px-Vancouver_WA_Collage.jpg"
        },
        location: {
          lat: 45.6272259,
          lng: -122.6727305
        },
        politics: {
          dem16_frac: 46.325031667552,
          rep16_frac: 46.27037960201038
        }
      }
    },
    {
      "Tampa, FL": {
        affordability: 179500,
        happiness: 56.02,
        img: {
          imgAuthor: "Excel23",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/8/8c/TampaCollection1.png"
        },
        location: {
          lat: 27.950575,
          lng: -82.4571776
        },
        politics: {
          dem16_frac: 51.493264680576466,
          rep16_frac: 44.68837384383739
        }
      }
    },
    {
      "Miami, FL": {
        affordability: 242800,
        happiness: 55.97,
        img: {
          imgAuthor: "Averette",
          imgLic: "(CC BY 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Miami_collage_20110330.jpg/351px-Miami_collage_20110330.jpg"
        },
        location: {
          lat: 25.7616798,
          lng: -80.1917902
        },
        politics: {
          dem16_frac: 63.658434405877365,
          rep16_frac: 34.09382120633104
        }
      }
    },
    {
      "Dover, DE": {
        affordability: 205800,
        happiness: 55.94,
        img: {
          imgAuthor: "Tim Kiser",
          imgLic: "(CC BY-SA 2.5)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Dover_Delaware.jpg/640px-Dover_Delaware.jpg"
        },
        location: {
          lat: 39.158168,
          lng: -75.5243682
        },
        politics: {
          dem16_frac: 44.909969967543404,
          rep16_frac: 49.814822296742214
        }
      }
    },
    {
      "Moreno Valley, CA": {
        affordability: 304500,
        happiness: 55.61,
        img: {
          imgAuthor: "Steve Jacobs",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/a/ad/Sunnymead_Ranch_Lake.jpg"
        },
        location: {
          lat: 33.9424658,
          lng: -117.2296717
        },
        politics: {
          dem16_frac: 49.610744106305916,
          rep16_frac: 45.27626782443843
        }
      }
    },
    {
      "Glendale, AZ": {
        affordability: 225000,
        happiness: 55.36,
        img: {
          imgAuthor: "Marine 69-71",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glendale-Downtown_Glendale.jpg/640px-Glendale-Downtown_Glendale.jpg"
        },
        location: {
          lat: 33.5386523,
          lng: -112.1859866
        },
        politics: {
          dem16_frac: 45.6797128627695,
          rep16_frac: 49.12624154071688
        }
      }
    },
    {
      "Nashville, TN": {
        affordability: 194800,
        happiness: 55.34,
        img: {
          imgAuthor: "TheTexasNationalist99",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Nashville_collage.png/400px-Nashville_collage.png"
        },
        location: {
          lat: 36.1626638,
          lng: -86.7816016
        },
        politics: {
          dem16_frac: 60.30609385090923,
          rep16_frac: 34.266995398031675
        }
      }
    },
    {
      "Houston, TX": {
        affordability: 154100,
        happiness: 55.33,
        img: {
          imgAuthor: "TheTexasNationalist99",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Houston_Collage.png/301px-Houston_Collage.png"
        },
        location: {
          lat: 29.7604267,
          lng: -95.3698028
        },
        politics: {
          dem16_frac: 54.223505185023726,
          rep16_frac: 41.827111637463574
        }
      }
    },
    {
      "Chicago, IL": {
        affordability: 227400,
        happiness: 55.2,
        img: {
          imgAuthor: "Jleon",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Chicago_montage1.jpg/351px-Chicago_montage1.jpg"
        },
        location: {
          lat: 41.8781136,
          lng: -87.6297982
        },
        politics: {
          dem16_frac: 74.3757709047472,
          rep16_frac: 21.41931622725603
        }
      }
    },
    {
      "Columbia, SC": {
        affordability: 154100,
        happiness: 54.93,
        img: {
          imgAuthor: "Salvationistdan",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Cola_SC_Collage-.jpg/481px-Cola_SC_Collage-.jpg"
        },
        location: {
          lat: 34.0007104,
          lng: -81.0348144
        },
        politics: {
          dem16_frac: 63.99114521841794,
          rep16_frac: 31.141086186540733
        }
      }
    },
    {
      "Greensboro, NC": {
        affordability: 160200,
        happiness: 54.9,
        img: {
          imgAuthor: "Beyonce245",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Greensboro_Skyline.jpg/640px-Greensboro_Skyline.jpg"
        },
        location: {
          lat: 36.0726354,
          lng: -79.7919754
        },
        politics: {
          dem16_frac: 58.68965872893088,
          rep16_frac: 38.66165252472361
        }
      }
    },
    {
      "Lewiston, ME": {
        affordability: 152000,
        happiness: 54.55,
        img: {
          imgAuthor: "LewisTheMan",
          imgLic: "(CC0 1.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Lewiston%2C_Maine%2C_Montage.png/481px-Lewiston%2C_Maine%2C_Montage.png"
        },
        location: {
          lat: 44.100351,
          lng: -70.21477639999999
        },
        politics: {
          dem16_frac: 41.51608239971088,
          rep16_frac: 50.93783881460065
        }
      }
    },
    {
      "Laredo, TX": {
        affordability: 115500,
        happiness: 54.4,
        img: {
          imgAuthor: "Billy Hathorn",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Plaza_Theater%2C_downtown_Laredo%2C_TX_IMG_7673.JPG/640px-Plaza_Theater%2C_downtown_Laredo%2C_TX_IMG_7673.JPG"
        },
        location: {
          lat: 27.5035613,
          lng: -99.5075519
        },
        politics: {
          dem16_frac: 74.37881372324898,
          rep16_frac: 22.765399968347197
        }
      }
    },
    {
      "Hialeah, FL": {
        affordability: 242800,
        happiness: 54.33,
        img: {
          imgAuthor: "Ivan Curra",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Palm_Ave-Hialeah_-_panoramio.jpg/640px-Palm_Ave-Hialeah_-_panoramio.jpg"
        },
        location: {
          lat: 25.8575963,
          lng: -80.2781057
        },
        politics: {
          dem16_frac: 63.658434405877365,
          rep16_frac: 34.09382120633104
        }
      }
    },
    {
      "Lexington-Fayette, KY": {
        affordability: 175000,
        happiness: 54.13,
        img: {
          imgAuthor: "Madgeek1450",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/LexingtonDowntown.JPG/640px-LexingtonDowntown.JPG"
        },
        location: {
          lat: 38.0405837,
          lng: -84.5037164
        },
        politics: {
          dem16_frac: 51.2158779791396,
          rep16_frac: 41.75749968804821
        }
      }
    },
    {
      "Henderson, NV": {
        affordability: 212300,
        happiness: 54.13,
        img: {
          imgAuthor: "Lvtalon",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/District1.jpg/640px-District1.jpg"
        },
        location: {
          lat: 36.0395247,
          lng: -114.9817213
        },
        politics: {
          dem16_frac: 52.3983533245103,
          rep16_frac: 41.751010228357984
        }
      }
    },
    {
      "Sacramento, CA": {
        affordability: 299900,
        happiness: 53.96,
        img: {
          imgAuthor: "J.smith",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sacramento_Skyline_%28cropped%29.jpg/640px-Sacramento_Skyline_%28cropped%29.jpg"
        },
        location: {
          lat: 38.5815719,
          lng: -121.4943996
        },
        politics: {
          dem16_frac: 58.55674336828326,
          rep16_frac: 34.8695045837023
        }
      }
    },
    {
      "Modesto, CA": {
        affordability: 244100,
        happiness: 53.5,
        img: {
          imgAuthor: "Carl Skaggs",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Modesto_Arch.JPG/640px-Modesto_Arch.JPG"
        },
        location: {
          lat: 37.63909719999999,
          lng: -120.9968782
        },
        politics: {
          dem16_frac: 47.35399414631647,
          rep16_frac: 46.726996752934845
        }
      }
    },
    {
      "Newport News, VA": {
        affordability: 189300,
        happiness: 53.29,
        img: {
          imgAuthor: "Etombari",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Downtown_Newport_News.jpg/640px-Downtown_Newport_News.jpg"
        },
        location: {
          lat: 37.0870821,
          lng: -76.4730122
        },
        politics: {
          dem16_frac: 59.90910685059622,
          rep16_frac: 34.55985503857844
        }
      }
    },
    {
      "Tucson, AZ": {
        affordability: 166300,
        happiness: 53.19,
        img: {
          imgAuthor: "John Diebolt",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/TucsonDerivative.png/264px-TucsonDerivative.png"
        },
        location: {
          lat: 32.2226066,
          lng: -110.9747108
        },
        politics: {
          dem16_frac: 54.23215305381387,
          rep16_frac: 40.752351966116166
        }
      }
    },
    {
      "Springfield, MO": {
        affordability: 136300,
        happiness: 53.03,
        img: {
          imgAuthor: "Joelfun",
          imgLic: "(Free Art License)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/ParkCentralSquarefountainbyCVBCS.jpg/640px-ParkCentralSquarefountainbyCVBCS.jpg"
        },
        location: {
          lat: 37.2089572,
          lng: -93.29229889999999
        },
        politics: {
          dem16_frac: 33.226496563721994,
          rep16_frac: 60.643841735300796
        }
      }
    },
    {
      "St Petersburg, FL": {
        affordability: 167100,
        happiness: 52.76,
        img: {
          imgAuthor: "Ryanbrz",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/en/0/0f/Downtown_St._Petersburg%2C_Florida.png"
        },
        location: {
          lat: 27.7676008,
          lng: -82.64029149999999
        },
        politics: {
          dem16_frac: 47.470499674479164,
          rep16_frac: 48.572998046875
        }
      }
    },
    {
      "Richmond, VA": {
        affordability: 209200,
        happiness: 52.66,
        img: {
          imgAuthor: "Ken Lund",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Collage_of_Landmarks_in_Richmond%2C_Virginia_v_1.jpg/389px-Collage_of_Landmarks_in_Richmond%2C_Virginia_v_1.jpg"
        },
        location: {
          lat: 37.5407246,
          lng: -77.4360481
        },
        politics: {
          dem16_frac: 78.79734808496262,
          rep16_frac: 15.047928719226384
        }
      }
    },
    {
      "Tacoma, WA": {
        affordability: 255800,
        happiness: 52.59,
        img: {
          imgAuthor: "Jakeroot",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Montage_of_Tacoma%2C_cir._early_2012.jpg/302px-Montage_of_Tacoma%2C_cir._early_2012.jpg"
        },
        location: {
          lat: 47.2528768,
          lng: -122.4442906
        },
        politics: {
          dem16_frac: 49.69311080249975,
          rep16_frac: 42.172775518301755
        }
      }
    },
    {
      "Warwick, RI": {
        affordability: 212600,
        happiness: 52.41,
        img: {
          imgAuthor: "Marcbela",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/1/1f/Warwick_City_Hall.jpg"
        },
        location: {
          lat: 41.7001009,
          lng: -71.4161671
        },
        politics: {
          dem16_frac: 47.08225802410363,
          rep16_frac: 47.78256620981684
        }
      }
    },
    {
      "Lubbock, TX": {
        affordability: 122700,
        happiness: 52.29,
        img: {
          imgAuthor: "Redraiderengineer",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/LubbockSkyline2013.jpg/640px-LubbockSkyline2013.jpg"
        },
        location: {
          lat: 33.5778631,
          lng: -101.8551665
        },
        politics: {
          dem16_frac: 28.509076075871914,
          rep16_frac: 66.86314501325718
        }
      }
    },
    {
      "Casper, WY": {
        affordability: 198600,
        happiness: 51.99,
        img: {
          imgAuthor: "Adbay",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Casperskyline.jpg/320px-Casperskyline.jpg"
        },
        location: {
          lat: 42.8500769,
          lng: -106.3251749
        },
        politics: {
          dem16_frac: 20.228972394054104,
          rep16_frac: 72.39405410396085
        }
      }
    },
    {
      "Kansas City, MO": {
        affordability: 131500,
        happiness: 51.96,
        img: {
          imgAuthor: "Jordanbruening",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kansas_City_Collage_2016.jpg/480px-Kansas_City_Collage_2016.jpg"
        },
        location: {
          lat: 39.0997265,
          lng: -94.5785667
        },
        politics: {
          dem16_frac: 55.67616463138852,
          rep16_frac: 39.03143204007304
        }
      }
    },
    {
      "Phoenix, AZ": {
        affordability: 225000,
        happiness: 51.94,
        img: {
          imgAuthor: "Onel5969",
          imgLic: "(CC BY-SA 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/PhoenixMontage02.jpg/408px-PhoenixMontage02.jpg"
        },
        location: {
          lat: 33.4483771,
          lng: -112.0740373
        },
        politics: {
          dem16_frac: 45.6797128627695,
          rep16_frac: 49.12624154071688
        }
      }
    },
    {
      "Oklahoma City, OK": {
        affordability: 142700,
        happiness: 51.59,
        img: {
          imgAuthor: "Rcsprinter123",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/2/2e/Oklahoma_City_montage.png"
        },
        location: {
          lat: 35.4675602,
          lng: -97.5164276
        },
        politics: {
          dem16_frac: 41.17591161109466,
          rep16_frac: 51.69018562985867
        }
      }
    },
    {
      "Corpus Christi, TX": {
        affordability: 122400,
        happiness: 51.5,
        img: {
          imgAuthor: "Lejflo",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/CorpusChristiTX_Night.jpg/638px-CorpusChristiTX_Night.jpg"
        },
        location: {
          lat: 27.8005828,
          lng: -97.39638099999999
        },
        politics: {
          dem16_frac: 47.23253621654899,
          rep16_frac: 48.77354316166144
        }
      }
    },
    {
      "Winston-Salem, NC": {
        affordability: 151400,
        happiness: 51.44,
        img: {
          imgAuthor: "Vasiliymeshko",
          imgLic: "(CC BY 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Winston_salem_panorama.jpg/640px-Winston_salem_panorama.jpg"
        },
        location: {
          lat: 36.09985959999999,
          lng: -80.244216
        },
        politics: {
          dem16_frac: 53.61343466137999,
          rep16_frac: 43.355998817453
        }
      }
    },
    {
      "Albuquerque, NM": {
        affordability: 189700,
        happiness: 51.15,
        img: {
          imgAuthor: "Danae Hurst",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Albuquerque_Infobox_Photo.png/316px-Albuquerque_Infobox_Photo.png"
        },
        location: {
          lat: 35.0843859,
          lng: -106.650422
        },
        politics: {
          dem16_frac: 52.190408964574054,
          rep16_frac: 34.51199247069896
        }
      }
    },
    {
      "Columbus, OH": {
        affordability: 158400,
        happiness: 51.14,
        img: {
          imgAuthor: "Yassie",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Montage_Columbus_1.jpg/465px-Montage_Columbus_1.jpg"
        },
        location: {
          lat: 39.9611755,
          lng: -82.99879419999999
        },
        politics: {
          dem16_frac: 60.56505099051578,
          rep16_frac: 34.67174799129637
        }
      }
    },
    {
      "Bakersfield, CA": {
        affordability: 190600,
        happiness: 50.98,
        img: {
          imgAuthor: "Bobak Ha'Eri",
          imgLic: "(CC BY 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2008-0621-Bakersfield-pan.JPG/640px-2008-0621-Bakersfield-pan.JPG"
        },
        location: {
          lat: 35.3732921,
          lng: -119.0187125
        },
        politics: {
          dem16_frac: 39.72028935583879,
          rep16_frac: 54.73142725915719
        }
      }
    },
    {
      "Bridgeport, CT": {
        affordability: 417800,
        happiness: 50.92,
        img: {
          imgAuthor: "Iracaz",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Bridgeport_montage.jpg/344px-Bridgeport_montage.jpg"
        },
        location: {
          lat: 41.1792258,
          lng: -73.1894384
        },
        politics: {
          dem16_frac: 58.18552740939702,
          rep16_frac: 37.890557401183095
        }
      }
    },
    {
      "Jacksonville, FL": {
        affordability: 156200,
        happiness: 50.55,
        img: {
          imgAuthor: "Excel23",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/JXFL2011N.png/520px-JXFL2011N.png"
        },
        location: {
          lat: 30.3321838,
          lng: -81.65565099999999
        },
        politics: {
          dem16_frac: 47.49495024887226,
          rep16_frac: 48.99564765099106
        }
      }
    },
    {
      "Knoxville, TN": {
        affordability: 169400,
        happiness: 50.43,
        img: {
          imgAuthor: "Nathan C. Fortner",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Knoxville_TN_skyline.jpg/640px-Knoxville_TN_skyline.jpg"
        },
        location: {
          lat: 35.9606384,
          lng: -83.9207392
        },
        politics: {
          dem16_frac: 35.06576818805574,
          rep16_frac: 58.97604676848929
        }
      }
    },
    {
      "Louisville, KY": {
        affordability: 159000,
        happiness: 50.31,
        img: {
          imgAuthor: "Peter2006son",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Louisville_montage.jpg/384px-Louisville_montage.jpg"
        },
        location: {
          lat: 38.2526647,
          lng: -85.7584557
        },
        politics: {
          dem16_frac: 54.067899380620744,
          rep16_frac: 40.73226155598497
        }
      }
    },
    {
      "Norfolk, VA": {
        affordability: 194800,
        happiness: 49.97,
        img: {
          imgAuthor: "PghPhxNfk",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/MontageNorfolkVAUSA.jpg/328px-MontageNorfolkVAUSA.jpg"
        },
        location: {
          lat: 36.8507689,
          lng: -76.28587259999999
        },
        politics: {
          dem16_frac: 68.41510136753047,
          rep16_frac: 26.439365721279202
        }
      }
    },
    {
      "Chattanooga, TN": {
        affordability: 166100,
        happiness: 49.94,
        img: {
          imgAuthor: "TheTexasNationalist99",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Chattanooga_collage.png/301px-Chattanooga_collage.png"
        },
        location: {
          lat: 35.0456297,
          lng: -85.3096801
        },
        politics: {
          dem16_frac: 39.167044681333635,
          rep16_frac: 55.75314697210252
        }
      }
    },
    {
      "Wichita, KS": {
        affordability: 130900,
        happiness: 49.79,
        img: {
          imgAuthor: "Nnez4321",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/9/9a/Wichita-ks.jpg"
        },
        location: {
          lat: 37.68717609999999,
          lng: -97.33005299999999
        },
        politics: {
          dem16_frac: 36.91065006915629,
          rep16_frac: 56.05477178423236
        }
      }
    },
    {
      "Worcester, MA": {
        affordability: 260800,
        happiness: 49.77,
        img: {
          imgAuthor: "Terageorge ",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Downtown_Worcester%2C_Massachusetts.jpg/640px-Downtown_Worcester%2C_Massachusetts.jpg"
        },
        location: {
          lat: 42.2625932,
          lng: -71.8022934
        },
        politics: {
          dem16_frac: 51.74291024012263,
          rep16_frac: 41.2466008000588
        }
      }
    },
    {
      "Rochester, NY": {
        affordability: 142300,
        happiness: 49.76,
        img: {
          imgAuthor: "EastOfWest",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/RochesterCollage4.jpg/360px-RochesterCollage4.jpg"
        },
        location: {
          lat: 43.15657789999999,
          lng: -77.6088465
        },
        politics: {
          dem16_frac: 54.3668245024425,
          rep16_frac: 40.251558576229684
        }
      }
    },
    {
      "San Bernardino, CA": {
        affordability: 280200,
        happiness: 49.56,
        img: {
          imgAuthor: "House10902",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/6/6c/Downtown_San_Bernardino.jpg"
        },
        location: {
          lat: 34.1083449,
          lng: -117.2897652
        },
        politics: {
          dem16_frac: 52.1920294998355,
          rep16_frac: 42.41302775796908
        }
      }
    },
    {
      "Buffalo, NY": {
        affordability: 139900,
        happiness: 49.22,
        img: {
          imgAuthor: "Pete716",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Aerial_photo_of_Buffalo%2C_NY_Skyline.jpg/640px-Aerial_photo_of_Buffalo%2C_NY_Skyline.jpg"
        },
        location: {
          lat: 42.88644679999999,
          lng: -78.8783689
        },
        politics: {
          dem16_frac: 50.115069093641715,
          rep16_frac: 45.35366133678453
        }
      }
    },
    {
      "Fresno, CA": {
        affordability: 220600,
        happiness: 48.86,
        img: {
          imgAuthor: "Mortadelo2005",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/a/a8/Downtownfresnoskyline.jpg"
        },
        location: {
          lat: 36.7377981,
          lng: -119.7871247
        },
        politics: {
          dem16_frac: 49.41182111690055,
          rep16_frac: 45.53151871623565
        }
      }
    },
    {
      "Milwaukee, WI": {
        affordability: 150300,
        happiness: 48.75,
        img: {
          imgAuthor: "Maximilian77",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Milwaukee_Collage_New.jpg/343px-Milwaukee_Collage_New.jpg"
        },
        location: {
          lat: 43.0389025,
          lng: -87.9064736
        },
        politics: {
          dem16_frac: 66.43814515943627,
          rep16_frac: 28.988435984090856
        }
      }
    },
    {
      "Baton Rouge, LA": {
        affordability: 177800,
        happiness: 48.56,
        img: {
          imgAuthor: "TheTexasNationalist99",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Baton_Rouge_collage.png/400px-Baton_Rouge_collage.png"
        },
        location: {
          lat: 30.4514677,
          lng: -91.18714659999999
        },
        politics: {
          dem16_frac: 52.31495629851476,
          rep16_frac: 43.100462481918385
        }
      }
    },
    {
      "Stockton, CA": {
        affordability: 281100,
        happiness: 48.35,
        img: {
          imgAuthor: "LPS.1",
          imgLic: "(CC0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Downtown_Stockton_California.jpg/640px-Downtown_Stockton_California.jpg"
        },
        location: {
          lat: 37.9577016,
          lng: -121.2907796
        },
        politics: {
          dem16_frac: 53.880957953038454,
          rep16_frac: 40.99443734360654
        }
      }
    },
    {
      "Spokane, WA": {
        affordability: 195500,
        happiness: 48.08,
        img: {
          imgAuthor: "Mark Wagner",
          imgLic: "(CC BY 2.5)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/SpokaneFromPalisades_20070614.jpg/640px-SpokaneFromPalisades_20070614.jpg"
        },
        location: {
          lat: 47.6587802,
          lng: -117.4260465
        },
        politics: {
          dem16_frac: 41.61360239522109,
          rep16_frac: 49.906526785242285
        }
      }
    },
    {
      "Indianapolis, IN": {
        affordability: 123500,
        happiness: 47.83,
        img: {
          imgAuthor: "Momoneymoproblemz",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Indianapolis_Montage_2.jpg/433px-Indianapolis_Montage_2.jpg"
        },
        location: {
          lat: 39.768403,
          lng: -86.158068
        },
        politics: {
          dem16_frac: 58.9015980280832,
          rep16_frac: 36.06724457861357
        }
      }
    },
    {
      "Fort Wayne, IN": {
        affordability: 119400,
        happiness: 47.63,
        img: {
          imgAuthor: "Momoneymoproblemz",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Downtown_Fort_Wayne%2C_Indiana_Skyline_from_Old_Fort%2C_May_2014.jpg/640px-Downtown_Fort_Wayne%2C_Indiana_Skyline_from_Old_Fort%2C_May_2014.jpg"
        },
        location: {
          lat: 41.079273,
          lng: -85.1393513
        },
        politics: {
          dem16_frac: 37.87854884180346,
          rep16_frac: 57.481805647965864
        }
      }
    },
    {
      "New Orleans, LA": {
        affordability: 205000,
        happiness: 47.57,
        img: {
          imgAuthor: "TheTexasNationalist99 ",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/New_Orleans_header_collage.png/301px-New_Orleans_header_collage.png"
        },
        location: {
          lat: 29.95106579999999,
          lng: -90.0715323
        },
        politics: {
          dem16_frac: 80.8077575640476,
          rep16_frac: 14.652304385366413
        }
      }
    },
    {
      "North Las Vegas, NV": {
        affordability: 212300,
        happiness: 47.19,
        img: {
          imgAuthor: "Meridethmyers",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Northlasv.jpg/800px-Northlasv.jpg"
        },
        location: {
          lat: 36.1988592,
          lng: -115.1175013
        },
        politics: {
          dem16_frac: 52.3983533245103,
          rep16_frac: 41.751010228357984
        }
      }
    },
    {
      "Las Vegas, NV": {
        affordability: 212300,
        happiness: 47.02,
        img: {
          imgAuthor: "Rmvisuals",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/DowntownLasVegas.jpg/640px-DowntownLasVegas.jpg"
        },
        location: {
          lat: 36.1699412,
          lng: -115.1398296
        },
        politics: {
          dem16_frac: 52.3983533245103,
          rep16_frac: 41.751010228357984
        }
      }
    },
    {
      "Tulsa, OK": {
        affordability: 145800,
        happiness: 46.5,
        img: {
          imgAuthor: "Jordan Michael Winn",
          imgLic: "(CC0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Downtown_Tulsa_Skyline.jpg/640px-Downtown_Tulsa_Skyline.jpg"
        },
        location: {
          lat: 36.1539816,
          lng: -95.99277500000001
        },
        politics: {
          dem16_frac: 35.554861553312215,
          rep16_frac: 58.39826084840423
        }
      }
    },
    {
      "Wilmington, DE": {
        affordability: 248100,
        happiness: 46.32,
        img: {
          imgAuthor: "Tim Kiser",
          imgLic: "(CC BY-SA 2.5)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Wilmington_Delaware_skyline.jpg/640px-Wilmington_Delaware_skyline.jpg"
        },
        location: {
          lat: 39.744655,
          lng: -75.5483909
        },
        politics: {
          dem16_frac: 62.303991310600146,
          rep16_frac: 32.70266342343996
        }
      }
    },
    {
      "Providence, RI": {
        affordability: 214400,
        happiness: 45.81,
        img: {
          imgAuthor: "Av9",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Providence_Montage_Updated.jpg/372px-Providence_Montage_Updated.jpg"
        },
        location: {
          lat: 41.8239891,
          lng: -71.4128343
        },
        politics: {
          dem16_frac: 58.467910099554466,
          rep16_frac: 37.29514119721363
        }
      }
    },
    {
      "New Haven, CT": {
        affordability: 244400,
        happiness: 45.56,
        img: {
          imgAuthor: "Charles Barneby",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/New_Haven_montage_2.jpg/298px-New_Haven_montage_2.jpg"
        },
        location: {
          lat: 41.308274,
          lng: -72.9278835
        },
        politics: {
          dem16_frac: 54.162310559204485,
          rep16_frac: 42.13067524321046
        }
      }
    },
    {
      "Montgomery, AL": {
        affordability: 124100,
        happiness: 45.48,
        img: {
          imgAuthor: "Clinthammer",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Montgomery%2Cal.png/396px-Montgomery%2Cal.png"
        },
        location: {
          lat: 32.3792233,
          lng: -86.3077368
        },
        politics: {
          dem16_frac: 62.03633210675464,
          rep16_frac: 35.87531193164996
        }
      }
    },
    {
      "Baltimore, MD": {
        affordability: 153200,
        happiness: 44.75,
        img: {
          imgAuthor: "Excel23",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/9/98/BaltimoreC12.png"
        },
        location: {
          lat: 39.2903848,
          lng: -76.6121893
        },
        politics: {
          dem16_frac: 85.44454014738253,
          rep16_frac: 10.874724854053019
        }
      }
    },
    {
      "Jackson, MS": {
        affordability: 109400,
        happiness: 44.7,
        img: {
          imgAuthor: "Excel23",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/6/62/JacksonMissColl.png"
        },
        location: {
          lat: 32.2987573,
          lng: -90.1848103
        },
        politics: {
          dem16_frac: 70.92510050690439,
          rep16_frac: 27.22316902639399
        }
      }
    },
    {
      "Shreveport, LA": {
        affordability: 138200,
        happiness: 44.59,
        img: {
          imgAuthor: "TheTexasNationalist99",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Shreveport_Header_Infobox_Collage.png/301px-Shreveport_Header_Infobox_Collage.png"
        },
        location: {
          lat: 32.5251516,
          lng: -93.7501789
        },
        politics: {
          dem16_frac: 50.54805791728534,
          rep16_frac: 46.31964213094754
        }
      }
    },
    {
      "Memphis, TN": {
        affordability: 135700,
        happiness: 44.45,
        img: {
          imgAuthor: "TrevB",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Memphis_TN_Photo_Collage.png/403px-Memphis_TN_Photo_Collage.png"
        },
        location: {
          lat: 35.1495343,
          lng: -90.0489801
        },
        politics: {
          dem16_frac: 62.26703348691169,
          rep16_frac: 34.63739336649983
        }
      }
    },
    {
      "Philadelphia, PA": {
        affordability: 151500,
        happiness: 44.27,
        img: {
          imgAuthor: "Meihe Chen",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BenjaminFranklinParkway2017.jpg/640px-BenjaminFranklinParkway2017.jpg"
        },
        location: {
          lat: 39.9525839,
          lng: -75.1652215
        },
        politics: {
          dem16_frac: 82.40513828471965,
          rep16_frac: 15.497473637476903
        }
      }
    },
    {
      "Columbus, GA": {
        affordability: 140200,
        happiness: 44.27,
        img: {
          imgAuthor: "PghPhxNfk",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Downtown_Columbus%2C_Georgia_skyline.jpg/640px-Downtown_Columbus%2C_Georgia_skyline.jpg"
        },
        location: {
          lat: 32.4609764,
          lng: -84.9877094
        },
        politics: {
          dem16_frac: 57.96545667447307,
          rep16_frac: 39.375
        }
      }
    },
    {
      "Fayetteville, NC": {
        affordability: 131200,
        happiness: 44.17,
        img: {
          imgAuthor: "Gerry Dincher",
          imgLic: "(CC BY-SA 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/TheMarketHouse_FAY.jpg/640px-TheMarketHouse_FAY.jpg"
        },
        location: {
          lat: 35.0526641,
          lng: -78.87835849999999
        },
        politics: {
          dem16_frac: 56.68960306104404,
          rep16_frac: 40.6689603061044
        }
      }
    },
    {
      "Akron, OH": {
        affordability: 137000,
        happiness: 44.05,
        img: {
          imgAuthor: "Threeblur0",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/AkronOhioSky.jpg/459px-AkronOhioSky.jpg"
        },
        location: {
          lat: 41.0814447,
          lng: -81.51900529999999
        },
        politics: {
          dem16_frac: 51.981899438658544,
          rep16_frac: 43.823443507763955
        }
      }
    },
    {
      "Cincinnati, OH": {
        affordability: 145800,
        happiness: 43.5,
        img: {
          imgAuthor: "EEJCC",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Photomontage_Cincinnati_V01.jpg/280px-Photomontage_Cincinnati_V01.jpg"
        },
        location: {
          lat: 39.1031182,
          lng: -84.5120196
        },
        politics: {
          dem16_frac: 52.553670886075956,
          rep16_frac: 43.03088607594937
        }
      }
    },
    {
      "Fort Smith, AR": {
        affordability: 116800,
        happiness: 43.33,
        img: {
          imgAuthor: "Brandonrush",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Fort_Smith%2C_AR_002.jpg/640px-Fort_Smith%2C_AR_002.jpg"
        },
        location: {
          lat: 35.3859242,
          lng: -94.39854749999999
        },
        politics: {
          dem16_frac: 27.616219769260407,
          rep16_frac: 65.20773362950203
        }
      }
    },
    {
      "St Louis, MO": {
        affordability: 123800,
        happiness: 42.85,
        img: {
          imgAuthor: "Redcody",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/8/8f/StLouisMontage.jpg"
        },
        location: {
          lat: 38.6270025,
          lng: -90.19940419999999
        },
        politics: {
          dem16_frac: 79.65824980573456,
          rep16_frac: 15.918777422823638
        }
      }
    },
    {
      "Augusta, GA": {
        affordability: 100200,
        happiness: 42.38,
        img: {
          imgAuthor: "Sir Mildred Pierce",
          imgLic: "(CC BY 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Augusta_Georgia_Broad_Street_Lamar_Building.jpg/640px-Augusta_Georgia_Broad_Street_Lamar_Building.jpg"
        },
        location: {
          lat: 33.4734978,
          lng: -82.0105148
        },
        politics: {
          dem16_frac: 64.98425659088484,
          rep16_frac: 32.608869676593024
        }
      }
    },
    {
      "Mobile, AL": {
        affordability: 124500,
        happiness: 42.22,
        img: {
          imgAuthor: "Altairisfar",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/5/5d/Mobile_Montage-2.jpg"
        },
        location: {
          lat: 30.6953657,
          lng: -88.0398912
        },
        politics: {
          dem16_frac: 41.8815450433633,
          rep16_frac: 55.74923341514319
        }
      }
    },
    {
      "Newark, NJ": {
        affordability: 362300,
        happiness: 41.86,
        img: {
          imgAuthor: "Payton Chung",
          imgLic: "(CC BY-SA 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/6/64/Newark_Skyline_Northwest_View.jpg"
        },
        location: {
          lat: 40.735657,
          lng: -74.1723667
        },
        politics: {
          dem16_frac: 77.05965151029991,
          rep16_frac: 20.69958106521507
        }
      }
    },
    {
      "Huntington, WV": {
        affordability: 119800,
        happiness: 41.58,
        img: {
          imgAuthor: "Wvfunnyman",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/HWV_Collage.jpg/480px-HWV_Collage.jpg"
        },
        location: {
          lat: 38.4192496,
          lng: -82.44515400000002
        },
        politics: {
          dem16_frac: 34.57386624262255,
          rep16_frac: 60.08378948656004
        }
      }
    },
    {
      "Little Rock, AR": {
        affordability: 148300,
        happiness: 41.4,
        img: {
          imgAuthor: "Brandonrush",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Little_Rock_collage.png/300px-Little_Rock_collage.png"
        },
        location: {
          lat: 34.7464809,
          lng: -92.28959479999999
        },
        politics: {
          dem16_frac: 56.040655606134706,
          rep16_frac: 38.361987886084044
        }
      }
    },
    {
      "Gulfport, MS": {
        affordability: 144300,
        happiness: 41.06,
        img: {
          imgAuthor: "Redditaddict69",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Street_in_Downtown_Gulfport_MS.jpg/360px-Street_in_Downtown_Gulfport_MS.jpg"
        },
        location: {
          lat: 30.3674198,
          lng: -89.0928155
        },
        politics: {
          dem16_frac: 33.3123912623236,
          rep16_frac: 63.96997229202912
        }
      }
    },
    {
      "Cleveland, OH": {
        affordability: 123900,
        happiness: 40.81,
        img: {
          imgAuthor: "Levdr1lp",
          imgLic: "(CC BY 2.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Cleveland_photomontage_2016.jpg/333px-Cleveland_photomontage_2016.jpg"
        },
        location: {
          lat: 41.49932,
          lng: -81.6943605
        },
        politics: {
          dem16_frac: 65.83577662328756,
          rep16_frac: 30.844435299967422
        }
      }
    },
    {
      "Birmingham, AL": {
        affordability: 149000,
        happiness: 40.78,
        img: {
          imgAuthor: "Polk540",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Birmingham_AL_Montage.jpg/393px-Birmingham_AL_Montage.jpg"
        },
        location: {
          lat: 33.5185892,
          lng: -86.8103567
        },
        politics: {
          dem16_frac: 52.24931147043718,
          rep16_frac: 45.02207775644494
        }
      }
    },
    {
      "Charleston, WV": {
        affordability: 111200,
        happiness: 39.68,
        img: {
          imgAuthor: "Pubdog",
          imgLic: "(Public Domain)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Spring_Hill_View_Apr_09.JPG/640px-Spring_Hill_View_Apr_09.JPG"
        },
        location: {
          lat: 38.3498195,
          lng: -81.6326234
        },
        politics: {
          dem16_frac: 37.315323483919144,
          rep16_frac: 57.955090938183375
        }
      }
    },
    {
      "Toledo, OH": {
        affordability: 109000,
        happiness: 39.48,
        img: {
          imgAuthor: "Dlte",
          imgLic: "(CC BY-SA 3.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Toledo_Montage.jpg/402px-Toledo_Montage.jpg"
        },
        location: {
          lat: 41.6528052,
          lng: -83.5378674
        },
        politics: {
          dem16_frac: 56.01041297134868,
          rep16_frac: 38.65841697794286
        }
      }
    },
    {
      "Detroit, MI": {
        affordability: 149500,
        happiness: 29.19,
        img: {
          imgAuthor: "Av9",
          imgLic: "(CC BY-SA 4.0)",
          imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Detroit_Montage_3.png/390px-Detroit_Montage_3.png"
        },
        location: {
          lat: 42.331427,
          lng: -83.0457538
        },
        politics: {
          dem16_frac: 36.24647440655322,
          rep16_frac: 58.37303140308497
        }
      }
    }
  ];
}

StaticModel.prototype.mkComboData = function() {
  let i = 0;
  let newData = this.data.map(cityData => {
    key = Object.keys(cityData)[0];
    value = cityData[key];
    // imgSrc = this.cityImages[i++][key];
    // value["img"] = imgSrc;
    return cityData;
  });
  console.log(JSON.stringify(newData));
};

StaticModel.prototype.mkCityLatLng = function() {
  let newData = this.data.map(cityData => {
    key = Object.keys(cityData)[0];
    value = cityData[key];
    // console.log("Key = ", key);
    let location = undefined;
    // location = this.ajaxGetLocationCoordinate(key);
    value["location"] = location;
    return cityData;
  });
  console.log(JSON.stringify(newData));
};

// Requires jQuery but typically just a 1-shot predeployment activity.
// Code courtesy: https://tinyurl.com/yymbb95e with modifications.
//
// StaticModel.prototype.ajaxGetLocationCoordinate = function(address) {
//   var position = {};
//   $.ajax({
//     url: "https://maps.google.com/maps/api/geocode/json",
//     type: "GET",
//     data: {
//       address: address,
//       sensor: false,
//       region: "US", // regions string is from:
//       // http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
//       key: "Your_API_Key_Here"
//     },
//     async: false,
//     success: function(result) {
//       // console.log(result);
//       try {
//         position.lat = result.results[0].geometry.location.lat;
//         position.lng = result.results[0].geometry.location.lng;
//       } catch (err) {
//         position = null;
//       }
//     }
//   });
//   return position;
// };
