import React from 'react';
import axios from 'axios';
import PartySize from './partySize.jsx';
import Date from './date.jsx';
import Time from './time.jsx';
import SlotMaker from './slotMaker.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: 1001,
      timeSlots: [],
      partySize: 2,
      date: "2018-05-31",
      time: "5:00 am",
      pickTime: "",
      clicked: false,
    }
  } 
  findTable () {
    var context = this; 
    axios.get('/restaurant/' + this.state.restaurantId + '/' + this.state.date)
      .then(function(response) {
        context.setState({
          timeSlots: response.data,
          clicked: true,
        });
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
          <div>
            <SlotMaker clicked={this.state.clicked} timeSlots={this.state.timeSlots} time={this.state.time} />
          </div>
      </div>
    ) 
  }
}

export default App;

