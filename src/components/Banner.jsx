// src/components/Banner.js
import React from 'react';
import oqcar from "../assets/oqcar.png"

const Banner = () => {
  return (
    <div style={styles.bannerContainer}>
      <div style={styles.banner}>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>The Best Platform for Car Rental</h1>
          <p style={styles.description}>
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
          <button style={styles.button}>Rental Car</button>
        </div>
        <img
          src={oqcar}
          alt="Car"
          style={styles.image}
        />
      </div>
      <div style={styles.banner}>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>Easy way to rent a car at a low price</h1>
          <p style={styles.description}>
            Providing cheap car rental services and safe and comfortable facilities.
          </p>
          <button style={styles.button}>Rental Car</button>
        </div>
        <img
          src={oqcar}
          alt="Car"
          style={styles.image}
        />
      </div>
      <div style={styles.searchContainer}>
        <div style={styles.searchBox}>
          <div style={styles.radioContainer}>
            <input type="radio" name="rentType" id="pickUp" defaultChecked />
            <label htmlFor="pickUp">Pick - Up</label>
          </div>
          <select style={styles.select}>
            <option>Select your city</option>
          </select>
          <select style={styles.select}>
            <option>Select your date</option>
          </select>
          <select style={styles.select}>
            <option>Select your time</option>
          </select>
        </div>
        <div style={styles.iconContainer}>
          <button style={styles.swapButton}>&#x21c5;</button>
        </div>
        <div style={styles.searchBox}>
          <div style={styles.radioContainer}>
            <input type="radio" name="rentType" id="dropOff" />
            <label htmlFor="dropOff">Drop - Off</label>
          </div>
          <select style={styles.select}>
            <option>Select your city</option>
          </select>
          <select style={styles.select}>
            <option>Select your date</option>
          </select>
          <select style={styles.select}>
            <option>Select your time</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const styles = {
  bannerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    gap: '20px',
  },
  banner: {
    backgroundColor: '#f3f4f6',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '600px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '0.9rem',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#1d4ed8',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  image: {
    width: '150px',
    height: 'auto',
    objectFit: 'contain',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '600px',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    gap: '10px',
  },
  radioContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  select: {
    padding: '10px',
    border: '1px solid #e5e7eb',
    borderRadius: '5px',
    backgroundColor: '#f9fafb',
    cursor: 'pointer',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
  },
  swapButton: {
    backgroundColor: '#1d4ed8',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.2rem',
  },
};

export default Banner;
