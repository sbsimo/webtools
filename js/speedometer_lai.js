
function alignLabel() {
    var chart = this;

    var newX = chart.plotWidth / 2 + chart.plotLeft,
        newY = chart.plotHeight / 2 + chart.plotTop;
    console.log(newX, newY, chart.plotLeft, chart.plotTop)
    //400 216 10 47

    console.info(chart.plotHeight, chart.plotTop)
    //338 47 ==>c 338/2 = 169
    console.warn(chart.plotBox)
    /*
    {
"x": 10,
"y": 47,
"width": 780,
"height": 338
}
    */
    //.highcharts-axis-labels 328px
    //40  ==> x=305
    //800
    //330 /2 = 165


    var addText = function (text, posX, posY) {
        return chart.renderer.text(text, newX + posX, newY + posY)
            .attr({
                align: 'center',
                zIndex: 100,
                rotation: 0
            })
            .css({
                color: '#4572A7',
                fontSize: '9pt',
            })
            .add();
    }

    addText('Standard behaviour', 0, -90);
    addText('Unusually low', -120, 40);
    addText('Unusually high', 120, 40);

    /* if (addText) {
        addText.destroy();
}
*/
}
Highcharts.chart('speedometer_lai', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '50%',
         events: {
            load: alignLabel,
            redraw: alignLabel
        }
    },
    plotOptions: {
        series: {
            animation: {
                duration: 1550
            }
        }
    },
    title: {
        text: 'Leaf density in plant canopies'
    },

    pane: {
        startAngle: -70,
        endAngle: 70.0,
        background: null,
        center: ['50%', '75%'],
        size: '100%'
    },

    // the value axis
    yAxis: {
        min: 1.405,
        max: 1.669,
        tickInterval: 0.07,
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
            from: 1.405, // avg - 3.5std
            to: 1.424, // avg - 3std
            color: '#fde725', //viridis scale 7 categories -> https://waldyrious.net/viridis-palette-generator/
            thickness: 20
        }, {
            from: 1.424, // avg - 3std
            to: 1.462, // avg - 2std
            color: '#90d743',
            thickness: 20
        }, {
            from: 1.462, // avg - 2std
            to: 1.499, // avg - 1std
            color: '#35b779',
            thickness: 20
        }, {
            from: 1.499, // avg - 1std
            to: 1.575, // avg + 1std
            color: '#21918c',
            thickness: 20
        }, {
            from: 1.575, // avg + 1std
            to: 1.613, // avg + 2std
            color: '#31688e',
            thickness: 20
        }, {
            from: 1.613, // avg + 2std
            to: 1.650, // avg + 3std
            color: '#443983',
            thickness: 20
        }, {
            from: 1.650, // avg + 3std
            to: 1.669, // avg + 3.5std
            color: '#440154',
            thickness: 20
        }]
    },

    series: [{
        name: 'Current value',
        data: [1.56],
        tooltip: {
            valueSuffix: ' '
        },
        dataLabels: {
            //format: 'global average is {y}',
            useHTML: true,
            formatter: function () {
                // Use this function to return the HTML content for the label
                return '<div class="gauge_dlabel"><span>Current value:</span><span class="val">' + this.y + '</span></div>'
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
