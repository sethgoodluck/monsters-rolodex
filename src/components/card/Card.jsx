import './Card.css';

import React from 'react';

const Card = ({ monster }) => {
	return (
		<div className='card-container'>
			<img src={`https://robohash.org/${monster.id}?set=set2`} alt='monster' />
			<h1>{monster.name}</h1>
		</div>
	);
};

export default Card;
