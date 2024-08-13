// src/components/CarList.js
import React from 'react';
import CarCard from './CarCard';

const CarList = ({ title, cars }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.grid}>
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: '20px 0',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1e1e1e',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
};

export default CarList;
