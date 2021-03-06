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

class VitalNumbers extends React.Component {
  state = {
    value: 0,
    time: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  tick() {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  resetData(time) {
    let heartRate = dailySalesChart.data.series[time];
    let systolic = Math.floor(Math.random()*(130-110)+110);
    let diastolic = Math.floor(Math.random()*(92-75)+75);
    let spo2 = Math.floor(Math.random()*(99-83)+83);
    let respiration = Math.floor(Math.random()*(28-12)+12);

    if (heartRate === undefined) {
      heartRate = "N/A"
      systolic = "N/A"
      diastolic = "N/A"
      spo2 = "N/A"
      respiration = "N/A"
    }

    return ({
      heartRate: heartRate,
      systolic: systolic,
      diastolic: diastolic,
      spo2: spo2,
      respiration: respiration
    });
  }

  render() {
    const { classes } = this.props;
    const new_data = this.resetData(this.state.time);
    return (
      <div>
        <GridContainer>
          <div style={{flex: "1 0 auto", width: '1200px', flexDirection: 'column'}}>
            {/* Heart Rate Monitor */}
            <GridItem xs={12} sm={3} md={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <h1>{new_data.heartRate}</h1>
                  </CardIcon>
                  <p className={classes.cardCategory}></p>
                  <h3 className={classes.cardTitle}>Heart Rate</h3>
                  <h4 className={classes.cardTitle}>bpm</h4>
                </CardHeader>
              </Card>
            </GridItem>

            {/* Systolic Pressure Monitor */}
            <GridItem xs={12} sm={3} md={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <h1>{new_data.systolic}</h1>
                  </CardIcon>
                  <p className={classes.cardCategory}></p>
                  <h3 className={classes.cardTitle}>Systolic</h3>
                  <h4 className={classes.cardTitle}>mm Hg</h4>
                </CardHeader>
              </Card>
            </GridItem>

            {/* Diastolic Pressure Monitor */}
            <GridItem xs={12} sm={3} md={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <h1>{new_data.diastolic}</h1>
                  </CardIcon>
                  <p className={classes.cardCategory}></p>
                  <h3 className={classes.cardTitle}>Diastolic</h3>
                  <h4 className={classes.cardTitle}>mm Hg</h4>
                </CardHeader>
              </Card>
            </GridItem>

            {/* SpO2 Monitor */}
            <GridItem xs={12} sm={3} md={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <h1>{new_data.spo2}</h1>
                  </CardIcon>
                  <p className={classes.cardCategory}></p>
                  <h3 className={classes.cardTitle}>SpO2</h3>
                  <h4 className={classes.cardTitle}>%</h4>
                </CardHeader>
              </Card>
            </GridItem>

            {/* Respiration Monitor */}
            <GridItem xs={12} sm={3} md={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <h1>{new_data.respiration}</h1>
                  </CardIcon>
                  <p className={classes.cardCategory}></p>
                  <h3 className={classes.cardTitle}>Respiration</h3>
                  <h4 className={classes.cardTitle}>CO2 mm Hg</h4>
                </CardHeader>
              </Card>
            </GridItem>
          </div>
        </GridContainer>
      </div>
    );
  }
}

VitalNumbers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(VitalNumbers);
