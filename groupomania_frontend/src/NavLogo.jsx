import logo from './assets/icon.svg';

function Navlogo() {
	return (
		<div className="navbar-brand">
			<img
				src={logo}
				alt="Groupomania logo"
				className="d-inline-block align-text-center"
				height="50"
			/>
		</div>
	);
}

export default Navlogo;
