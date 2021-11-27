import axios from 'axios';
import useToken from '../custom_hook/useToken';
import Login from './Login';
import Publications from './publications';

const Home = () => {
	const { token, setToken } = useToken();
	axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

	//if (!token) {
	//	return <Login setToken={setToken} />;
	//}

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
