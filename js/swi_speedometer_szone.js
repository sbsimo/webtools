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
        min: 40,
        max: 90,
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
            to: 80.8,
            color: '#90d743',
            thickness: 20
        }, {
            from: 80.8,
            to: 86.0,
            color: '#35b779',
            thickness: 20
        }, {
            from: 86.0,
            to: 100,
            color: '#21918c', // mid-value viridis
            thickness: 20
        }]
    },

    series: [{
        name: 'Average value',
        data: [80.7],
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
