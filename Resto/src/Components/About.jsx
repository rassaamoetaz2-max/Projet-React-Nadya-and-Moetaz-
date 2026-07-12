import React from 'react';
import '../CSS/About.css';

export default function AboutPage() {
  const chefs = [
    { name: 'Chef Nadya', role: 'Head Chef & Owner', image: 'https://unsplash.com' },
    { name: 'Chef Moetaz', role: 'Pastry Chef', image: 'https://unsplash.com' },
  ];

  return (
    <div className="about-container">
      {/* Restaurant Hero Section */}
      <section className="about-hero">
        <h1>Our Story</h1>
        <p>Serving fresh, locally-sourced comfort food since 2015.</p>
      </section>

      {/* Our Philosophy Section */}
      <section className="about-mission">
        <h2>From Farm to Table</h2>
        <p>
          We believe that great food starts with great ingredients. Every dish we serve is made from scratch using fresh produce from local farmers. Whether you are here for a quick lunch or a family celebration, we welcome you to our table.
        </p>
      </section>

      {/* Culinary Team Section */}
      <section className="about-team">
        <h2>Meet Our Chefs</h2>
        <div className="team-grid">
          {chefs.map((chef, index) => (
            <div key={index} className="team-card">
              <img src={chef.image} alt={chef.name} />
              <h3>{chef.name}</h3>
              <p>{chef.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
