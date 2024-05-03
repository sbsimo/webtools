Highcharts.chart('speedometer_swi', {

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
        text: 'Soil Moisture in plant root zone',

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
        min: 26.22,
        max: 37.04,
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
            from: 26.22, // avg - 3.5std
            to: 26.99, // avg - 3std
            color: '#fde725', //viridis scale 7 categories -> https://waldyrious.net/viridis-palette-generator/
            thickness: 20
        }, {
            from: 26.99, // avg - 3std
            to: 28.54, // avg - 2std
            color: '#90d743',
            thickness: 20
        }, {
            from: 28.54, // avg - 2std
            to: 30.08, // avg - 1std
            color: '#35b779',
            thickness: 20
        }, {
            from: 30.08, // avg - 1std
            to: 33.18, // avg + 1std
            color: '#21918c',
            thickness: 20
        }, {
            from: 33.18, // avg + 1std
            to: 34.72, // avg + 2std
            color: '#31688e',
            thickness: 20
        }, {
            from: 34.72, // avg + 2std
            to: 36.27, // avg + 3std
            color: '#443983',
            thickness: 20
        }, {
            from: 36.27, // avg + 3std
            to: 37.04, // avg + 3.5std
            color: '#440154',
            thickness: 20
        }]
    },

    series: [{
        name: 'Global average value',
        data: [37.2],
        tooltip: {
            valueSuffix: ' %'
        },
        dataLabels: {
            // format: 'global average is {y} %',
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
