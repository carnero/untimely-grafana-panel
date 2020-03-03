import $ from 'jquery';
import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { FlotPosition } from '@grafana/ui/components/Graph/types.d';
import {
  CustomScrollbar, GraphLegend, LegendDisplayMode, LegendItem,
} from '@grafana/ui';
import { Tooltip } from './Tooltip';
import { Serie, SimpleOptions, XValue } from './types';
import convertToPoints from './convertToPoints';

interface Props extends PanelProps<SimpleOptions> {
  height: number;
  width: number;
}
interface State {
  noData: boolean;
  hoverItem?: any;
  plot?: Plot;
  tooltipContent?: any;
  series?: Serie[];
  xSerie?: XValue[];
}

interface Plot extends jquery.flot.plot {
  clearSelection(): void;
  findNearbyItem(x: number, y: number, radius: number): any;
}

interface PlotOptions extends jquery.flot.plotOptions {
  selection: object;
}

export class Panel extends PureComponent<Props, State> {
  static generateTicks(series: Serie[], xSerie: XValue[], width: number): number[] {
    const ticks: number[] = [];
    if (!series.length || !xSerie.length) {
      return ticks;
    }

    // Find all the ticks that signal a reset
    series.forEach((serie) => {
      const resets = serie.data
        .filter((d) => d[0].resets)
        .map((d) => d[0].value);

      resets.forEach((r) => {
        if (!ticks.find((t) => t === r)) {
          ticks.push(r);
        }
      });
    });

    // A tick needs 65 px width
    const nbTicks = width / 65;

    const minValue = xSerie[0].value;
    const maxValue = xSerie[xSerie.length - 1].value;
    const tickDistance = (maxValue - minValue) / nbTicks;

    // Add extra ticks if they are far enough from the reset ticks
    for (let i = 0; i < nbTicks; i += 1) {
      const searchValue = minValue + tickDistance * i;
      if (!ticks.find((t) => Math.abs(t - searchValue) < 0.85 * tickDistance)) {
        const tickValue = xSerie.find((s) => s.value >= searchValue);
        if (tickValue) {
          ticks.push(tickValue.value);
        }
      }
    }

    return ticks.sort((a, b) => a - b);
  }

  element: HTMLElement | null = null;

  $element: JQuery<HTMLElement> | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      noData: false,
    };
  }

  componentDidMount() {
    if (this.element) {
      this.$element = $(this.element);
      this.$element.bind('plothover', this.onPlotHover);
      this.$element.bind('plotselected', this.onPlotSelected);
    }

    this.drawGraph();
  }

  componentDidUpdate(prevProps: PanelProps<SimpleOptions>, prevState: State) {
    const { series } = this.state;
    if (prevProps !== this.props || ((series || []).length !== (prevState.series || []).length)) {
      this.drawGraph();
    }
  }

  getSeries() {
    const { data: { series }, options } = this.props;

    const xDataFrame = this.getXSerie();

    const yDataFrames = series.filter((serie) => (
      serie.name !== options.xseries
    ));

    return convertToPoints(xDataFrame, yDataFrames, parseInt(options.offset as any, 10) || 0);
  }

  getXSerie() {
    const { data: { series }, options } = this.props;
    return series.find((serie) => (
      serie.name === options.xseries
    ));
  }

  onPlotHover = (_event: any, position: FlotPosition) => {
    const { plot, series, xSerie } = this.state;
    if (!plot || !series || !xSerie) {
      return;
    }
    plot.unhighlight();

    if (position.x <= 0) {
      this.setState({ hoverItem: undefined });
      return;
    }

    const { xaxis }: any = plot.getAxes();

    const point: any = xaxis.c2p(position.pageX - plot.offset().left as any);
    this.setState({ hoverItem: point });
    this.highlight(point);
  }

  onPlotSelected = (_event: any, { xaxis }: any) => {
    const { onChangeTimeRange } = this.props;
    const { plot, series, xSerie } = this.state;
    if (!plot || !series || !xSerie) {
      return;
    }

    const min = Math.floor(xaxis.from);
    const from = xSerie.find((d: XValue) => d.value >= min);
    const max = Math.ceil(xaxis.to);
    const to = xSerie.find((d: XValue) => d.value >= max);

    if (!!from && !!to) {
      onChangeTimeRange({ from: from.time, to: to.time });
      plot.clearSelection();
    }
  }

  getLegendItems(): LegendItem[] {
    const { plot } = this.state;
    const { data: { series }, options } = this.props;

    if (!plot) {
      return [];
    }
    const plotData = plot.getData();
    if (!plotData.length) {
      return [];
    }

    return series.filter((serie) => (
      serie.name !== options.xseries
    )).map((serie, idx) => ({
      label: serie.name || '',
      isVisible: true,
      color: plotData[idx].color,
      yAxis: 1,
    }));
  }

  highlight(point: number) {
    const { plot, series } = this.state;
    if (!series || !plot) {
      return;
    }

    series.forEach((serie: any, index: any) => {
      const match = serie.data.findIndex((s: any) => s[0].value >= point);
      plot.highlight(index, match);
    });
  }

  drawGraph() {
    if (this.$element === null) {
      return;
    }
    const { series, xSerie } = this.getSeries();
    const { width } = this.props;

    this.setState({ noData: series.length < 1 });

    try {
      const plot = $.plot(
        this.$element,
        series.map(({ data: points }) => (
          points.map((point) => [point[0].value, point[1]])
        )),
        {
          grid: {
            hoverable: true,
            clickable: true,
            borderWidth: 0,
          },
          series: {
            lines: { show: true },
          },
          xaxis: {
            tickDecimals: 2,
            ticks: Panel.generateTicks(series, xSerie, width),
            tickFormatter: (val) => {
              const values = xSerie.filter((s: any) => s.value === val);
              const resets = values.find((s: any) => s.resets);

              if (!values.length) {
                return '?';
              }

              if (!resets) {
                return values[0].label;
              }
              return `${values[0].label}&nbsp;&darr;`;
            },
          },
          crosshair: {
            mode: 'x',
          },
          selection: {
            mode: 'x',
          },
        } as PlotOptions,
      ) as Plot;

      this.setState({ plot, series, xSerie });
    } catch (err) {
      console.error(err);
      throw new Error('Error rendering panel');
    }
  }

  render() {
    const { height, width } = this.props;
    const {
      hoverItem, noData, xSerie, series,
    } = this.state;

    return (
      <div className="graph-panel" style={{ overflow: 'visible' }}>
        <div
          ref={(ref) => { this.element = ref; }}
          style={{ height, width }}
          className="graph-panel__chart"
          id="panel-random-id"
          onMouseLeave={() => {
            this.setState({ hoverItem: undefined });
          }}
        />
        {noData && <div className="datapoints-warning">No data</div>}
        <Tooltip
          items={this.getLegendItems()}
          series={series}
          xSerie={xSerie}
          hoveredValue={hoverItem}
        />
        <div style={{ maxHeight: '35%', padding: '10px 0' }}>
          <CustomScrollbar hideHorizontalTrack>
            <GraphLegend items={this.getLegendItems()} placement="under" displayMode={LegendDisplayMode.List} />
          </CustomScrollbar>
        </div>
      </div>
    );
  }
}

export default Panel;