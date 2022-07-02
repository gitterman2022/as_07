import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = ({design}) => {
  return (
    <NavLink style={design} className={styles.logoText} to="/">Spicy Blog!</NavLink>
  );
};

export default Logo;