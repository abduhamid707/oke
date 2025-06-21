import { useState, useEffect } from 'react';

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('is-authenticated');
    setIsAuthenticated(auth === 'true');
  }, []);

  const login = () => {
    localStorage.setItem('is-authenticated', 'true');
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('is-authenticated');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}
