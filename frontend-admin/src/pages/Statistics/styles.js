import * as d3Format from 'd3-format';
import { withStyles } from '@material-ui/core/styles';
import {
  Title,
  Legend,
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import { annualVehiclesSales as data } from './data.js';

export const styles = theme => ({
  primaryButton: {
    margin: theme.spacing(1),
    width: '120px',
  },
  secondaryButton: {
    margin: theme.spacing(1),
    width: '170px',
  },
  leftIcon: {
    marginRight: theme.spacing(1),
    marginBottom: '1px',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
    marginBottom: '1px',
  },
  text: {
    display: 'flex',
    flexDirection: 'row',
  },
  group: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  hoverGroup: {
    width: '300px',
  },
  name: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
});

export const tooltipContentTitleStyle = {
  fontWeight: 'bold',
  paddingBottom: 0,
};
export const tooltipContentBodyStyle = {
  paddingTop: 0,
};

export const formatTooltip = d3Format.format(',.2r');
export const TooltipContent = (props) => {
  const { targetItem, text, ...restProps } = props;
  return (
    <div>
      <div>
        <Tooltip.Content
          {...restProps}
          style={tooltipContentTitleStyle}
          text={targetItem.series}
        />
      </div>
      <div>
        <Tooltip.Content
          {...restProps}
          style={tooltipContentBodyStyle}
          text={formatTooltip(data[targetItem.point][targetItem.series])}
        />
      </div>
    </div>
  );
};
export const Root = withStyles({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
})(({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
));
export const Label = withStyles({
  label: {
    whiteSpace: 'nowrap',
  },
})(({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
));

export const TitleText = withStyles({ title: { marginBottom: '30px' } })(({ classes, ...restProps }) => (
  <Title.Text {...restProps} className={classes.title} />
));
export const encodeTarget = ({ series, point }) => (2 * point + Number(series === 'Profits'));
export const decodeTarget = code => ({ series: code % 2 ? 'Profits' : 'Sales', point: Math.floor(code / 2) });

export const compareTargets = (
  { series, point }, { series: targetSeries, point: targetPoint },
) => series === targetSeries && point === targetPoint;

