import GlobalStyle from './globalStyles';
import { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';
import Home from './pages/HomePage/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NewPost from './pages/NewPost/NewPost';
import Profile from './pages/Profile/Profile';

import { CookiesProvider, CookiesContext } from './utils/cookiesContext';

const useConnected = (cookies) => {
	const [[user, token], setConnectedData] = useState([undefined, undefined]);

	const parsedCookie = (cookies, index) =>
		cookies.split(';').map((cookie) => cookie.split('=')[1]);

	useEffect(() => {
		if (!cookies) return;
		console.log(cookies);
		setConnectedData(parsedCookie(cookies));
	}, [cookies]);

	return [user, user, token];
};

const Layout = () => {
	const { cookies } = useContext(CookiesContext);

	const [connexion, currentUser, token] = useConnected(cookies);

	return (
		<Router>
			<GlobalStyle />
			<Navbar connected={connexion}></Navbar>
			<Switch>
				<Route
					path="/"
					exact
					component={() => (
						<Home connected={connexion} currentUser={currentUser} />
					)}
				/>
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />

				<Route
					path="/newpost"
					exact
					component={() => <NewPost token={token} currentUser={currentUser} />}
				/>
				<Route
					path="/profile"
					exact
					component={() => <Profile currentUser={currentUser} />}
				/>
			</Switch>
		</Router>
	);
};

function App() {
	return (
		<CookiesProvider>
			<Layout />
		</CookiesProvider>
	);
}

export default App;
