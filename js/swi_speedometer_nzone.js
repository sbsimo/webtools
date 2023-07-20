Highcharts.chart('swi_speedometer_nzone', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '50%'
    },

    title: {
        text: 'Northern zone'
    },

    pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: null,
        center: ['50%', '75%'],
        size: '100%'
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,
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
            from: 0,
            to: 30.8,
            color: '#DF5353', //red
            thickness: 20
        }, {
            from: 30.8,
            to: 32.9,
            color: '#DDDF0D', // yellow
            thickness: 20
        }, {
            from: 32.9,
            to: 100,
            color: '#55BF3B', // green
            thickness: 20
        }]
    },

    series: [{
        name: 'Soil water content',
        data: [32.3],
        tooltip: {
            valueSuffix: 'normal over % of the global land surface'
        },
        dataLabels: {
            format: 'normal content over {y} % of global land surface',
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
