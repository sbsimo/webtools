async function generateLineChart() {

    const response = await fetch('https://sbsimo.github.io/webtools/data/lai_global_average.csv');
    const data = await response.text();

    // Parse the .csv data
    const parsedData = Papa.parse(data, { header: true }).data;
    const averages = parsedData.map(row => Math.round(1000 * Number(row.corr_wavg)) / 1000);
    const ranges = parsedData.map(row => [Math.round(1000 * Number(row['avg-1std'])) / 1000, Math.round(1000 * Number(row['avg+1std'])) / 1000]);
    const seriesMean = parsedData.map(row => Math.round(1000 * Number(row.clim_avg)) / 1000);

    var s = parsedData.map(row => row.winter.substring(0, 4))
    /* s.pop();
    console.log(s) */

    Highcharts.chart('line-chart-container', {
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

        //    subtitle: {
        //        text: 'Source: ' +
        //            '<a href="https://www.yr.no/nb/historikk/graf/1-113585/Norge/Viken/Nesbyen/Nesbyen?q=2022-07"' +
        //            'target="_blank">YR</a>',
        //        align: 'left'
        //    },

        xAxis: {
            /* min: 2014,*/ // Set minimum value for x-axis
            //max: 2024, // Set maximum value for x-axis */

            //        type: 'datetime',
            //categories: s.map(d => +d),
            categories: s,
            labels: {
                style: {
                    color: '#074007',
                    fontSize: '.8rem'
                }
            }
            //        accessibility: {
            //            rangeDescription: 'Range: Jul 1st 2022 to Jul 31st 2022.'
            //        }
        },

        yAxis: {
            /* min: 1.45,
            max: 1.55, */
            title: {
                text: 'value'
            },
            labels: {
                style: {
                    color: '#074007',
                    fontSize: '.8rem'
                }
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: '%'
        },

        //    plotOptions: {
        //        series: {
        //            pointStart: Date.UTC(2022, 6, 1),
        //            pointIntervalUnit: 'day'
        //        }
        //    },
        legend: {
            backgroundColor: '#FCFFC5'
        },

        series: [{
            name: 'Current-year global average',
            data: averages,
            zIndex: 1,
            color: '#a0b128',
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                //            lineColor: Highcharts.getOptions().colors[0]
                lineColor: 'black'
            }
        }, {
            name: '2014-2020 global average',
            data: seriesMean,
            itemStyle: { 'font-size': '30px' },

            zIndex: 0,
            color: 'red',
            dashStyle: 'shortdot',
            fillOpacity: 1,

            marker: {
                fillColor: 'black',
                lineWidth: 2,
                //            lineColor: Highcharts.getOptions().colors[0],
                lineColor: 'black',
                enabled: false
            }
        }, {
            name: '1 stdev corridor',
            data: ranges,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: '#2aa6a1bf',
            fillOpacity: 0.6,
            zIndex: 0,
            marker: {
                enabled: false
            }
        }]
    });

}

generateLineChart();
