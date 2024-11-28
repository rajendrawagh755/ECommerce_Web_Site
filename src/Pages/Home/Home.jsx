import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';


const Home = () => {
  return (
    <div className="home-page">
      <Header />
      
      {/* Page Content */}
      <main className="home-content">
        <h1>Welcome to Our Store!</h1>
        <p>Your one-stop destination for all things amazing.</p>
        {/* Additional homepage content goes here */}
      </main>
      
      <Footer />
    </div>
  );
}

export default Home;
