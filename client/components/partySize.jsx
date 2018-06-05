import React from 'react';

var partySize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
class PartySize extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      partySize: "",
    }
  }
  render () {
    return (
      <div>
        <div>Party Size</div>
        <select className="opts" id="PartySize">
          {partySize.map((size, id) => (
            <option value={size} key={id} >{size}</option>
            )
          )}
        </select>
      </div>
    )
  }
}

export default PartySize;