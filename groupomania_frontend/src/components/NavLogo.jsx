import logo from '../assets/icon.svg';

function Navlogo() {
	return (
		<div className="navbar-brand">
			<img
				src={logo}
				alt="Grupomania logo"
				width="50"
				height="50"
				className="d-inline-block align-text-center"
			/>
			Grupomania
		</div>
	);
}

export default Navlogo;
