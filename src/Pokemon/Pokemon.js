import React, { useState } from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';
import './Pokemon.css';

const Pokeball = ({ pokemon }) => {
    const [isOpened, setIsOpened] = useState(false);
    const handleClick = () => {
      setIsOpened(true);
      setTimeout(() => setIsOpened(false), 1000);
    };
    return (
      <div className="pokeball-container">
        <div className={`pokeball ${isOpened ? 'open' : ''}`} onClick={handleClick}>
          <div className="pokeball-top"></div>
          <div className="pokeball-bottom"></div>
          <div className="pokeball-middle"></div>
          {isOpened && <div className="smoke" />}
        </div>
      </div>
    );
  };

export default Pokeball;