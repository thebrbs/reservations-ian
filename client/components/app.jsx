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
      <div id="component" className="col-md-4 col-xs-10">
        <div className="row">
          <h4 id="title">Make a reservation</h4>
          <PartySize partyChange={this.partySizeChange.bind(this)} />
        </div>
        <div className="row">
          <div className="col-md-4 col-xs-4">Date</div>
          <div className="col-md-4 col-xs-4">Time</div>        
        </div>
        <div className="row">
          <div className="col-md-4 col-xs-4">
            <Date dateChange={this.dateChange.bind(this)} />
          </div>
          <div className="col-md-4 col-xs-4">
            <Time timeChange={this.timeChange.bind(this)} />
          </div>
        </div>
        <div className="buttStyle">
          <button className="btn btn-danger" id="findButt" onClick={this.findTable.bind(this)} >Find a Table</button>
        </div>
        <div>
            <SlotMaker clicked={this.state.clicked} timeSlots={this.state.timeSlots} time={this.state.time} />
        </div>
      </div>
    ) 
  }
}

export default App;

