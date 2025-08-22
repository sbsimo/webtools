avg = 1.402;
std = 0.077;
cur_value = 1.43;
zscore = Math.round(10 * (cur_value - avg) / std) / 10;

Highcharts.chart('lai_speedometer_nzone', {

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
        text: 'Northern zone'
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
        min: -3.5,
        max: +3.5,
        tickInterval: 1,
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
            from: -3.5,
            to: -3,
            color: 'rgb(140,81,10)', //IPCC colors
            thickness: 20
        }, {
            from: -3,
            to: -2,
            color: 'rgb(216,179,101)',
            thickness: 20
        }, {
            from: -2,
            to: -1,
            color: 'rgb(246,232,195)',
            thickness: 20
        }, {
            from: -1,
            to: +1,
            color: 'rgb(245,245,245)',
            thickness: 20
        }, {
            from: +1,
            to: +2,
            color: 'rgb(199,234,229)',
            thickness: 20
        }, {
            from: +2,
            to: +3,
            color: 'rgb(90,180,172)',
            thickness: 20
        }, {
            from: +3,
            to: +3.5,
            color: 'rgb(1,102,94    )',
            thickness: 20
        }]
    },

    series: [{
        name: 'Standardised anomaly',
        data: [zscore],
        tooltip: {
            valueSuffix: ' '
        },
        dataLabels: {

            useHTML: true,
            formatter: function () {
                // Use this function to return the HTML content for the label
                return '<div class="gauge_dlabel"><span>Standardised anomaly:</span><span class="val">' + this.y + '</span></div>'
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
