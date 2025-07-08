var data = [
  {
    x: ['Forest', 'Cropland', 'Herbaceous vegetation', 'Herbaceous wetland', 'Moss and lichen', 'Shrubs'],
    y: [1.8, 1.4, 2.2, 2.5, 1.8, 2.1],
    type: 'bar',
    marker: {
      color: ['rgb(199,234,229)', 'rgb(199,234,229)', 'rgb(90,180,172)', 'rgb(90,180,172)',
                'rgb(199,234,229)', 'rgb(90,180,172)']
    }
  }
];

var layout = {
    title: {
      text: 'NDVI anomalies per vegetation cover class'
    }
}

Plotly.newPlot('ndvi_bar_chart', data, layout);
