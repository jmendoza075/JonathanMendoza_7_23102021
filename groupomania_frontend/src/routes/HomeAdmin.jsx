import { Button } from 'react-bootstrap';
const HomeAdmin = () => {
	return (
		<div className="container mt-3">
			<h1>ADMIN Home</h1>{' '}
			<Button href={'/private/publications/'} variant="btn btn-primary">
				{' '}
				All Posts
			</Button>
			<Button href={'/private/users/'} variant="btn btn-primary">
				{' '}
				All Users
			</Button>
			<Button href={'/private/comments/'} variant="btn btn-primary">
				{' '}
				All Comments
			</Button>
			<hr />
		</div>
	);
};

export default HomeAdmin;
