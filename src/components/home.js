
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import '../css/home.css';
import {Button, FormGroup, FormControl} from 'react-bootstrap';

class Home extends Component {

	render() {
		return (
			<div className="Home">
				<div className="Instructions">
					<h1>Enter a City and State</h1>
					<div className="Input">
						<FormGroup bsSize="large">
	      					<FormControl type="text" placeholder="New York, NY"/>
	    				</FormGroup>
	    			</div>
					<Button bsStyle="success" bsSize="large" >Get Weather</Button>
				</div>
			</div>
		);
	}
}

export default Home;
