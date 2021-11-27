import useToken from '../custom_hook/useToken';
import Welcome from '../routes/Welcome';

const RootPage = () => {
	const { token, setToken } = useToken();

	if (!token) {
		return <Welcome setToken={setToken} />;
	}

	return <h1>This is the / ROOT</h1>;
};

export default RootPage;
