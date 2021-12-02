import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Logout = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.clear();

		//window.location.reload();
		navigate('/');
	};
	<Button variant="outline-dark">Dark</Button>;
	return (
		<div>
			<Button variant="outline-dark" size="sm" onClick={handleLogout}>
				Se déconnecter
			</Button>
		</div>
	);
};

export default Logout;
