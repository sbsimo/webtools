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
        min: 17.8,
        max: 37.1,
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
            from: 17.8, // avg - 3.5std
            to: 19.2, // avg - 3std
            color: '#fde725', //viridis scale 7 categories -> https://waldyrious.net/viridis-palette-generator/
            thickness: 20
        }, {
            from: 19.2, // avg - 3std
            to: 22.0, // avg - 2std
            color: '#90d743',
            thickness: 20
        }, {
            from: 22.0, // avg - 2std
            to: 24.7, // avg - 1std
            color: '#35b779',
            thickness: 20
        }, {
            from: 24.7, // avg - 1std
            to: 30.2, // avg + 1std
            color: '#21918c',
            thickness: 20
        }, {
            from: 30.2, // avg + 1std
            to: 33.0, // avg + 2std
            color: '#31688e',
            thickness: 20
        }, {
            from: 33.0, // avg + 2std
            to: 35.7, // avg + 3std
            color: '#443983',
            thickness: 20
        }, {
            from: 35.7, // avg + 3std
            to: 37.1, // avg + 3.5std
            color: '#440154',
            thickness: 20
        }]
    },

    series: [{
        name: 'Average value',
        data: [27.5],
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
