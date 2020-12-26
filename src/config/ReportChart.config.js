const ReportChart = {
  chart: {
    type: 'spline',
    width: null,
    height: null,
    marginTop: 40
  },
  colors: ['#5584ff'],
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    tickInterval: 2,
    gridLineWidth: 1,
    categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    labels:{
      enabled: false,
    },
  },
  yAxis: {
    title: {
      enabled: false,
      text: null
    },
    labels: {
      style: {
        color: "#7d889e",
        opacity: '.3',
        fontSize: '18px',
        fontWeight: '700'
      }
    },
    endOnTick: false,
    maxPadding: 0.15
  },
  plotOptions: {
    spline: {
      lineWidth: 6,
      marker: {
        enable: false,
        radius: 2,
      }
    }
  },
  legend: {
    enabled: false
  },
  series: [{
    name: null,
    data: [300, 320, 400, 700, 700, 620, 670, 433, 200, 310, 150, 220]
  }],
  credits: {
    enabled: false
  }
};

export default ReportChart;