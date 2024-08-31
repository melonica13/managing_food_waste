import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaShoppingBag } from 'react-icons/fa';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const response = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data);
        // Fetch order history (simulated for now)
        setOrders([
          { id: 1, date: '2023-08-15', total: 150.00, status: 'Delivered' },
          { id: 2, date: '2023-07-30', total: 75.50, status: 'Processing' },
          { id: 3, date: '2023-07-10', total: 200.00, status: 'Delivered' },
        ]);
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate('/login');
      }
    };
    fetchUserData();
  }, [navigate]);

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <FaUser className="profile-icon" />
          <h1>User Profile</h1>
        </div>
        <div className="user-info">
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Member since: {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
        <div className="order-history">
          <h2><FaShoppingBag /> Order History</h2>
          {orders.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.date}</td>
                    <td>${order.total.toFixed(2)}</td>
                    <td>{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
