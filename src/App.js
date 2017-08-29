import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import Datable from './components/Datable';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }


  getChartData(){
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var arr = new Array();
    var numDays = new Date(year, month, 0).getDate();
    for (var i=0; i< 7; i++) {
        if (day > numDays) {
          month = (month+1)%13;
          day = 1
          arr.push((month+1)+"/"+day);
        }
        else {
          arr.push(month+"/"+day);
        }
        day = day +1
    }
    // Ajax calls here
    this.setState({
      chartData:{
        labels: [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]],
        datasets:[
          {
            label:'Sessions',
            data:[6, 4, 5, 7, 2, 3, 4],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Sirona Dash</h2>
        </div>
        <Datable />

        <Chart chartData={this.state.chartData} width={100} height={50} legendPosition="left"/>
       
      </div>
    );
  }
}

export default App;
