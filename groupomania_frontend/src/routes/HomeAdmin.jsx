import { Button } from 'react-bootstrap';
const HomeAdmin = () => {
	return (
		<div>
			<h1>ADMIN Home</h1>{' '}
			<Button href={'/private/publications/'} variant="light">
				{' '}
				All Posts
			</Button>{' '}
			<Button href={'/adminOnly/users/'} variant="light">
				{' '}
				All Users
			</Button>{' '}
			<Button href={'/private/comments/'} variant="light">
				{' '}
				All Comments
			</Button>
			<hr />
		</div>
	);
};

export default HomeAdmin;
