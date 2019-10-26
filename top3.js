var trace1 = {
  values: [435,387,360],
  labels: ["Computer Science","Master of Business Administration","Economics"],
  domain: {column: 0},
  title: "Top 3 Degrees",
  type: "pie"
};

var trace2 = {
  values: [771,1203,1198],
  labels: ["All Degrees - Computer Science","All Degrees - Master of Business Administration","All Degrees - Economics"],
  domain: {column: 1},
  title: "All Degrees Related to Top 3 Degrees",
  type: "pie"
};

var data = [trace1,trace2];

var layout = {
  height: 550,
  width: 1300,
  grid: {rows: 1, columns: 2}
};

Plotly.newPlot("plot", data, layout);