Highcharts.chart('ndvi_speedometer_nzone', {

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
        text: 'Northern zone NDVI'
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
        min: 0.385,
        max: 0.520,
        tickInterval: 0.034, // (max-min)/4
        tickPosition: 'inside',
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
        tickLength: 10,
        tickWidth: 2,
        minorTickInterval: null,
        labels: {
            distance: 20,
            style: {
                fontSize: '10px'
            }
        },
        plotBands: [{
            from: 0.385, // avg - 3.5std
            to: 0.395, // avg - 3std
            color: 'rgb(140,81,10)', //IPCC colors
            thickness: 20
        }, {
            from: 0.395, // avg - 3std
            to: 0.414, // avg - 2std
            color: 'rgb(216,179,101)',
            thickness: 20
        }, {
            from: 0.414, // avg - 2std
            to: 0.433, // avg - 1std
            color: 'rgb(246,232,195)',
            thickness: 20
        }, {
            from: 0.433, // avg - 1std
            to: 0.472, // avg + 1std
            color: 'rgb(245,245,245)',
            thickness: 20
        }, {
            from: 0.472, // avg + 1std
            to: 0.491, // avg + 2std
            color: 'rgb(199,234,229)',
            thickness: 20
        }, {
            from: 0.491, // avg + 2std
            to: 0.510, // avg + 3std
            color: 'rgb(90,180,172)',
            thickness: 20
        }, {
            from: 0.510, // avg + 3std
            to: 0.520, // avg + 3.5std
            color: 'rgb(1,102,94    )',
            thickness: 20
        }]
    },

    series: [{
        name: 'Current value',
        data: [0.472],
        tooltip: {
            valueSuffix: ' '
        },
        dataLabels: {

            useHTML: true,
            formatter: function () {
                // Use this function to return the HTML content for the label
                return '<div class="gauge_dlabel"><span>Current value:</span><span class="val">' + this.y + '</span></div>'
            },

            //format: 'average is <h2>{y}</h2>',

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
