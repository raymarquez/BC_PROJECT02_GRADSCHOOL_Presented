var trace1 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [31267,42827,28281],
  name: 'AUD',
  type: 'bar'
};

var trace2 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [9555,12106,28485],
  name: 'CAD',
  type: 'bar'
};

var trace3 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [7586,8854,14479],
  name: 'EUR',
  type: 'bar'
};

var trace4 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [15774,15702,17482],
  name: 'GBP',
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
  title: "Average Tuition Cost per Program by Currency Type",
  xaxis: { title: "Graduate Degrees"},
  yaxis: { title: "Average Tuition Cost"}};

Plotly.newPlot('plot', data, layout);