import useToken from './custom_hook/useToken';
import Welcome from './routes/Welcome';
import Home from './routes/home';
const RootPage = () => {
	const { token, setToken } = useToken();

	if (!token) {
		return <Welcome setToken={setToken} />;
	}

	return <Home />;
};

export default RootPage;
