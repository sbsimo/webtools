d3.csv("data/greenness/ndvi1km_wgt_avg_34246_CORR.csv", function(err, rows){
function unpack(rows, key) {
  return rows.map(function(row) {
   return row[key];
 });
}

var trace1 = {
type: "scatter",
mode: "lines",
name: 'AAPL High',
x: unpack(rows, 'datetime'),
y: unpack(rows, 'NDVI1km_avg_CORR_qflag'),
line: {color: '#17BECF'}
}
/*
var trace2 = {
type: "scatter",
mode: "lines",
name: 'AAPL Low',
x: unpack(rows, 'Date'),
y: unpack(rows, 'AAPL.Low'),
line: {color: '#7F7F7F'}
}
*/
//var data = [trace1,trace2];
var data = [trace1];

var layout = {
title: {
  text: 'Date'
},
};

Plotly.newPlot("line-chart-container", data, layout);
})
