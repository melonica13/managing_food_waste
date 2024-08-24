import React, { useState } from 'react';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogin = () => {
    //login logic here
    setIsLoggedIn(true);
    setIsOpen(false);
  };

  const handleSignup = () => {
    //Signup logic here
    setIsLoggedIn(true);
    setIsOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsOpen(false);
  };

  return (
    <div className="profile-container">
      <button onClick={toggleDropdown} className="profile-button">
        {isLoggedIn ? 'Profile' : 'Login / Signup'}
      </button>
      {isOpen && (
        <div className="profile-dropdown">
          {isLoggedIn ? (
            <>
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
    </div>
  );
};

export default Profile;
