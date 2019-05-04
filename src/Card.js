import React from 'react';
import './StarshipCard.css'; 

const Card = ({ name, model, length, crew, manufacturer, hyperdrive_rating, starship_class}) => {
	// curly brackets denote that we're destructuring the properties of Card.js 
	// which are passed down by definition from CardList.js
	return (
		<div className='card tc dib ba br3 pa2 grow bw2 shadow-5 ttc glow'>
			<h2>{name}</h2>
			<p>Model: {model}</p>
			<p>Length: {length}</p>
			<p>Crew: {crew}</p>
			<p>Manufacturer: {manufacturer}</p>
			<p>Hyperdrive Rating: {hyperdrive_rating}</p>
			<p>Starship Class: {starship_class}</p>
		</div>
	);
}

export default Card;

