d3.csv("data/biomass/lai1km_global_yearly_wgt_avg_v4_CORR.csv", function(err, rows){
function unpack(rows, key) {
  return rows.map(function(row) {
   return row[key];
 });
}

var trace1 = {
type: "scatter",
mode: "lines",
name: 'AAPL High',
x: unpack(rows, 'year'),
y: unpack(rows, 'LAI_corr3_round'),
line: {color: '#17BECF'}
}

//var data = [trace1,trace2];
var data = [trace1];

var layout = {
    title: {
      text: 'LAI time series for Q3',
      subtitle: {
        text: 'LAI global average values with yearly frequency'
      }
    },
    xaxis: {
        type: '-',            // Required for date-based axis
        dtick: '1'             // Gridline every 1 month
    }
};

Plotly.newPlot("line-chart-bottom-container", data, layout);
})
