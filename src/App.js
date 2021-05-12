import React, { useState } from 'react';
import './App.css';
import Student from './container/Student';

function App() {
	const [students, setStudents] = useState([
		{
			name: 'Muhammad Fahad Alam',
			institute: 'Neduet',
			score: 239,
		},
		{
			name: 'Amjad Ali',
			institute: 'KU',
			score: 230,
		},
		{
			name: 'Saad Umair',
			institute: 'SSUET',
			score: 220,
		},
	]);

	const studentItems = students.map((v, i) => {
		return (
			<Student
				key={i}
				name={v.name}
				institute={v.institute}
				score={v.score}
			/>
		);
	});

	return (
		<div className='App'>
			<div className='container'>
				<h1>Leaders Board</h1>
				<div className='top'>
					<h3>Name</h3>
					<h3>Score</h3>
				</div>
				<hr />
				{studentItems}
			</div>
		</div>
	);
}

export default App;
