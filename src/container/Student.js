import React from 'react';

export default function Student(props) {
	return (
		<div className='student'>
			<div className='left'>
				<h2>{props.name}</h2>
				<p>{props.institute}</p>
			</div>
			<div className='right'>
				<h2>{props.score}</h2>
			</div>
		</div>
	);
}
