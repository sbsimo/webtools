Highcharts.chart('lai_speedometer_tropics', {

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
        text: 'Tropical zone'
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
        min: 2.033,
        max: 2.476,
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
            from: 2.033, // avg - 3.5std
            to: 2.065, // avg - 3std
            color: '#fde725', //viridis scale 7 categories -> https://waldyrious.net/viridis-palette-generator/
            thickness: 20
        }, {
            from: 2.065, // avg - 3std
            to: 2.128, // avg - 2std
            color: '#90d743',
            thickness: 20
        }, {
            from: 2.128, // avg - 2std
            to: 2.192, // avg - 1std
            color: '#35b779',
            thickness: 20
        }, {
            from: 2.192, // avg - 1std
            to: 2.318, // avg + 1std
            color: '#21918c',
            thickness: 20
        }, {
            from: 2.318, // avg + 1std
            to: 2.382, // avg + 2std
            color: '#31688e',
            thickness: 20
        }, {
            from: 2.382, // avg + 2std
            to: 2.445, // avg + 3std
            color: '#443983',
            thickness: 20
        }, {
            from: 2.445, // avg + 3std
            to: 2.476, // avg + 3.5std
            color: '#440154',
            thickness: 20
        }]
    },

    series: [{
        name: 'Average value',
        data: [2.285],
        tooltip: {
            valueSuffix: ' '
        },
        dataLabels: {
            useHTML: true,
            formatter: function () {
                // Use this function to return the HTML content for the label
                return '<div class="gauge_dlabel"><span>Average is</span><span class="val">' + this.y + '</span></div>'
            },
            borderWidth: 0,
            color: (
                Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || '#333333',
            style: {
                fontSize: '1rem'
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
