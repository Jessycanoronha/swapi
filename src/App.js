import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
  	super();
  	this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
  	const englishMenu = document.querySelector('.english-menu');
  	const aurebeshMenu = document.querySelector('.aurebesh-menu');

		if(!englishMenu.style.display) {
  		englishMenu.style.display = 'none';
  	}

		englishMenu.style.display ==='none' ? englishMenu.style.display = 'block' : englishMenu.style.display = 'none';
  	console.log(window.innerWidth);
  	if(window.innerWidth > 620) {
  	if(!aurebeshMenu.style.display) {
  		aurebeshMenu.style.display = 'none';
  	}
  		aurebeshMenu.style.display === 'none' ? aurebeshMenu.style.display = 'block' : aurebeshMenu.style.display = 'none';
  	}
  }

  render() {
    return (
      <div className="app-main">

      	<img
      	className="menu-icon" onClick={this.openMenu}
      	src="src/assets/PowderBlueMenuIcon.png" alt="Menu icon"
      	/>
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