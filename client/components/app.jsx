import React from 'react';
import axios from 'axios';
import PartySize from './partySize.jsx';
import Date from './date.jsx';
import Time from './time.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: 1001,
      partySize: 2,
      date: "",
      time: ""
    }
  } 
  findTable () {
    console.log('clickity clackity')
    var context = this; 
    axios.get('/restaurant/' + this.state.restaurantId)
      .then(function(response) {
        context.setState({
          restaurantId: response
        })
      }); 	
  }
  partySizeChange (event) {
    this.setState({
      partySize: event.target.value,
    });
  }
  timeChange (event) {
    this.setState({
      time: event.target.value,
    });
  }
  dateChange (event) {
    this.setState({
      date: event.target.value,
    });
  }
  render () {
    return (
      <div id="appBox">
        <div id="reserveBox">
          <h3 id="title">Make a reservation</h3>
          <div id="partySize">
            <PartySize partyChange={this.partySizeChange.bind(this)} />
          </div>
        </div>
        <div id="headers">
        <div id="dateTitle">Date</div>
          <div id="timeTitle">Time</div>
            <Date dateChange={this.dateChange.bind(this)} />
            <Time timeChange={this.timeChange.bind(this)} />
          </div>
          <button onClick={this.findTable.bind(this)} >Find a Table</button>
      </div>
    ) 
  }
}

export default App;

