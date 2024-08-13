// src/components/CarCard.js
import React from 'react';
import oqca from "../assets/oqcar.png"

const CarCard = ({ car }) => {
  return (
    <div style={styles.card}>
      <img src={oqca} alt={car.name} style={styles.image} />
      <h3 style={styles.name}>{car.name}</h3>
      <p style={styles.type}>{car.type}</p>
      <div style={styles.details}>
        <span>{car.fuel}90L</span>
        <span>{car.transmission}Manual</span>
        <span>{car.seats} People</span>
      </div>
      <div style={styles.price}>
        <span style={styles.pricePerDay}>${car.price}/day</span>
        {car.discountPrice && <span style={styles.discountPrice}>${car.discountPrice}</span>}
      </div>
      <button style={styles.button}>Rent Now</button>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '15px',
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  type: {
    fontSize: '0.9rem',
    color: '#6b6b6b',
    marginBottom: '15px',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '0.8rem',
    color: '#6b6b6b',
    marginBottom: '15px',
  },
  price: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15px',
  },
  pricePerDay: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#1e1e1e',
    marginRight: '10px',
  },
  discountPrice: {
    fontSize: '1rem',
    color: '#6b6b6b',
    textDecoration: 'line-through',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#3b82f6',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CarCard;

