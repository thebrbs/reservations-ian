import React from 'react';

let Date = (props) => {
  return (
    <input onChange={props.dateChange} type="date" id="calendar" value="2018-05-31" ></input>
  ) 
}

export default Date;

