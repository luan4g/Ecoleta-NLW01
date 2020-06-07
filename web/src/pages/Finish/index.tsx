import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiRepeat } from 'react-icons/fi';

import './styles.css';

const Finish = () => {
  return (
    <div id="page-finish">
      <div className="content">
        <FiCheckCircle />    
        <h1>Cadastro Concluído</h1>
        <Link to="/points">
          <span>
            <FiRepeat />
          </span>
          <strong>Cadastrar novo ponto</strong>
        </Link>
      </div>
    </div>
  );
}

export default Finish;