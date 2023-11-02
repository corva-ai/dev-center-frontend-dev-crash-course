import { useMemo, useRef, useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import classNames from 'classnames';
import Annotation from './annotations';
Annotation(Highcharts);

import { ChartWrapper, ChartButtons, ResetZoomButton } from '@corva/ui/components';
import { useTheme } from '@material-ui/core/styles';

import { getHighchartsOptions } from './options';
import { useStyles } from './styles';

export default function LineChart({
  annotations = [],
  coordinates = {},
  chartOptions = {},
  plotOptions = {},
  series = [],
  title = {},
  tooltip = {},
  xAxis = {},
  yAxis = {},
}) {
  const classes = useStyles();
  const theme = useTheme();
  const chartRef = useRef();

  const { pixelHeight = 0, pixelWidth = 0 } = coordinates;
  const [areButtonsVisible, setButtonsVisible] = useState(false);

  const options = useMemo(
    () =>
      getHighchartsOptions({
        annotations,
        chartOptions,
        plotOptions,
        series,
        theme,
        title,
        tooltip,
        xAxis,
        yAxis,
      }),
    [annotations, chartOptions, plotOptions, series, theme, title, tooltip, xAxis, yAxis]
  );

  useEffect(() => {
    if (chartRef.current) chartRef.current.chart.reflow();
  }, [pixelHeight, pixelWidth]);

  const chartElement = useMemo(() => {
    return (
      <HighchartsReact
        containerProps={{
          style: { width: '100%', height: '100%' },
          onMouseEnter: () => setButtonsVisible(true),
          onMouseLeave: () => setButtonsVisible(false),
        }}
        highcharts={Highcharts}
        options={options}
        ref={chartRef}
      />
    );
  }, [options.annotations, options.series]);

  const onZoomChangeCallback = e => {
    // Check values of event and trigger actions if needed
    console.log('e', e);
  };

  if (!options.series.length) return null;
  return (
    <ChartWrapper
      chartOptions={{ animation: false, panning: { type: 'x' }, zoomType: 'x' }}
      chartRef={chartRef}
      onZoomChangeCallback={onZoomChangeCallback}
    >
      {options && chartElement}
      <ChartButtons
        className={classNames(
          classes.chartButtonsContainer,
          areButtonsVisible && classes.chartButtonsContainerVisible
        )}
      >
        <ResetZoomButton />
      </ChartButtons>
    </ChartWrapper>
  );
}
