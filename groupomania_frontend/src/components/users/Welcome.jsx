import SignUp from './SignUp';
import Login from './Login';
const Welcome = () => {
	return (
		<div className="container mt-3">
			<h1>Bienvenu à Groupomania</h1>
			<div>
				<SignUp />
			</div>
			<hr />
			<div>
				<Login />
			</div>
		</div>
	);
};

export default Welcome;
