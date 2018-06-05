import React from 'react';

class Date extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			date: "",
		}
	}
	render () {
		return (
			<input type="date" id="calendar"></input>
		) 
	}
}

export default Date;

