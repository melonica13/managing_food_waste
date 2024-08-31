import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios'; 
import Navbar from './assets/components/Navbar';
import HeroSection from './assets/components/HeroSection';
import VisionSection from './assets/components/Vision';
import GetInvolvedSection from './assets/components/Involved';
import Footer from './assets/components/Footer';
import Login from './assets/components/Login';
import Signup from './assets/components/Signup';
import ProfilePage from './assets/components/ProfilePage';
import useSmoothScroll from './hooks/useSmoothScroll';
import './App.css';
import './styles.css';
import TodaysMenuPage from './assets/components/TodaysMenuPage';

const App = () => {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`; 
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  useSmoothScroll();
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <VisionSection />
              <GetInvolvedSection />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/todays-menu" element={<TodaysMenuPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
