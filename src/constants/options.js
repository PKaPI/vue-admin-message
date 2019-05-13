export const pieOption = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    x: "left",
    data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: ["100%", "70%"],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: "center"
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: "30",
            fontWeight: "bold"
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 234, name: "联盟广告" },
        { value: 135, name: "视频广告" },
        { value: 1548, name: "搜索引擎" }
      ]
    }
  ]
};

//柱状图数据
export const barOption = {
  color: ["#3398DB"],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: "value"
    }
  ],
  series: [
    {
      name: "直接访问",
      type: "bar",
      barWidth: "60%",
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
};

//折线图数据
export const lineOption = {
  title: {
    text: "一天用电量分布",
    subtext: "纯属虚构"
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross"
    }
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [
      "00:00",
      "01:15",
      "02:30",
      "03:45",
      "05:00",
      "06:15",
      "07:30",
      "08:45",
      "10:00",
      "11:15",
      "12:30",
      "13:45",
      "15:00",
      "16:15",
      "17:30",
      "18:45",
      "20:00",
      "21:15",
      "22:30",
      "23:45"
    ]
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value} W"
    },
    axisPointer: {
      snap: true
    }
  },
  visualMap: {
    show: false,
    dimension: 0,
    pieces: [
      {
        lte: 6,
        color: "green"
      },
      {
        gt: 6,
        lte: 8,
        color: "red"
      },
      {
        gt: 8,
        lte: 14,
        color: "green"
      },
      {
        gt: 14,
        lte: 17,
        color: "red"
      },
      {
        gt: 17,
        color: "green"
      }
    ]
  },
  series: [
    {
      name: "用电量",
      type: "line",
      smooth: true,
      data: [
        300,
        280,
        250,
        260,
        270,
        300,
        550,
        500,
        400,
        390,
        380,
        390,
        400,
        500,
        600,
        750,
        800,
        700,
        600,
        400
      ],
      markArea: {
        data: [
          [
            {
              name: "早高峰",
              xAxis: "07:30"
            },
            {
              xAxis: "10:00"
            }
          ],
          [
            {
              name: "晚高峰",
              xAxis: "17:30"
            },
            {
              xAxis: "21:15"
            }
          ]
        ]
      }
    }
  ]
};
