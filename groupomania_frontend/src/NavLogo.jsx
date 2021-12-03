import logo from './assets/cropped_logo.png';

function Navlogo() {
	return (
		<div className="navbar-brand">
			<img
				src={logo}
				alt="Groupomania logo"
				className="d-inline-block align-text-center"
				width="200"
			/>
		</div>
	);
}

export default Navlogo;
