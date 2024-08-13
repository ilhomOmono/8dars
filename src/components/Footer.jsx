
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h3 style={styles.title}>MORENT</h3>
          <p style={styles.text}>
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>
        <div style={styles.column}>
          <h4 style={styles.subtitle}>About</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>How it works</li>
            <li style={styles.listItem}>Featured</li>
            <li style={styles.listItem}>Partnership</li>
            <li style={styles.listItem}>Business Relation</li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.subtitle}>Community</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Events</li>
            <li style={styles.listItem}>Blog</li>
            <li style={styles.listItem}>Podcast</li>
            <li style={styles.listItem}>Invite a friend</li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.subtitle}>Socials</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Discord</li>
            <li style={styles.listItem}>Instagram</li>
            <li style={styles.listItem}>Twitter</li>
            <li style={styles.listItem}>Facebook</li>
          </ul>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p style={styles.copyText}>©2024 MORENT. All rights reserved</p>
        <ul style={styles.policyList}>
          <li style={styles.policyItem}>Privacy & Policy</li>
          <li style={styles.policyItem}>Terms & Conditions</li>
        </ul>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f3f4f6',
    padding: '40px 20px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '20px', 
  },
  column: {
    flex: '1',
    minWidth: '250px', 
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  text: {
    fontSize: '0.9rem',
    color: '#6b6b6b',
  },
  subtitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    fontSize: '0.9rem',
    color: '#6b6b6b',
    marginBottom: '8px',
    cursor: 'pointer',
  },
  bottomBar: {
    borderTop: '1px solid #e5e7eb',
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  copyText: {
    fontSize: '0.8rem',
    color: '#9ca3af',
    marginBottom: '10px', 
  },
  policyList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  policyItem: {
    fontSize: '0.8rem',
    color: '#9ca3af',
    marginLeft: '20px',
    cursor: 'pointer',
  },
};

export default Footer;
