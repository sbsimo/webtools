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
        text: 'Tropical zone - TODO'
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
        //min: 0.560,
        min: 0.549,
        max: 0.604,
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
            //from: 0.560, // avg - 3.5std
            from: 0.549, // avg - 3.5std
            to: 0.563, // avg - 3std
            color: '#fde725', //viridis scale 7 categories -> https://waldyrious.net/viridis-palette-generator/
            thickness: 20
        }, {
            from: 0.563, // avg - 3std
            to: 0.569, // avg - 2std
            color: '#90d743',
            thickness: 20
        }, {
            from: 0.569, // avg - 2std
            to: 0.575, // avg - 1std
            color: '#35b779',
            thickness: 20
        }, {
            from: 0.575, // avg - 1std
            to: 0.588, // avg + 1std
            color: '#21918c',
            thickness: 20
        }, {
            from: 0.588, // avg + 1std
            to: 0.595, // avg + 2std
            color: '#31688e',
            thickness: 20
        }, {
            from: 0.595, // avg + 2std
            to: 0.601, // avg + 3std
            color: '#443983',
            thickness: 20
        }, {
            from: 0.601, // avg + 3std
            to: 0.604, // avg + 3.5std
            color: '#440154',
            thickness: 20
        }]
    },

    series: [{
        name: 'Average value',
        data: [0.555],
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
