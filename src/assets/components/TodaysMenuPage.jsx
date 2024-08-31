import React from 'react';
import '../../assets/TodaysMenuPage.css';

const dishes = [
  {
    id: 1,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon, lemon-herb marinade, served with roasted vegetables",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    name: "Vegetarian Buddha Bowl",
    description: "Quinoa, avocado, roasted chickpeas, mixed greens, and tahini dressing",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    name: "Spicy Chicken Tacos",
    description: "Grilled chicken, homemade salsa, guacamole, and sour cream in soft corn tortillas",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 4,
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomatoes, and basil on a thin, crispy crust",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 5,
    name: "Stir Fry",
    description: "Tender strips with mixed vegetables in a savory sauce, served over rice",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "Rich chocolate cake with a molten center, served with vanilla ice cream",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const TodaysMenuPage = () => {
  return (
    <div className="todays-menu-container">
      <h1 className="todays-menu-title">Today's Menu</h1>
      <div className="dishes-grid">
        {dishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            <img src={dish.image} alt={dish.name} className="dish-image" />
            <div className="dish-info">
              <h2 className="dish-name">{dish.name}</h2>
              <p className="dish-description">{dish.description}</p>
              <p className="dish-price">${dish.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysMenuPage;