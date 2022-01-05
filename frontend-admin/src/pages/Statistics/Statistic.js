/* eslint-disable no-unused-vars */
/* eslint-disable react/no-direct-mutation-state */
import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
  Title,
  Legend,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import axios from "axios";
import { scaleBand } from "@devexpress/dx-chart-core";
import {
  ArgumentScale,
  Stack,
  Animation,
  EventTracker,
  HoverState,
  SelectionState,
} from "@devexpress/dx-react-chart";
import { withStyles } from "@material-ui/core/styles";
import {
  styles,
  TooltipContent,
  Root,
  Label,
  TitleText,
  encodeTarget,
  decodeTarget,
  compareTargets,
} from "./styles.js";
import { annualVehiclesSales, annualVehiclesSales as data } from "./data.js";

class Statistic extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hover: null,
      selection: [{ series: "Sales", point: 3 }],
      tooltipTarget: null,
      tooltipEnabled: true,
      arrayData: [],
      data: [],
    };
    this.click = ({ targets }) => {
      const target = targets[0];
      if (target) {
        this.setState(({ selection }) => ({
          selection:
            selection[0] && compareTargets(selection[0], target)
              ? []
              : [target],
        }));
      }
    };
    this.changeHover = (hover) => this.setState({ hover });
    this.changeTooltip = (targetItem) =>
      this.setState({ tooltipTarget: targetItem });

    this.clearSelection = () => this.setState({ selection: [] });
    this.turnPrevSelection = () =>
      this.setState(({ selection }) => {
        const target = selection[0];
        if (!target) {
          return null;
        }
        const newTarget = decodeTarget(Math.max(encodeTarget(target) - 1, 0));
        return { selection: [newTarget] };
      });
    this.turnNextSelection = () =>
      this.setState(({ selection }) => {
        const target = selection[0];
        if (!target) {
          return null;
        }
        const newTarget = decodeTarget(
          Math.min(
            encodeTarget(target) + 1,
            2 * this.state.arrayData.length - 1
          )
        );
        return { selection: [newTarget] };
      });

    this.toggleTooltip = () =>
      this.setState(({ tooltipEnabled }) => ({
        tooltipEnabled: !tooltipEnabled,
        tooltipTarget: null,
      }));
  }
  componentDidMount() {
    this.getAllData();
  }
  getAllData = () => {
    axios.get("https://stationery-store-tmdt.herokuapp.com/thong_ke/").then((res) => {
      //this.setState({ data: res.data });
      res.data.forEach((element) => {
        let getMonth = new Date(element.ngay_bat_dau);
        let convertMonth = new Intl.DateTimeFormat("en-GB", {
          month: "long",
        }).format(getMonth);
        this.state.arrayData.push({
          month: convertMonth,
          Sales: element.tong_doanh_thu,
          Profits: element.tong_loi_nhuan,
        });
      });
      this.setState(this);
    });
  };
  render() {
    const { hover, selection, tooltipTarget, tooltipEnabled, arrayData } =
      this.state;
    if (arrayData.length === 0) {
      return <div>Loading...</div>;
    }
    if (arrayData !== 0) {
      return (
        <Paper>
          {console.log(arrayData.length)}
          <Chart data={arrayData}>
            <ArgumentScale factory={scaleBand} />
            <ArgumentAxis />
            <ValueAxis />
            <Title
              text="Revenue Statistics per Month"
              textComponent={TitleText}
            />

            <BarSeries name="Sales" valueField="Sales" argumentField="month" />
            <BarSeries
              name="Profits"
              valueField="Profits"
              argumentField="month"
            />
            <Stack />
            <Legend
              position="bottom"
              rootComponent={Root}
              labelComponent={Label}
            />
            <EventTracker onClick={this.click} />
            <HoverState hover={hover} onHoverChange={this.changeHover} />
            <Tooltip
              targetItem={tooltipEnabled && tooltipTarget}
              onTargetItemChange={this.changeTooltip}
              contentComponent={TooltipContent}
            />
            <SelectionState selection={selection} />
            <Animation />
          </Chart>
        </Paper>
      );
    }
  }
}

export default withStyles(styles)(Statistic);
