var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 2
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.run-bike-hike",
  accessToken: API_KEY
}).addTo(myMap);

// Country data
var countries = [
  {
    name: "United States",
    location: [37.0902, -95.7129],
    universities:155,
	program : 'Master of Business Administration'
  },
  
  {
    name: "United Kingdom",
    location: [55.3781, -3.4360],
    universities:68,
	program : 'Master of Business Administration'
  },
  
  {
    name: "Canada",
    location: [56.1304, -106.3468],
    universities:16,
	program : 'Master of Business Administration'
  },
{
    name: "Australia",
    location: [-25.2744, 133.7751],
    universities:28,
	program : 'Master of Business Administration'
  },
  {
    name: "Cyprus",
    location: [35.1264, 33.4299],
    universities:9,
	program : 'Master of Business Administration'
  },
  
  
  {
    name: "Turkey",
    location: [38.9637, 35.2433	],
    universities:8,
	program: 'Master of Business Administration'
  },
  {
    name: "Ireland",
    location: [53.1424, 7.6921],
    universities:8,
	program: 'Master of Business Administration'
  }
];


// Loop through the cities array and create one marker for each city object


  // Conditionals for countries points
 for (var i = 0; i < countries.length; i++) {
  var country = countries[i];
  L.marker(country.location)
 .bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>universities: " + countries[i].universities + "</h3> <hr> <h3>program: " +countries[i].program+"</h3>").addTo(myMap);
}
