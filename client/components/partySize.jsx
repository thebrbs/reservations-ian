import React from 'react';
import pt from './partySize.css';


const partySize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const PartySize =(props) => {
  return (
    <div> 
      <div className={`${pt.partyTitle}`} >Party Size</div>
        <span className={`${pt.arrowptsize} glyphicon glyphicon-chevron-down`}></span>
        <span className={`${pt.for}`}>For</span>
        <div className={`${pt.partyD}`}>
          <select onChange={props.partyChange} className={`${pt.partySelect} ${pt.PartySize}`}>
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
