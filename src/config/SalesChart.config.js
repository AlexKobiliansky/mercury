const SalesChart = {
  chart: {
  type: 'pie',
  height: '285'
  // width: '400'
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
  x: -65,
  y: 0
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
  ["Websites",6],["Logo", 4],["Social Media",7],["Adwords", 2], ["E-Commerce", 5]
  ],
innerSize: '60%',
showInLegend:true,
dataLabels: {
  enabled: false
}
}],
credits: {
  enabled: false
}
};

export default SalesChart;