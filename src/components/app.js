import React, { Component } from 'react';
import HeroImage from './hero-image.js';	

export default class App extends Component {

componentDidMount() {
	var screenWidth = window.screen.width;
	var mainImage = document.querySelector('.image1');
	if(screenWidth>620) {
	    mainImage.src="src/assets/starwars2.png";
	}
}

  render() {
    return (
      <div className="app-main">

<img className="menu-icon" src="src/assets/PowderBlueMenuIcon.png" alt="Menu icon" />
		<div className="menu-body-div">
			<div className="english-menu">
				english stuff
			</div>
			<div className="aurebesh-menu">
				aurebesh stuff
			</div>
		</div>
		{this.props.children}
      </div>
    );
  }
}