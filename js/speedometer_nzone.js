Highcharts.chart('speedometer_nzone', {
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
        text: 'LAI global average',
        align: 'center',
        style: {
            color: '#a0b128',
            fontSize: '1.5rem'
        }
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
                fontSize: '1rem',
                color: '#a0b128'
            }
        },
        plotBands: [{
            from: 0,
            to: 45.9,
            color: '#DF5353', //red
            thickness: 20
        }, {
            from: 45.9,
            to: 51.2,
            color: '#DDDF0D', // yellow
            thickness: 20
        }, {
            from: 51.2,
            to: 100,
            color: '#55BF3B', // green
            thickness: 20
        }]
    },

    series: [{
        name: 'Active vegetation',
        data: [43.9],
        tooltip: {
            valueSuffix: ' % of the northern-zone surface'
        },

        dataLabels: {
            // format: 'Active vegetation covers {y} % of northern-zone surface',

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
            ) || '#a0b128',
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
