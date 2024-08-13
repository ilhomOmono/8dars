// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

import CarCard from './components/CarCard';
import Footer from './components/Footer';
import CarList from './components/CarList';


const cars = [
  {
    id: 1,
    name: 'Koenigsegg',
    type: 'Super Car',
    price: 99.00,
    image: 'path_to_car_image_1',
  },
  {
    id: 2,
    name: 'Nissan GT-R',
    type: 'Sports Car',
    price: 80.00,
    image: 'path_to_car_image_2',
  },
  {
    id: 3,
    name: 'Rolls-Royce',
    type: 'Luxury Car',
    price: 96.00,
    image: 'path_to_car_image_3',
  },

  {
    id: 4,
    name: 'Koenigsegg',
    type: 'Super Car',
    price: 99.00,
    image: 'path_to_car_image_1',
  },
  {
    id: 5,
    name: 'Nissan GT-R',
    type: 'Sports Car',
    price: 80.00,
    image: 'path_to_car_image_2',
  },
  {
    id: 6,
    name: 'Rolls-Royce',
    type: 'Luxury Car',
    price: 96.00,
    image: 'path_to_car_image_3',
  },

  {
    id: 7,
    name: 'Koenigsegg',
    type: 'Super Car',
    price: 99.00,
    image: 'path_to_car_image_1',
  },
  {
    id: 8,
    name: 'Nissan GT-R',
    type: 'Sports Car',
    price: 80.00,
    image: 'path_to_car_image_2',
  },
  {
    id: 9,
    name: 'Rolls-Royce',
    type: 'Luxury Car',
    price: 96.00,
    image: 'path_to_car_image_3',
  },
];

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
     
      <div style={styles.carList}>
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  carList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    maxWidth: '1200px',
    margin: '2rem auto',
    padding: '0 1rem',
  },
};

export default App;

