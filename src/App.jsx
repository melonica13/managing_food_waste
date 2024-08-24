import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import HeroSection from './assets/components/HeroSection';
import VisionSection from './assets/components/Vision';
import GetInvolvedSection from './assets/components/Involved';
import Footer from './assets/components/Footer';
import Login from './assets/components/Login';
import useSmoothScroll from './hooks/useSmoothScroll';
import './App.css';
import './styles.css';
import Signup from './assets/components/Signup';

const App = () => {
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
