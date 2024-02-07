Highcharts.chart('speedometer_swi', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '50%'
    },

    title: {
        text: 'Soil Water Index'
    },

    pane: {
        startAngle: -60,
        endAngle: 60,
        background: null,
        center: ['50%', '75%'],
        size: '100%'
    },

    // the value axis
    yAxis: {
        min: 37.9,
        max: 46.3,
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
            from: 37.9, // avg - 3std
            to: 39.3, // avg - 2std
            color: '#DF5353', //red
            thickness: 20
        }, {
            from: 39.3, // avg - 2std
            to: 40.7, // avg - 1std
            color: '#DDDF0D', // yellow
            thickness: 20
        }, {
            from: 40.7, // avg - 1std
            to: 43.5, // avg + 1std
            color: '#55BF3B', // green
            thickness: 20
        }, {
            from: 43.5, // avg + 1std
            to: 44.9, // avg + 2std
            color: '#DDDF0D', // yellow
            thickness: 20
        }, {
            from: 44.9, // avg + 2std
            to: 46.3, // avg + 3std
            color: '#DF5353', // red
            thickness: 20
        }]
    },

    series: [{
        name: 'Soil Water Index value',
        data: [46.1],
        tooltip: {
            valueSuffix: ' %'
        },
        dataLabels: {
            format: 'global average is {y} %',
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
