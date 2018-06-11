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
      partySizeMax: 15,
      date: "2018-05-31",
      time: "5:00 PM",
      pickTime: "",
      isClicked: false,
    }
  }   
  componentDidMount() {
    axios.get('/restaurant/1001/' + this.state.date)
      .then((response) => {
        this.setState({
          timeSlots: response.data,
        });
      });
  }
  findTable () {
      axios.get(`/restaurant/${this.state.restaurantId}/${this.state.date}`)
      .then((response) => {
        this.setState({
          timeSlots: response.data,
          isClicked: true,
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
      <div id="reserveContainer" className="col-lg-5 col-md-5 col-sm-10 col-xs-10">
          <h4 id="title">Make a reservation</h4>
          <PartySize partyChange={this.partySizeChange.bind(this)} />
        <div id="dateTimeContain" className="container col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
          <div id="dateTitle" className="col-lg-6 col-md-6 col-xs-6">Date</div>
          <div id="timeTitle" className="col-lg-6 col-md-6 col-xs-6">Time</div>     
          <div className="col-lg-6 col-md-6 col-xs-6 date">
            <Date date={this.state.date} dateChange={this.dateChange.bind(this)} />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-6 time">
            <Time time={this.state.time} timeChange={this.timeChange.bind(this)} />
          </div>
        </div>
        <div className="buttStyle">
          <button className="btn btn-danger" id="findButt" onClick={this.findTable.bind(this)} >Find a Table</button>
        </div>
        <div id="slots" className="container col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <SlotMaker isClicked={this.state.isClicked} timeSlots={this.state.timeSlots} partySize={this.state.partySize} time={this.state.time} partySizeMax={this.state.partySizeMax} />
        </div>
      </div>
    ) 
  }
}

export default App;

