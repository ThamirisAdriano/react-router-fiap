import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutPage() {
  let navigate = useNavigate();

  return (
    <div>
      About Page: Saiba mais sobre nós.
      <br />
      <button onClick={() => navigate('/contact')}>Ir para Contato</button>
    </div>
  );
}

export default AboutPage;
