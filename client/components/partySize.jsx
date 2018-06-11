import React from 'react';

const partySize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const PartySize =(props) => {
  return (
    <div> 
      <div id="partyTitle">Party Size</div>
        <span id='arrow' className="glyphicon glyphicon-chevron-down"></span>
        <span id="for">For</span>
        <div id="partyD">
          <select onChange={props.partyChange} className="opts" id="PartySize">
          {partySize.map((size, id) => (
            <option value={size} key={id} >&#160;&#160;&#160;&#160;&#160;{size}</option>
            )
          )}
          </select>   
        </div>
    </div> 
  )
}

export default PartySize;
