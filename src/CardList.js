import React from 'react';
import Card from './Card';

const CardList = ({starships}) => {
	return (
		<div>
			{
				starships.map((starship,i)=>{
					return (
						<Card 
							key={i}
							name={starships[i].name} 
							model={starships[i].model} 
							length={starships[i].length} 
							crew={starships[i].crew} 
							manufacturer={starships[i].manufacturer} 
							hyperdrive_rating={starships[i].hyperdrive_rating} 
							starship_class={starships[i].starship_class} 
							/>
					);
				})
			}
		</div>
	);
}


export default CardList;