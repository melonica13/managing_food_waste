import React, { useState } from 'react';
const TodaysMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Vegetable Stir-Fry",
    "Grain Bowl",
    "Sustainable Fish Tacos",
    "Produce Salad",
    "Soup of the Day"
  ];

  return (
    <div className="todays-menu-container">
      <button
        className="todays-menu-button"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        Today's Menu
      </button>
      {isOpen && (
        <div 
          className="todays-menu-dropdown"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <h3>Today's Specials:</h3>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodaysMenu;
