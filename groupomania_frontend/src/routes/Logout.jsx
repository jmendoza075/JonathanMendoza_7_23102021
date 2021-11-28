import { useNavigate } from 'react-router-dom';

const Logout = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.clear();

		//window.location.reload();
		navigate('/private/home');
	};

	return (
		<div className="container mt-3">
			<button onClick={handleLogout} type="button" className="btn btn-warning">
				logout
			</button>
		</div>
	);
};

export default Logout;