const SalesChart = {
    chart: {
        type: 'pie',
        width: null,
        height: null,
        marginTop: 40
    },
    plotOptions: {
        pie: {
            shadow: false,
            colors: ['#25396e', '#3755a4', '#4164c2', '#4164c2', '#4b74e0', '#5584ff']
        }
    },
    title: {
        verticalAlign: 'middle',
        floating: true,
        text: '1,560',
        x: -65,
        y: 28,
        style: {'color': '#8492af', 'fontSize': '36px', 'fontWeight': '700', 'font-family': 'Roboto, san-serif'},
    },
    subtitle: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Sales',
      useHTML: true,
      x: -65,
      y: 48,
      style: {'color': '#8492af', 'fontSize': '20px', 'fontWeight': '300', 'font-family': 'Roboto, san-serif'},
    },
    legend: {
        align: 'right',
        layout: 'vertical',
        verticalAlign: 'middle',
        itemMarginTop: 5,
        itemMarginBottom: 5
    },
    series: [{
        data: [
            ["Websites", 6], ["Logo", 4], ["Social Media", 7], ["Adwords", 2], ["E-Commerce", 5]
        ],
        innerSize: '60%',
        showInLegend: true,
        dataLabels: {
            enabled: false
        }
    }],
    credits: {
        enabled: false
    }
};

export default SalesChart;