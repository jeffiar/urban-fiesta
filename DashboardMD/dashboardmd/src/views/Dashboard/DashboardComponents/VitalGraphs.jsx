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

class VitalGraphs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <div style={{flex: "1 0 auto", marginLeft: "-850px", width: '1200px', flexDirection: 'column'}}>
            {/* Pulse Monitor */}
            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <CardBody>
                  <h3 className={classes.cardTitle}>Pulse</h3>
                </CardBody>
                <CardHeader color="info">
                  <ChartistGraph
                    className="ct-chart"
                    data={dailySalesChart.data}
                    type="Line"
                    options={dailySalesChart.options}
                    listener={dailySalesChart.animation}
                  />
                </CardHeader>
              </Card>
            </GridItem>

            {/* Body Temperature Monitor */}
            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <CardBody>
                  <h3 className={classes.cardTitle}>Body Temperature</h3>
                </CardBody>
                <CardHeader color="info">
                  <ChartistGraph
                    className="ct-chart"
                    data={emailsSubscriptionChart.data}
                    type="Bar"
                    options={emailsSubscriptionChart.options}
                    responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                    listener={emailsSubscriptionChart.animation}
                  />
                </CardHeader>
              </Card>
            </GridItem>

            {
            // <GridItem xs={12} sm={12} md={4}>
            //   <Card chart>
            //     <CardBody>
            //       <h3 className={classes.cardTitle}>Completed Tasks</h3>
            //     </CardBody>
            //     <CardHeader color="info">
            //       <ChartistGraph
            //         className="ct-chart"
            //         data={completedTasksChart.data}
            //         type="Line"
            //         options={completedTasksChart.options}
            //         listener={completedTasksChart.animation}
            //       />
            //     </CardHeader>
            //   </Card>
            // </GridItem>
            }
          </div>
        </GridContainer>
      </div>
    );
  }
}

VitalGraphs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(VitalGraphs);
