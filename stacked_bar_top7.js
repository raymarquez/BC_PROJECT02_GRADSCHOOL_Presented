var trace1 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [248,155,139],
  name: 'United States',
  type: 'bar'
};

var trace2 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [50,68,52],
  name: 'United Kingdom',
  type: 'bar'
};

var trace3 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [29,16,23],
  name: 'Canada',
  type: 'bar'
};

var trace4 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [11,28,10],
  name: 'Australia',
  type: 'bar'
};

var trace5 = {
  x: ['Computer Science','Economics'],
  y: [7,11],
  name: 'Germany',
  type: 'bar'
};

var trace6 = {
  x: ['Computer Science','Economics'],
  y: [7,9],
  name: 'Italy',
  type: 'bar'
};

var trace7 = {
  x: ['Computer Science'],
  y: [7],
  name: 'Sweden',
  type: 'bar'
};

var trace8 = {
  x: ['Master of Business Administration', 'Economics'],
  y: [8,9],
  name: 'Turkey',
  type: 'bar'
};

var trace9 = {
  x: ['Master of Business Administration'],
  y: [9],
  name: 'Cyprus',
  type: 'bar'
};

var trace10 = {
  x: ['Master of Business Administration'],
  y: [8],
  name: 'Ireland',
  type: 'bar'
};
var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10];

var layout = {barmode: 'stack',
  title: "Top 7 Countries by Degree Offered",
  xaxis: { title: "Graduate Degrees"},
  yaxis: { title: "Num of Schools"}};

Plotly.newPlot('plot', data, layout);