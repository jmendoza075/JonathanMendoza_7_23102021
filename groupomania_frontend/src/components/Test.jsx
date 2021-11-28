import { useState } from 'react';

const Test = () => {
	const [counter, setCounter] = useState(0);

	const incrementer = () => {
		setCounter(counter + 1);
		console.log(counter);
	};

	//another test
	const [name, setName] = useState('mario');
	const [age, setAge] = useState(25);

	///// BIG NOTE: if the state is an array eg comments, posts of a single array with one object, then it has to be MAPPED out. Otherwise it will not be shown!!

	const handleClick = () => {
		// name = 'luigi';
		setName('luigi');
		setAge(30);
	};
	return (
		<div className="container mt-3">
			<h1>
				Helo you arrive here because you are not Logged in with good credentials
			</h1>
			<h2>PLEASE LOGIN or SIGNUP</h2>
			<hr />
			<hr />

			<h2>Hello Test Page for State</h2>
			<h3>counter {counter}</h3>
			<button onClick={incrementer}>click</button>

			<p>
				{name} is {age} years old
			</p>
			<button onClick={handleClick}>Click me</button>
		</div>
	);
};

export default Test;
