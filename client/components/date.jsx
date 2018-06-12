import React from 'react';

const Date = (props) => (
  <input value={props.date} onChange={props.dateChange} type="date" id="calendar" required="required"></input>
) 

export default Date;

 