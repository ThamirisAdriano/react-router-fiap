import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TalkDetails() {
  let { id } = useParams();
  let navigate = useNavigate();

  return (
    <div>
      Detalhes da Palestra ID: {id}
      <br />
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}

export default TalkDetails;


