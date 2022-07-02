import React from 'react';
import './Button.css';

const Button = ({text,style,handleLogin}) => {
  return (
    <button onClick={handleLogin} style={style} className="buttonStyle">{text}</button>
  );
};

export default Button;