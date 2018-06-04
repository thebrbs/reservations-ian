import React from 'react';
import axios from 'axios';

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
			<div> App renders </div>
		) 
	}
}

export default App;