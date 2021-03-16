// ============================================================== 
// Sales Comparison
// ============================================================== 
var options_sales_comparison = {
    series: [{
      name: "HostingPress Wordpress Theme",
      data: [[1, 19], [2, 20], [4, 33], [6, 41], [8, 25], [10, 23], [12, 28], [14, 45], [16.5, 50], [18.5, 39], [20.5, 26], [22.5, 22], [24.5, 30], [26.5, 41], [28.5, 39], [30, 22]]
    },
    {
      name: "MedicalPress Wordpress Theme",
      data: [[1, 31], [2, 32], [4, 30], [6, 24], [8, 19], [10, 18], [12, 18], [14, 19], [16.5, 21], [18.5, 30], [20.5, 39], [22.5, 35], [24.5, 26], [26.5, 21], [28.5, 18], [30, 17]]
    }
    ],
    colors: ['#009efb', '#55ce63'],
    chart: {
      height: 274,
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      }
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      min: 1,
      max: 30
    },
    yaxis: {
      min: 0,
      max: 50
    },
  };

  var sales_comparison = new ApexCharts(document.querySelector("#sales_comparision_chart"), options_sales_comparison);
  sales_comparison.render();

// ============================================================== 
// Sales Difference
// ============================================================== 
  var options_sales_difference = {
    series: [50, 10, 40],
    chart: {
      width: '110%',
      type: 'donut',
    },
    fill: {
      colors: ['#009efb', '#55ce63', '#edf1f5'],
    },
    stroke: {
      width: 0,
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
        }
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 0,
      width: 0,
      show: false,
    },
    grid: {
      padding: {
        top: 0,
        right: -10,
        bottom:0,
      }
    },
  };

  var sales_difference = new ApexCharts(document.querySelector("#sale-diff-chart"), options_sales_difference);
  sales_difference.render();

//============================================================== 
//Sales of the Month
//============================================================== 

var options_sales_of_the_month = {
    series: [15, 50, 20, 15],
    labels: ['Organic', 'Other', 'Marketing', 'Search Engine'],
    chart: {
    width: '110%',
    type: 'donut',
    offsetY:15,
  },

  plotOptions: {
    pie: {
        expandOnClick: true,
        donut: {
            size: '87',
            labels: {
                show: false,
                name: {
                    show: true,
                    offsetY: 7,

                },
                value: {
                    show: false,
                },
                total: {
                    show: false,
                    color: '#525c65',
                    fontSize: '30px',
                    fontFamily: 'Rubik, sans-serif',
                }
            },
        },
    },
  },

  fill: {
    colors: ['#745af2', '#edf1f5', '#009efb', '#55ce63'],
  },

  dataLabels: {
    enabled: false
  },

  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    show: false
  }
  };

  var sales_of_the_month = new ApexCharts(document.querySelector("#sale-of-the-month-chart"), options_sales_of_the_month);
  sales_of_the_month.render();


// ============================================================== 
// Sales Prediction
// ============================================================== 

var options_sales_prediction = {
  series: [100],
  chart: {
  width:'130%',
  type: 'radialBar',
  sparkline: {
    enabled: true
  }
},
plotOptions: {
  radialBar: {
    startAngle: -90,
    endAngle: 90,
    hollow: {
      size: '45%',
    },
    
    track: {
      strokeWidth: '97%',
      margin: 5, // margin is in pixels
      dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        color: '#009efb',
        opacity: 1,
        blur: 2
      }
    },
    dataLabels: {
      name: {
        show: false
      },
      value: {
        offsetY: -2,
        fontSize: '22px',
        show:false,
      }
    }
  }
},
grid: {
  padding: {
    top: -10,
    right: 30,
    bottom:30,
  }
},
fill: {
  type: 'gradient',
  gradient: {
    shade: 'dark',
    gradientToColors: [ '#55ce63'],
    type: 'horizontal',
    shadeIntensity: 0.4,
    inverseColors: false,
    opacityFrom: 1,
    opacityTo: 1,
    stops: [0, 80, 100]
  },
},
labels: ['Average Results'],
};

var sales_prediction = new ApexCharts(document.querySelector("#sales-prediction"), options_sales_prediction);
sales_prediction.render();

