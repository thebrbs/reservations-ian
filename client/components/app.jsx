import React from 'react';
import axios from 'axios';
import PartySize from './partySize.jsx';

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
				<div id="dateSelect">
					<div id="date">

					</div>
				</div>
			</div>
		) 
	}
}

export default App;