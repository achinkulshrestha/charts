import React, {Component} from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Datable extends Component{

  render(){
    return (
      <div style={{ width: '100%' }}>
       <MuiThemeProvider>
        <Table style={{ width: 400, margin: 'auto' }}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn></TableHeaderColumn>
                    <TableHeaderColumn>Sessions</TableHeaderColumn>
                    <TableHeaderColumn>Milk(ml)</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                <TableRow>
                    <TableRowColumn>Yesterday</TableRowColumn>
                    <TableRowColumn>0</TableRowColumn>
                    <TableRowColumn>0.00</TableRowColumn>
                </TableRow>
                <TableRow>
                     <TableRowColumn>Today</TableRowColumn>
                    <TableRowColumn>3</TableRowColumn>
                    <TableRowColumn>43.23</TableRowColumn>
                </TableRow>
                <TableRow >
                     <TableRowColumn>Total</TableRowColumn>
                    <TableRowColumn>29</TableRowColumn>
                    <TableRowColumn>421.21</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
         </MuiThemeProvider>
      </div>
    )
  }
}

export default Datable;
