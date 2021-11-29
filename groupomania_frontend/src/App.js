import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navlink from './Navlink';
import Home from './routes/home';
import Users from './routes/users';

import Publications from './routes/publications';
import Comments from './routes/comments';

import ListOnePost from './components/ListOnePost';
import ListOneComment from './components/ListOneComment';
import ListOneUser from './components/ListOneUser';

import Login from './routes/Login';
import SignUp from './routes/SignUp';

import EditUser from './components/users/EditUser';
import NewPost from './components/posts/NewPost';
import EditPost from './components/posts/EditPost';
import NewComment from './components/posts/NewComment';
import EditComment from './components/posts/EditComment';
import PrivateOutlet from './routes/PrivateOutlet';
import Test from './components/Test';
import Welcome from './routes/Welcome';

export default function App() {
	return (
		<div>
			<BrowserRouter>
				<Navlink />
				<Routes>
					<Route path="/" exact element={<Welcome />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/test" element={<Test />} />

					<Route path="/private" element={<PrivateOutlet />}>
						<Route path="home" element={<Home />} />
						<Route path="users" element={<Users />} />

						<Route path="users/:id" element={<ListOneUser />} />
						<Route path="users/edit/:id" element={<EditUser />} />

						<Route path="publications" element={<Publications />} />
						<Route path="publications/:id" element={<ListOnePost />} />
						<Route path="publications/add" element={<NewPost />} />
						<Route path="publications/edit/:id" element={<EditPost />} />

						<Route path="comments" element={<Comments />} />
						<Route path="comments/comment/:id" element={<NewComment />} />
						<Route path="comments/:id" element={<ListOneComment />} />
						<Route path="comments/edit/:id" element={<EditComment />} />
					</Route>

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
