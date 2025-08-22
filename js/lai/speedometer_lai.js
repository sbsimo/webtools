avg = 1.5854;
std = 0.047517;
cur_value = 1.59;

function roundToThirdDecimal(num) {
    if (typeof num !== 'number') {
      throw new TypeError('Input must be a number');
    }
    return Math.round(num * 100) / 100;
}

avg_m3p5std = roundToThirdDecimal(avg - 3.5 * std);
avg_p3p5std = roundToThirdDecimal(avg + 3.5 * std);

function alignLabel() {
    var chart = this;

    var newX = chart.plotWidth / 2 + chart.plotLeft,
        newY = chart.plotHeight / 2 + chart.plotTop;

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
        text: 'Living Green Biomass'
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
        min: avg_m3p5std,
        max: avg_p3p5std,
        tickInterval: roundToThirdDecimal((avg_p3p5std - avg_m3p5std) / 4),
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
            from: avg_m3p5std, // avg - 3.5std
            to: avg - 3 * std, // avg - 3std
            color: 'rgb(140,81,10)', // IPCC colors
            thickness: 20
        }, {
            from: avg - 3 * std, // avg - 3std
            to: avg - 2 * std, // avg - 2std
            color: 'rgb(216,179,101)',
            thickness: 20
        }, {
            from: avg - 2 * std, // avg - 2std
            to: avg - 1 * std, // avg - 1std
            color: 'rgb(246,232,195)',
            thickness: 20
        }, {
            from: avg - 1 * std, // avg - 1std
            to: avg + 1 * std, // avg + 1std
            color: 'rgb(245,245,245)',
            thickness: 20
        }, {
            from: avg + 1 * std, // avg + 1std
            to: avg + 2 * std, // avg + 2std
            color: 'rgb(199,234,229)',
            thickness: 20
        }, {
            from: avg + 2 * std, // avg + 2std
            to: avg + 3 * std, // avg + 3std
            color: 'rgb(90,180,172)',
            thickness: 20
        }, {
            from: avg + 3 * std, // avg + 3std
            to: avg + 3.5 * std, // avg + 3.5std
            color: 'rgb(1,102,94)',
            thickness: 20
        }]
    },

    series: [{
        name: 'Current value',
        data: [cur_value],
        tooltip: {
            valueSuffix: ' '
        },
        dataLabels: {

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
