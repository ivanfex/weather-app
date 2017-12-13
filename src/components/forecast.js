import React, { Component } from 'react';
import WeatherFetcher from '../utils/WeatherFetcher';
import {Grid, Row} from 'react-bootstrap';
import DayWeather from './DayWeather';

//Require moment to create dates for the forecast.
import moment from 'moment'

class Forecast extends Component {
  constructor() {
		super();
		this.state = {
			loaded: false
		}
	}

// remember that the below function only runs once;
// when the page renders to the DOM.
  componentDidMount() {
		WeatherFetcher.fetchFiveDayWeather(this.props.routeParams.city)
			.then((data) => this.setState({fiveDayWeather: data.data, loaded: true}));
	}
  //while you're on this component and any new city is called
  // in your navbar, the function below will run. This funciton
  // is constantly looking for any new props that are being sent
  // to this component.
  componentWillReceiveProps(nextProps) {
    // nextProps are the most current props that are being passed
    // to this component. Below we are making an api call using
    // the users new city and setting the fiveDayWather to the
    // new data for the new city.
		WeatherFetcher.fetchFiveDayWeather(nextProps.routeParams.city)
			.then((data) => this.setState({fiveDayWeather: data.data, loaded: true}));
	}

  render(){
    // Our Api doesn't give us the dates of the forecast so
    // we will be using the javascript parser moment().
    // installation and usage can be found here: https://momentjs.com/
    let weathers = this.state.loaded && this.state.fiveDayWeather.list.map((w, i) =>
			<DayWeather
        date={moment().add(i, 'day').format('LL')}
				key={i}
				city={this.state.fiveDayWeather.city.name}
				data={w} />
		)

    return(
      this.state.loaded
    			?
    				<div className="Forecast">
    					<h1>{this.state.fiveDayWeather.city.name}</h1>
    					<h2>Select a Day</h2>
    					<Grid>
    					    <Row>
    							{weathers[0]}
    							{weathers[1]}
    							{weathers[2]}
    							{weathers[3]}
    					    </Row>
    					</Grid>
    					<Grid>
    						<Row>
    							{weathers[4]}
    						</Row>
    					</Grid>
    				</div>
    			:
    				<div className="Forecast"><h1>Loading</h1></div>
    )
  }

}

export default Forecast;
