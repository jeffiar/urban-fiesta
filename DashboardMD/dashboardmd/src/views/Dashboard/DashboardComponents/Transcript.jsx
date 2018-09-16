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

import get_text_window from "./TextWindow";

class Transcript extends React.Component {
  state = {
    value: 0,
    time: 0,
    text: ""
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
    // Please forgive me oh gods of coding....
    var tmp = window.location.href.split('/');
    var eyedee = tmp[tmp.length - 1];
    fetch('http://40.117.141.155:5000/surgeries/' + eyedee).then(res => res.json()).then(
        (result) => {
            this.setState({text: result['text']});
            console.log(result['text']);
    },
        (error) => {
            console.log(error);
    });
    this.interval = setInterval(() => this.tick(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  resetData(time) {
    const raw_text = this.state.text;
    const displayed_text = get_text_window(raw_text, time, 5, 5);
    return displayed_text
  }

  render() {
    const { classes } = this.props;
    const displayed_text = this.resetData(this.state.time);
    return (
      <div>
        <GridContainer>
          <div style={{flex: "1 0 auto", marginLeft: "-750px", width: '1200px', height: '600px', flexDirection: 'column'}}>
            {/* Pulse Monitor */}
            <GridItem xs={12} sm={12} md={4}>
              <Card chart style={{height: '600px'}}>
                <CardBody>
                  <h3 className={classes.cardTitle}>Lecture Transcription</h3>
                    <h4>
                      {displayed_text}
                    </h4>
                </CardBody>
              </Card>
            </GridItem>
          </div>
        </GridContainer>
      </div>
    );
  }
}

Transcript.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Transcript);
