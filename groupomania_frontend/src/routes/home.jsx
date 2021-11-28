import useToken from '../custom_hook/useToken';
import Login from './Login';
import Publications from './publications';

const Home = () => {
	const { token, setToken } = useToken();

	if (!token) {
		return <Login />;
	}

	return (
		<div>
			<h1>Hello Im home</h1>
			<hr />
			<Publications />
			<hr />
		</div>
	);
};

export default Home;
