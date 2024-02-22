Highcharts.chart('swi_speedometer_szone', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '50%'
    },

    title: {
        text: 'Southern zone'
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
        min: 16.0,
        max: 37.5,
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
            from: 16.0, // avg - 3.5std
            to: 17.5, // avg - 3std
            color: '#fde725', //viridis scale 7 categories -> https://waldyrious.net/viridis-palette-generator/
            thickness: 20
        }, {
            from: 17.5, // avg - 3std
            to: 20.6, // avg - 2std
            color: '#90d743',
            thickness: 20
        }, {
            from: 20.6, // avg - 2std
            to: 23.7, // avg - 1std
            color: '#35b779',
            thickness: 20
        }, {
            from: 23.7, // avg - 1std
            to: 29.8, // avg + 1std
            color: '#21918c',
            thickness: 20
        }, {
            from: 29.8, // avg + 1std
            to: 32.9, // avg + 2std
            color: '#31688e',
            thickness: 20
        }, {
            from: 32.9, // avg + 2std
            to: 35.9, // avg + 3std
            color: '#443983',
            thickness: 20
        }, {
            from: 35.9, // avg + 3std
            to: 37.5, // avg + 3.5std
            color: '#440154',
            thickness: 20
        }]
    },

    series: [{
        name: 'Average value',
        data: [30.0],
        tooltip: {
            valueSuffix: ' %'
        },
        dataLabels: {
            format: 'average is {y} %',
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
