var trace1 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [21502,29452,19449],
  name: 'AUD to USD',
  type: 'bar'
};

var trace2 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [7304,9254,21774],
  name: 'CAD to USD',
  type: 'bar'
};

var trace3 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [8461,9875,16151],
  name: 'EUR to USD',
  type: 'bar'
};

var trace4 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [20461,20368,22677],
  name: 'GBP to USD',
  type: 'bar'
};

var trace5 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [13754,13560,21207],
  name: 'USD',
  type: 'bar'
};

var data = [trace1, trace2, trace3, trace4, trace5];

var layout = {barmode: 'stack',
  title: "Average Tuition Cost per Program by Currency Type - Converted to USD",
  xaxis: { title: "Graduate Degrees"},
  yaxis: { title: "Average Tuition Cost"}};

Plotly.newPlot('plot', data, layout);