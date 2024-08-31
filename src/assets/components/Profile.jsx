import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:5000/api/auth/profile', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setUser(response.data);
          setIsLoggedIn(true);
        } catch (error) {
          console.error('Error fetching user data:', error);
          localStorage.removeItem('token');
        }
      }
    };
    fetchUserData();
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUser(null);
    setIsOpen(false);
    window.location.href = 'http://localhost:5173'; // Redirect to homepage
  };

  return (
    <div className="profile-container">
      <button onClick={toggleDropdown} className="profile-button">
        {isLoggedIn ? user?.name || 'Profile' : 'Login / Signup'}
      </button>
      {isOpen && (
        <div className="profile-dropdown">
          {isLoggedIn ? (
            <>
              <button onClick={() => navigate('/profile')}>View Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button onClick={handleLogin}>Login</button>
              <button onClick={handleSignup}>Signup</button>
            </>
          )}
        </div>
      )}
      {isLoggedIn && (
        <div className="logout-section">
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
