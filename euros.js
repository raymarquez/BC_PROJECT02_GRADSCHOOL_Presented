var trace1 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [21502,29452,19449],
  name: 'AUD to EUR',
  type: 'bar'
};

var trace2 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [5011,6349,14938],
  name: 'CAD to EUR',
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
  y: [23795,23681,26366],
  name: 'GBP to EUR',
  type: 'bar'
};

var trace5 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [12345,12171,19034],
  name: 'USD to EUR',
  type: 'bar'
};

var data = [trace1, trace2, trace3, trace4, trace5];

var layout = {barmode: 'stack',
  title: "Average Tuition Cost per Program by Currency Type - Converted to EUR",
  xaxis: { title: "Graduate Degrees"},
  yaxis: { title: "Average Tuition Cost"}};

Plotly.newPlot('plot', data, layout);