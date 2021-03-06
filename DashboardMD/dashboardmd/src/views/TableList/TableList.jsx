import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Dashboard from "../../views/Dashboard/Dashboard";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class TableList extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      tableData: [["a", "b", "c"]],
    }
  }

  componentDidMount(){
    fetch('http://40.117.141.155:5000/').then(res => res.json())
      .then((result) =>{
        let results = [];
        for (var r = 0; r < result.length; r++) {
          var temp = [];
          var eyedee = result[r]['id'];
          // temp.push('<Link to="/dashboard/' + eyedee + '">' + eyedee + '</Link>');
          temp.push(eyedee);
          temp.push(result[r]['name']);
          temp.push(result[r]['type']);
          results.push(temp)
        }
        this.setState({tableData: results});
        // let length = reponse.data.length;
        // var promises = []
        // for (var i = 1; i <= length; i++) {
        //   promises.push(
        //     axios.get('http://40.117.141.155:5000/surgeries/' + i, {
        //             responseType: 'text'
        //     }).then(response2 => {
        //       tableData[i-1]['transcript'] = response2
        //     });
        //   )
        // }
        //
        // Promise.all(promises).then(() =>
        //   for (var r = 0; r < tableData.length; r++) {
        //
        //   }
        //   this.setState({tableData: tableData})
        // );
    },
      (error) => {
        console.log(error);
      });

  }

  createTable = (array) => {
    let table = [];

    table.push(
            <TableHead>
            <TableCell>ID</TableCell>
            <TableCell>Patient Name</TableCell>
            <TableCell>Surgery Type</TableCell>
            </TableHead>
    )
    for (var i = 0; i < array.length; i++) {
      table.push(
            <TableRow>
            <TableCell><Link to={"/dashboard/" + array[i][0]}>{array[i][0]}</Link></TableCell>
            <TableCell>{array[i][1]}</TableCell>
            <TableCell>{array[i][2]}</TableCell>
            </TableRow>
      )
    }
    return table;

  }

  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card plain>
            <CardHeader plain color="info">
              <h4 className={classes.cardTitleWhite}>
                Here is a list of all the surgeries performed.
              </h4>
              <p className={classes.cardCategoryWhite}>
                Click on a surgery to see further details.
              </p>
            </CardHeader>
            <CardBody>
              <Table>
                  {this.createTable(this.state.tableData)}
              </Table>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(TableList);
