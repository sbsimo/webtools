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

//var data = [trace1,trace2];
var data = [trace1];

var layout = {
    title: {
      text: 'NDVI time series',
      subtitle: {
        text: 'global average values with 10-day steps'
      }
    },
    xaxis: {
        type: 'date',            // Required for date-based axis
        dtick: 'M6'             // Gridline every 1 month
    }
};

Plotly.newPlot("line-chart-container", data, layout);
})
