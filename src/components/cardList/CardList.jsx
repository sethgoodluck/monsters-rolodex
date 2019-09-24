import './CardList.css';

import Card from 'components/card';
import React from 'react';

const CardList = props => {
	return (
		<div className='card-list'>
			{props.monsters.map(monster => (
				<Card key={monster.id} monster={monster} />
			))}
		</div>
	);
};

export default CardList;
