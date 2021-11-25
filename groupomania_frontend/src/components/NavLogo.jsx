import logo from '../assets/icon.svg';

function Navlogo() {
	return (
		<div className="navbar-brand">
			<img
				src={logo}
				alt="Groupomania logo"
				width="50"
				height="50"
				className="d-inline-block align-text-center"
			/>
			Groupomania
		</div>
	);
}

export default Navlogo;
