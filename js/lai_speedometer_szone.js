Highcharts.chart('lai_speedometer_szone', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '50%'
    },
    plotOptions: {
        series: {
            animation: {
                duration: 1550
            }
        }
    },
    title: {
        text: 'Southern zone'
    },

    pane: {
        startAngle: -70,
        endAngle: 70,
        background: null,
        center: ['50%', '75%'],
        size: '100%'
    },

    // the value axis
    yAxis: {
        min: 0.964,
        max: 1.326,
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
            from: 0.964, // avg - 3.5std
            to: 0.990, // avg - 3std
            color: '#fde725', //viridis scale 7 categories -> https://waldyrious.net/viridis-palette-generator/
            thickness: 20
        }, {
            from: 0.990, // avg - 3std
            to: 1.042, // avg - 2std
            color: '#90d743',
            thickness: 20
        }, {
            from: 1.042, // avg - 2std
            to: 1.094, // avg - 1std
            color: '#35b779',
            thickness: 20
        }, {
            from: 1.094, // avg - 1std
            to: 1.197, // avg + 1std
            color: '#21918c',
            thickness: 20
        }, {
            from: 1.197, // avg + 1std
            to: 1.249, // avg + 2std
            color: '#31688e',
            thickness: 20
        }, {
            from: 1.249, // avg + 2std
            to: 1.300, // avg + 3std
            color: '#443983',
            thickness: 20
        }, {
            from: 1.300, // avg + 3std
            to: 1.326, // avg + 3.5std
            color: '#440154',
            thickness: 20
        }]
    },

    series: [{
        name: 'Average value',
        data: [1.090],
        tooltip: {
            valueSuffix: ' '
        },
        dataLabels: {

            borderWidth: 0,
            color: (
                Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || '#a0b128',
            style: {
                fontSize: '1rem'
            },
            useHTML: true,
            formatter: function () {
                // Use this function to return the HTML content for the label
                return '<div class="gauge_dlabel"><span>Average is</span><span class="val">' + this.y + '</span></div>'
            },
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
