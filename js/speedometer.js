Highcharts.chart('speedometer', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '50%'
    },

    title: {
        text: 'Active vegetation'
    },

    pane: {
        startAngle: -70,
        endAngle: 69.9,
        background: null,
        center: ['50%', '75%'],
        size: '100%'
    },

    // the value axis
    yAxis: {
        min: 39.6,
        max: 63.4,
        tickPixelInterval: 72,
        tickPosition: 'inside',
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
        tickLength: 20,
        tickWidth: 2,
        minorTickInterval: null,
        labels: {
            distance: 20,
            style: {
                fontSize: '10px'
            }
        },
        plotBands: [{
            from: 39.6, // avg - 3.5std
            to: 41.3, // avg - 3std
            color: '#fde725', //viridis scale 7 categories -> https://waldyrious.net/viridis-palette-generator/
            thickness: 20
        }, {
            from: 41.3, // avg - 3std
            to: 44.7, // avg - 2std
            color: '#90d743',
            thickness: 20
        }, {
            from: 44.7, // avg - 2std
            to: 48.1, // avg - 1std
            color: '#35b779',
            thickness: 20
        }, {
            from: 48.1, // avg - 1std
            to: 54.9, // avg + 1std
            color: '#21918c',
            thickness: 20
        }, {
            from: 54.9, // avg + 1std
            to: 58.3, // avg + 2std
            color: '#31688e',
            thickness: 20
        }, {
            from: 58.3, // avg + 2std
            to: 61.7, // avg + 3std
            color: '#443983',
            thickness: 20
        }, {
            from: 61.7, // avg + 3std
            to: 63.4, // avg + 3.5std
            color: '#440154',
            thickness: 20
        }]
    },

    series: [{
        name: 'Active vegetation',
        data: [51.2],
        tooltip: {
            valueSuffix: ' % of the global land surface'
        },
        dataLabels: {
            format: 'covers {y} % of global land surface',
            borderWidth: 0,
            color: (
                Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || '#333333',
            style: {
                fontSize: '10px'
            }
        },
        dial: {
            radius: '80%',
            backgroundColor: 'gray',
            baseWidth: 12,
            baseLength: '0%',
            rearLength: '0%'
        },
        pivot: {
            backgroundColor: 'gray',
            radius: 6
        }

    }]

});
