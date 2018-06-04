import React from 'react';

class PartySize extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			month: ""
		}
	}
	render () {
		return (
			<div>Party Size Renders</div>
		)
	}
}

export default PartySize;