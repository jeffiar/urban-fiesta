import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../../components/Grid/GridItem.jsx";
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import Table from "../../../components/Table/Table.jsx";
import Tasks from "../../../components/Tasks/Tasks.jsx";
import CustomTabs from "../../../components/CustomTabs/CustomTabs.jsx";
import Danger from "../../../components/Typography/Danger.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";
import CardIcon from "../../../components/Card/CardIcon.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CardFooter from "../../../components/Card/CardFooter.jsx";

import { bugs, website, server } from "../../../variables/general";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../../variables/charts";

import dashboardStyle from "../../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

import get_window from "./DataWindow";

class PulseChart extends React.Component {
  constructor(props) {
    super(props);
  }

  resetData(time) {
    const raw_labels = dailySalesChart.data.labels;
    const displayed_labels = get_window(raw_labels, time, 600, 5);

    const raw_series = dailySalesChart.data.series;
    const displayed_series = get_window(raw_series, time, 600, 5);

    const displayed_data = {
      labels: displayed_labels,
      series: [displayed_series],
    }

    return displayed_data;
  }

  render() {
    const { classes, time } = this.props;
    const displayed_data = this.resetData(time);
    return (
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardBody>
                <h3 className={classes.cardTitle}>In O2</h3>
              </CardBody>
              <CardHeader color="info">
                <ChartistGraph
                  className="ct-chart"
                  data={displayed_data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
            </Card>
          </GridItem>
    );
  }
}

PulseChart.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(PulseChart);
