import React, { Component } from 'react';
// import '../css/Detail.css';

class Detail extends Component {
	convert(temp) {
        console.log(temp);
		return Math.round((temp - 273.15) * 9/5 + 32)
	}
	render() {
        console.log(this.props);
		return (
			<div className="Detail">
				<h3 className="Date">{this.props.location.state.date}</h3>
				<h2>{this.props.location.state.city}</h2>
				<h3> {this.props.location.state.data.weather[0].description} </h3>
				<h2>min temp: {this.convert(this.props.location.state.data.main.temp_min)}F</h2>
				<h2>max temp: {this.convert(this.props.location.state.data.main.temp_max)}F</h2>
				<h2>humidity: {this.props.location.state.data.main.humidity}</h2>
			</div>
		)
	}
}

export default Detail;
