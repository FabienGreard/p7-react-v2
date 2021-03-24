import { useState, createContext } from 'react';

const initialCookieState = null;

export const CookiesContext = createContext(initialCookieState);

export const CookiesProvider = ({ children, cookie = initialCookieState }) => {
	const [cookies, setCookies] = useState(cookie);

	const handleSetCookies = (cookies) => {
		console.log(cookies);
		setCookies(cookies);
	};

	return (
		<CookiesContext.Provider value={{ cookies, setCookies: handleSetCookies }}>
			{children}
		</CookiesContext.Provider>
	);
};
