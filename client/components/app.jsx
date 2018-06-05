import React from 'react';
import axios from 'axios';
import PartySize from './partySize.jsx';
import Date from './date.jsx';
import Time from './time.jsx';

class App extends React.Component { 
	constructor(props) {
		super(props);
		this.state = {
			restaurantId: '',
		}
	}
	getInfo () {
		axios.get('/restaurant/:restaurant_id')
			.then(function(reponse) {
				console.log(response);
				this.setState({
					restaurantId: response
				})
			}); 	
	}
	render () {
		return (
			<div id="appBox">
				<div id="reserveBox">
					<h3 id="title">Make a reservation</h3>
					<div id="partySize">
						<PartySize />
					</div>
				</div>
				<div id="headers">
					<div id="dateTitle">Date</div>
					<div id="timeTitle">Time</div>
					<Date />
					<Time />
				</div>
			</div>
		) 
	}
}

export default App;
