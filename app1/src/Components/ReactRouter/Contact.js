import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate()
    const handleBackward = () => {
      navigate(-1);
    };
  const location = useLocation()
  return (
    <div>
      <h1>This is Contact</h1>
      <button onClick={handleBackward}>Backward</button>
      <h3>{location.pathname}</h3>
    </div>
  );
}
