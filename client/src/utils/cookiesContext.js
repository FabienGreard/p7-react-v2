import { useState, createContext, useEffect } from "react";

const initialCookieState = null;

export const CookiesContext = createContext(initialCookieState);

export const CookiesProvider = ({ children, cookie = initialCookieState }) => {
  const [cookies, setCookies] = useState(cookie);

  const handleSetCookies = (cookies) => {
    setCookies(cookies);
  };

  useEffect(() => {
    if (document.cookie) setCookies(document.cookie);
  }, []);

  return (
    <CookiesContext.Provider value={{ cookies, setCookies: handleSetCookies }}>{children}</CookiesContext.Provider>
  );
};
