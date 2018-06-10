import React from 'react';

const time = [
  '5:00 AM', '5:30 AM', '6:00 AM', '6:30 AM', '7:00 AM',
  '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00PM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
  '3:30 PM', '4:00 PM', '4:30 PM','5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM',
  '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM',
  '11:00 PM'
];
class SlotMaker extends React.Component { 
  constructor (props) {
    super(props);
    this.state = {
      timeAvail: [],
    }
  }
  render () {
    let timeAvail = [];
    let notAvail = [];
    let timeObjArray = this.props.timeSlots;
    let idxOfPick = time.findIndex(pick => pick === this.props.time);
    let j = idxOfPick + 1;
    if (this.props.partySizeMax <= this.props.partySize) {
      return (
        <div className="jumbotron"></div>
      )
    }
    if (this.props.clicked === true && this.state.counterClick !== this.props.timeSlots) {
      for (var i = 0; i < timeObjArray.length; i++) {
        notAvail.push(timeObjArray[i].time);
      }
      for (var i = idxOfPick; i < idxOfPick + 6; i++) {
        if (!notAvail.includes(time[i]) && time[i] !== undefined) {
          timeAvail.push(time[i]);
        }
        j--;
        if (!notAvail.includes(time[j]) && time[j] !== undefined) {
          timeAvail.unshift(time[j]);
        }
      }
      this.setState({
        timeAvail: timeAvail,
        counterClick: this.props.timeSlots,
      });
    }
    return (
      this.state.timeAvail.map((entry, id)=> (
          <button id="timeButt" className="btn btn-danger" value={entry} key={id}>{entry}</button>
        )
      )
    )
  }
}

export default SlotMaker;

