async function generateLineChart() {

const response = await fetch('https://sbsimo.github.io/webtools/data/swi_global_average.csv');
const data = await response.text();

// Parse the .csv data
const parsedData = Papa.parse(data, { header: true }).data;
const averages = parsedData.map(row => Math.round(10*Number(row['swi010']))/10);
const ranges = parsedData.map(row => [Math.round(10*Number(row['avg-1std']))/10, Math.round(10*Number(row['avg+1std']))/10]);
const seriesMean = parsedData.map(row => Math.round(10*Number(row.clim_avg))/10);

Highcharts.chart('line-chart-container', {

    title: {
        text: 'Global average',
        align: 'center'
    },

//    subtitle: {
//        text: 'Source: ' +
//            '<a href="https://www.yr.no/nb/historikk/graf/1-113585/Norge/Viken/Nesbyen/Nesbyen?q=2022-07"' +
//            'target="_blank">YR</a>',
//        align: 'left'
//    },

    xAxis: {
//        type: 'datetime',
        categories: parsedData.map(row => row.winter.substring(0, 4))
//        accessibility: {
//            rangeDescription: 'Range: Jul 1st 2022 to Jul 31st 2022.'
//        }
    },

    yAxis: {
        title: {
            text: 'percentage (%)'
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

    series: [{
        name: 'Current-year global average',
        data: averages,
        zIndex: 1,
        color: 'black',
        marker: {
            fillColor: 'white',
            lineWidth: 2,
//            lineColor: Highcharts.getOptions().colors[0]
            lineColor: 'black'
        }
    }, {
        name: '2007-2020 global average',
        data: seriesMean,
        zIndex: 0,
        color: 'black',
        dashStyle: 'shortdot',
        fillOpacity: 0.7,
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
        color: '#21918c',
        fillOpacity: 0.7,
        zIndex: 0,
        marker: {
            enabled: false
        }
    }]
});

}

generateLineChart();