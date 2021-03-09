var mymap = L.map('mapid').setView([38, -98],4);

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#2E2EFE",
    color: "#FFFFFF",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

//function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
 //   if (feature.properties && feature.properties.Name) {
 //       layer.bindPopup(feature.properties.popupContent);
//    }
//}

var stadiums = [
  {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Chase Field",
        "Team": "Arizona Diamondbacks",
        "popupContent": "Chase Field: Arizona Diamondbacks"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.066664,
          33.445526
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Truist Park",
        "Team": "Atlanta Braves",
        "popupContent": "Truist Park: Atlanta Braves"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.467684,
          33.8907
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Oriole Park at Camden Yards",
        "Team": "Baltimore Orioles",
        "popupContent": "Camden Yards: Baltimore Orioles"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.621512,
          39.284052
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Fenway Park",
        "Team": "Boston Red Sox",
        "popupContent": "Fenway Park: Boston Redsox"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.097218,
          42.346676
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Wrigley Field",
        "Team": "Chicago Cubs",
        "popupContent": "Wrigley Field: Chicago Cubs"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.655333,
          41.948438
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Guaranteed Rate Field",
        "Team": "Chicago White Sox",
        "popupContent": "Guarateed Rate Field: Chicago White Sox"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.633752,
          41.829902
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Great American Ball Park",
        "Team": "Cincinnati Reds",
        "popupContent": "Great American Ball Park: Cincinnati Reds"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.508151,
          39.097931
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Progressive Field",
        "Team": "Cleveland Indians",
        "popupContent": "Progressive Field: Cleveland Indians"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.685229,
          41.496211
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Coors Field",
        "Team": "Colorado Rockies",
        "popupContent": "Coors Field: Colorado Rockies"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.994178,
          39.755882
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Comerica Park",
        "Team": "Detroit Tigers",
        "popupContent": "Comerica Park: Detroit Tigers"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.04852,
          42.338998
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Marlins Park",
        "Team": "Miami Marlins",
        "popupContent": "Marlins Park: Miami Marlins"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.219597,
          25.778318
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Minute Maid Park",
        "Team": "Houston Astros",
        "popupContent": "Minute Maid Park: Houston Astros"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.354538,
          29.757697
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Kauffman Stadium",
        "Team": "Kansas City Royals",
        "popupContent": "Kauffman Stadium: Kansas City Royals"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.480314,
          39.051672
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Dodger Stadium",
        "Team": "Los Angeles Dodgers",
        "popupContent": "Dodger Stadium: Los Angeles Dodgers"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.239958,
          34.073851
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "American Family Field",
        "Team": "Milwaukee Brewers",
        "popupContent": "American Family Field: Milwaukee Brewers"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.97115,
          43.027978
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Target Field",
        "Team": "Minnesota Twins",
        "popupContent": "Target Field: Minnesota Twins"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.27776,
          44.981712
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Nationals Park",
        "Team": "Washington Nationals",
        "popupContent": "Nationals Park: Washington Nationals"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.007433,
          38.87301
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Citi Field",
        "Team": "New York Mets",
        "popupContent": "Citi Field: New York Mets"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.845821,
          40.757088
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Yankee Stadium",
        "Team": "New York Yankees",
        "popupContent": "Yankee Stadium: New York Yankees"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.926175,
          40.829643
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "OAC Coliseum",
        "Team": "Oakland Athletics",
        "popupContent": "OAC Coliseum: Oakland Athletics"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.19821,
          37.752483
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Citizens Bank Park",
        "Team": "Philidelphia Phillies",
        "popupContent": "Citizens Bank Park: Philidelphia Phillies"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.166495,
          39.906057
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "PNC Park",
        "Team": "Pittsburgh Pirates",
        "popupContent": "PNC Park: Pittsburgh Pirates"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.005666,
          40.446855
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "PETCO Park",
        "Team": "San Diego Padres",
        "popupContent": "PETCO Park: San Diego Padres"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.156904,
          32.707656
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Oracle Park",
        "Team": "San Francisco Giants",
        "popupContent": "Oracle Park: San Francisco Giants"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.38927,
          37.778595
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Angels Stadium of Anaheim",
        "Team": "Los Angeles Angels",
        "popupContent": "Angels Stadium: Los Angeles Angels"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.882732,
          33.800308
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Safeco Field",
        "Team": "Seattle Mariners",
        "popupContent": "Safeco Field: Seattle Mariners"
        
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.332327,
          47.591391
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Busch Stadium",
        "Team": "St. Louis Cardinals",
        "popupContent": "Busch Stadium: St. Louis Cardinals"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.192821,
          38.622619
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Tropicana Field",
        "Team": "Tampa Bay Rays",
        "popupContent": "Tropicana Field: Tampa Bay Rays"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.653392,
          27.768225
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Globe Life Park in Arlington",
        "Team": "Texas Rangers",
        "popupContent": "Globe Life Park: Texas Rangers"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.082504,
          32.75128
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#129b1b",
        "marker-size": "medium",
        "marker-symbol": "baseball",
        "Name": "Rogers Centre",
        "Team": "Toronto Blue Jays",
        "popupContent": "Rogers Centre: Toronto Blue Jays"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.389353,
          43.641438
        ]
      }
    }
];

function onEachFeature2(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent2) {
        layer.bindPopup(feature.properties.popupContent2);
    }
}


var transactions =[ 
    {
      "type": "Feature",
      "properties": {
        "stroke": "#74ff29",
        "stroke-width": 9,
        "stroke-opacity": 1,
        "Name": "Nolan Arenado",
        "Transaction": "Acquisition",
        "Year": 2021,
        "From": "Rockies",
        "To": "Cardinals",
        "popupContent2": "Nolan Arenado"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -104.994178,
            39.755882
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#74ff29",
        "stroke-width": 9,
        "stroke-opacity": 1,
        "Name": "Paul Goldschmidt",
        "Transaction": "Acquisition",
        "Year": 2020,
        "From": "Diamondbacks",
        "To": "Cardinals",
        "popupContent2": "Paul Goldschmidt"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -112.066664,
            33.445526
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#ff0004",
        "stroke-width": 3,
        "stroke-opacity": 1,
        "Name": "Kolten Wong",
        "Transaction": "Trade Away/Free Agency",
        "Year": 2021,
        "From": "Cardinals",
        "To": "Brewers",
        "popupContent2": "Kolten Wong"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -87.9711,
            43.028
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#ff0004",
        "stroke-width": 3,
        "stroke-opacity": 1,
        "Name": "Dexter Fowler",
        "Transaction": "Trade Away/Free Agency",
        "Year": 2021,
        "From": "Cardinals",
        "To": "Angels",
        "popupContent2": "Dexter Fowler"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -117.8827,
            33.8003
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#74ff29",
        "stroke-width": 9,
        "stroke-opacity": 1,
        "Name": "Dexter Fowler",
        "Transaction": "Acquisition",
        "Year": 2017,
        "From": "Cubs",
        "To": "Cardinals",
        "popupContent2": "Dexter Fowler"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -87.655333,
            41.948438
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#ff0004",
        "stroke-width": 3,
        "stroke-opacity": 1,
        "Name": "Jason Heyward",
        "Transaction": "Trade Away/Free Agency",
        "Year": 2016,
        "From": "Cardinals",
        "To": "Cubs",
        "popupContent2": "Jason Heyward"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -87.655333,
            41.948438
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#74ff29",
        "stroke-width": 9,
        "stroke-opacity": 1,
        "Name": "Jason Heyward",
        "Transaction": "Acquisition",
        "Year": 2015,
        "From": "Braves",
        "To": "Cardinals",
        "popupContent2": "Jason Heyward"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -84.4677,
            33.8907
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#ff0004",
        "stroke-width": 3,
        "stroke-opacity": 1,
        "Name": "Austin Gomber",
        "Transaction": "Trade Away/Free Agency",
        "Year": 2021,
        "From": "Cardinals",
        "To": "Rockies",
        "popupContent2": "Austin Gomber"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -104.9942,
            39.7559
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#ff0004",
        "stroke-width": 3,
        "stroke-opacity": 1,
        "Name": "Jedd Gyorko",
        "Transaction": "Trade Away/Free Agency",
        "Year": 2019,
        "From": "Cardinals",
        "To": "Dodgers",
        "popupContent2": "Jedd Gyorko"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -118.24,
            34.0739
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#74ff29",
        "stroke-width": 9,
        "stroke-opacity": 1,
        "Name": "Matthew Liberatore",
        "Transaction": "Acquisition",
        "Year": 2020,
        "From": "Rays",
        "To": "Cardinals",
        "popupContent2": "Matthew Liberatore"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -82.6534,
            27.7682
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#74ff29",
        "stroke-width": 9,
        "stroke-opacity": 1,
        "Name": "Jedd Gyorko",
        "Transaction": "Acquisition",
        "Year": 2016,
        "From": "Padres",
        "To": "Cardinals",
        "popupContent2": "Jedd Gyorko"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -117.1569,
            32.7077
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#ff0004",
        "stroke-width": 3,
        "stroke-opacity": 1,
        "Name": "Tommy Pham",
        "Transaction": "Trade Away/Free Agency",
        "Year": 2018,
        "From": "Cardinals",
        "To": "Rays",
        "popupContent2": "Tommy Pham"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -82.6534,
            27.7682
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#ff0004",
        "stroke-width": 3,
        "stroke-opacity": 1,
        "Name": "Randal Grichuk",
        "Transaction": "Trade Away/Free Agency",
        "Year": 2018,
        "From": "Cardinals",
        "To": "Blue Jays",
        "popupContent2": "Randal Grichuk"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -79.3894,
            43.6414
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#74ff29",
        "stroke-width": 9,
        "stroke-opacity": 1,
        "Name": "Marcell Ozuna",
        "Transaction": "Acquisition",
        "Year": 2018,
        "From": "Marlins",
        "To": "Cardinals",
        "popupContent2": "Marcell Ozuna"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -80.2196,
            25.7783
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#ff0004",
        "stroke-width": 3,
        "stroke-opacity": 1,
        "Name": "Marcell Ozuna",
        "Transaction": "Trade Away/Free Agency",
        "Year": 2020,
        "From": "Cardinals",
        "To": "Braves",
        "popupContent2": "Marcell Ozuna"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -84.4677,
            33.8907
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#ff0004",
        "stroke-width": 3,
        "stroke-opacity": 1,
        "Name": "Matt Adams",
        "Transaction": "Trade Away/Free Agency",
        "Year": 2019,
        "From": "Cardinals",
        "To": "Nationals",
        "popupContent2": "Matt Adams"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -77.0074,
            38.873
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#ff0004",
        "stroke-width": 3,
        "stroke-opacity": 1,
        "Name": "Stephen Piscotty",
        "Transaction": "Trade Away/Free Agency",
        "Year": 2018,
        "From": "Cardinals",
        "To": "Athletics",
        "popupContent2": "Stephen Piscotty"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.1982,
            37.7525
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#ff0004",
        "stroke-width": 3,
        "stroke-opacity": 1,
        "Name": "Michael Wacha",
        "Transaction": "Trade Away/Free Agency",
        "Year": 2020,
        "From": "Cardinals",
        "To": "Mets",
        "popupContent2": "Michael Wacha"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -73.8458,
            40.7571
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#ff0004",
        "stroke-width": 3,
        "stroke-opacity": 1,
        "Name": "Lance Lynn",
        "Transaction": "Trade Away/Free Agency",
        "Year": 2018,
        "From": "Cardinals",
        "To": "Twins",
        "popupContent2": "Lance Lynn"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -93.2778,
            	44.9817
          ],
          [
            -90.192821,
            38.622619
          ]
        ]
      }
    }];

L.geoJSON(transactions, {
  style: function(feature) {
    switch (feature.properties.Transaction) {
      case 'Acquisition': return {color: "#74ff29", weight: "8"};
      case 'Trade Away/Free Agency': return {color: "#ff0004", weight: "3"};
    }
  }
}).bindPopup(function (layer) {
  return layer.feature.properties.Name;
}).addTo(mymap);

L.geoJSON(stadiums, {
   pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, geojsonMarkerOptions)}
}).bindPopup(function (layer) {
  return layer.feature.properties.popupContent;
}).addTo(mymap);
          


//L.geoJSON(stadiums, {
//    onEachFeature: onEachFeature
//}).addTo(mymap);

//L.geoJSON(transactions, {
 //   onEachFeature2: onEachFeature2
//}).addTo(mymap);

var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(mymap);

