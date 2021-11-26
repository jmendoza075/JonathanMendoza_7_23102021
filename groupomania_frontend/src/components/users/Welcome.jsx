import Login from './Login';

const Welcome = ({ setToken }) => {
	return (
		<div className="container mt-3">
			<h1>Bienvenu à Groupomania</h1>
			<div>
				<hr />
				<Login setToken={setToken} />
			</div>{' '}
		</div>
	);
};

export default Welcome;
