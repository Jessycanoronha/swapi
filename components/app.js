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

      <HeroImage />
      </div>
    );
  }
}