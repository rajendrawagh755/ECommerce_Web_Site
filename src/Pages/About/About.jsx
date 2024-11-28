import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      
      {/* Page Content */}
      <main className="about-content">
        <h1>About Us</h1>
        <p>Welcome to our e-commerce site. We provide the best products and services.</p>
        {/* Add more content for the About page here */}
      </main>
      
      <Footer />
    </div>
  );
}

export default About;
