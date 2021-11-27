import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navlink from './Navlink';
import Home from './routes/home';
import Users from './routes/users';

import Publications from './routes/publications';
import Comments from './routes/comments';

import ListOnePost from './components/ListOnePost';
import ListOneComment from './components/ListOneComment';
import ListOneUser from './components/ListOneUser';

import Welcome from './components/users/Welcome';
import Login from './components/users/Login';
import SignUp from './components/users/SignUp';
import EditUser from './components/users/EditUser';
import NewPost from './components/posts/NewPost';
import EditPost from './components/posts/EditPost';
import NewComment from './components/posts/NewComment';
import EditComment from './components/posts/EditComment';

import useToken from './custom_hook/useToken';

export default function App() {
	const { token, setToken } = useToken();
	axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

	if (!token) {
		return <Login setToken={setToken} />;
	}

	return (
		<div>
			<BrowserRouter>
				<Navlink />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="users" element={<Users />} />
					<Route path="users/:id" element={<ListOneUser />} />
					<Route path="users/edit/:id" element={<EditUser />} />

					<Route path="users/welcome" element={<Welcome />} />
					<Route path="users/signup" element={<SignUp />} />

					<Route path="publications" element={<Publications />} />
					<Route path="publications/:id" element={<ListOnePost />} />
					<Route path="publications/add" element={<NewPost />} />
					<Route path="publications/edit/:id" element={<EditPost />} />

					<Route path="comments" element={<Comments />} />
					<Route path="comments/comment/:id" element={<NewComment />} />
					<Route path="comments/:id" element={<ListOneComment />} />
					<Route path="comments/edit/:id" element={<EditComment />} />

					<Route
						path="*"
						element={
							<main style={{ padding: '1rem', color: 'red' }}>
								<h1>Cette page n'existe pas!</h1>
							</main>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
