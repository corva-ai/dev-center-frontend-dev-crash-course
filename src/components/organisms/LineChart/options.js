const defaultHighchartsOptions = {
  chart: {
    animation: false,
    backgroundColor: 'transparent',
    panning: {
      enabled: true,
      type: 'x',
    },
    panKey: 'shift',
    style: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '11px',
      fontWeight: 'normal',
    },
    type: 'line',
    zoomType: 'x',
    resetZoomButton: {
      position: {
        y: -50,
      },
    },
  },
  credits: { enabled: false },
  exporting: { enabled: false },
  legend: {
    enabled: false,
  },
  plotOptions: {
    series: {
      animation: false,
    },
  },
  title: {
    style: {
      fontWeight: 400,
      fontSize: '18px',
    },
  },
  tooltip: {
    backgroundColor: 'rgba(59, 59, 59, 0.9)',
    borderRadius: 4,
    borderWidth: 0,
    crosshairs: true,
    outside: false,
    shadow: false,
    shared: true,
    style: { color: '#fff', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.12)' },
    useHTML: true,
    valueDecimals: 2,
    zIndex: 10,
  },
  xAxis: {
    allowDecimals: false,
    gridLineWidth: 1,
    labels: {
      step: 1,
      useHTML: true, // Enable HTML for label rendering
      zIndex: 0,
    },
    lineWidth: 1,
    minPadding: 0,
    offset: 0,
    startOnTick: true,
    tickWidth: 0,
    title: {
      style: { fontSize: '14px', fontWeight: 200 },
    },
    type: 'datetime',
  },
  yAxis: {
    allowDecimals: false,
    gridLineWidth: 1,
    labels: {
      step: 1,
    },
    lineWidth: 1,
    min: 0,
    minPadding: 0,
    offset: 0,
    startOnTick: true,
    tickWidth: 0,
    title: {
      style: { fontSize: '14px', fontWeight: 200 },
    },
  },
};

export function getHighchartsOptions({
  theme,
  annotations,
  chartOptions,
  plotOptions,
  series,
  title,
  tooltip,
  xAxis,
  yAxis,
}) {
  const { palette } = theme;

  return {
    ...defaultHighchartsOptions,
    annotations,
    chart: {
      ...defaultHighchartsOptions.chart,
      ...chartOptions,
      style: {
        ...defaultHighchartsOptions.chart.style,
        color: palette.primary.text7,
      },
    },
    legend: {
      ...defaultHighchartsOptions.legend,
      itemHoverStyle: {
        color: palette.primary.text7,
        opacity: 1.2,
      },
      itemStyle: {
        color: palette.primary.text7,
      },
    },
    plotOptions: {
      ...defaultHighchartsOptions.plotOptions,
      column: {
        ...defaultHighchartsOptions.plotOptions.column,
        ...plotOptions.column,
      },
    },
    title: {
      ...defaultHighchartsOptions.title,
      text: '',
      ...title,
    },
    tooltip: {
      ...defaultHighchartsOptions.tooltip,
      ...tooltip,
    },
    series,
    xAxis: {
      ...defaultHighchartsOptions.xAxis,
      categories: xAxis.categories,
      gridLineColor: palette.background.b7,
      labels: {
        ...defaultHighchartsOptions.xAxis.labels,
        ...xAxis.labels,
        style: {
          color: palette.primary.text7,
        },
      },
      lineColor: palette.background.b7,
      title: {
        ...defaultHighchartsOptions.xAxis.title,
        ...xAxis.title,
        style: {
          ...defaultHighchartsOptions.xAxis.title.style,
          color: palette.primary.text7,
        },
      },
    },
    yAxis: {
      ...defaultHighchartsOptions.yAxis,
      ...yAxis,
      gridLineColor: palette.background.b7,
      labels: {
        ...defaultHighchartsOptions.xAxis.labels,
        ...yAxis.labels,
        style: {
          color: palette.primary.text7,
        },
      },
      lineColor: palette.background.b7,
      title: {
        ...defaultHighchartsOptions.yAxis.title,
        ...yAxis.title,
        style: {
          ...defaultHighchartsOptions.yAxis.title.style,
          color: palette.primary.text7,
        },
      },
    },
  };
}
