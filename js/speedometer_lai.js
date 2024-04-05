Highcharts.chart('speedometer_lai', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '50%'
    },

    title: {
        text: 'Leaf density in plant canopies'
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
        min: 1.402,
        max: 1.58,
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
            from: 1.402, // avg - 3.5std
            to: 1.414, // avg - 3std
            color: '#fde725', //viridis scale 7 categories -> https://waldyrious.net/viridis-palette-generator/
            thickness: 20
        }, {
            from: 1.414, // avg - 3std
            to: 1.439, // avg - 2std
            color: '#90d743',
            thickness: 20
        }, {
            from: 1.439, // avg - 2std
            to: 1.465, // avg - 1std
            color: '#35b779',
            thickness: 20
        }, {
            from: 1.465, // avg - 1std
            to: 1.515, // avg + 1std
            color: '#21918c',
            thickness: 20
        }, {
            from: 1.515, // avg + 1std
            to: 1.54, // avg + 2std
            color: '#31688e',
            thickness: 20
        }, {
            from: 1.54, // avg + 2std
            to: 1.565, // avg + 3std
            color: '#443983',
            thickness: 20
        }, {
            from: 1.565, // avg + 3std
            to: 1.578, // avg + 3.5std
            color: '#440154',
            thickness: 20
        }]
    },

    series: [{
        name: 'Global average value',
        data: [1.48],
        tooltip: {
            valueSuffix: ' '
        },
        dataLabels: {
            format: 'global average is {y}',
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
