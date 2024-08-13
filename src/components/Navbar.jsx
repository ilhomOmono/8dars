// src/components/Navbar.js
import React from 'react';
import navlogo from "../assets/vanlogo.png"

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.logo}>MORENT</div>
        <div style={styles.links}>
          <a href="#home" style={styles.link}>Home</a>
          <a href="#favorites" style={styles.link}>Favorites</a>
          <a href="#profile" style={styles.link}>Profile</a>
        </div>
        <div style={styles.user}>
          <img src={navlogo} alt="User" style={styles.userImage} />
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: 'white',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1d4ed8',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: '#4b5563',
    textDecoration: 'none',
    fontWeight: '500',
  },
  user: {
    display: 'flex',
    gap: '1rem',
  },
  userImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
};

export default Navbar;
