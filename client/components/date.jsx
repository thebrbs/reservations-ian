import React from 'react';

const Date = (props) => (
  <input value={props.date} onChange={props.dateChange} type="date" id="calendar" ></input>
) 

export default Date;

 