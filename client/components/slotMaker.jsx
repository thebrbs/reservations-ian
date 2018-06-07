import React from 'react';

const time = [
  '5:00 am', '5:30 am', '6:00 am', '6:30 am', '7:00 am',
  '7:30 am', '8:00 am', '8:30 am', '9:00 am', '9:30 am',
  '10:00 am', '10:30 am', '11:00 am', '11:30 am', '12:00pm',
  '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm', '3:00 pm',
  '3:30 pm', '4:00 pm', '4:30 pm','5:00 pm', '5:30 pm',
  '6:00 pm', '6:30 pm', '7:00 pm', '7:30 pm', '8:00 pm',
  '8:30 pm', '9:00 pm', '9:30 pm', '10:00 pm', '10:30 pm',
  '11:00 pm'
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
    let j = idxOfPick;
    if (this.props.clicked === true && this.state.counterClick !== this.props.timeSlots) {
      for (var i = 0; i < timeObjArray.length; i++) {
        notAvail.push(timeObjArray[i].time);
      }
      for (var i = idxOfPick; i < idxOfPick + 5; i++) {
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
      });
      this.state.counterClick = this.props.timeSlots;
    }
    return (
      this.state.timeAvail.map((entry, id)=> (
          <button value={entry} key={id}>{entry}</button>
        )
      )
    )
  }
}

export default SlotMaker;

