import React from 'react';

let Date = (props) => {
  return (
    <input onChange={props.dateChange} type="date" id="calendar"></input>
  ) 
}

export default Date;

