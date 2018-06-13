import React from 'react';
import date from './date.css';


const Date = (props) => (
  <input value={props.date} onChange={props.dateChange} type="date" className={`${date.calendar}`} required="required"></input>
) 

export default Date;

 