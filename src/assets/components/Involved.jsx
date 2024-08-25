import React from 'react';

const GetInvolvedSection = () => {
  return (
    <section id="get-involved" className="get-involved-section">
      <div className="get-involved-container">
        <h2 className="get-involved-title">Get Involved</h2>
        <p className="get-involved-text">
          Join our growing community of food waste warriors and make a difference! Here's how you can get involved:
        </p>
        <ul className="get-involved-list">
          <li>Become a Foodify Partner: If you're a restaurant or food supplier, partner with reduce food waste.</li>
          <li>Volunteer: Help us in our food rescue missions and community outreach programs.</li>
          <li>Spread the Word: Share our mission on social media and with your friends and family.</li>
          <li>Donate: Support our cause with a one-time or recurring donation.</li>
        </ul>
        <div className="button-container">
          <a href="/join" className="join-us-button">Join Us Today</a>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
