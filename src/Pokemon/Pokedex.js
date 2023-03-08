import { useState } from 'react';
import "./Pokemon.css";

const Pokedex = () => {
    const [pokemon, setPokemon] = useState(null);
  
    const fetchPokemon = async (id) => {
            
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
        <div className="pokedex-container">
            <div className="pokedex">
            <div className="title-container">
                <img src="https://icon-library.com/images/pokedex-icon/pokedex-icon-19.jpg" width="45" />
                <h1 className="title">Pokedex</h1>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
                const id = e.target.elements.id.value;
                fetchPokemon(id);
            }}>
            <input type="number" name="id" placeholder="Enter Pokemon ID" />
            <button type="submit">Search</button>
            </form>
            {pokemon && (
                <div className="pokemon">
                    <h2 style={{textTransform: 'capitalize'}}>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
                    <ul className="stats">
                    {pokemon.stats.map((stat) => (
                        <li key={stat.stat.name}>
                        <span>{stat.stat.name}:</span> {stat.base_stat}
                        </li>
                    ))}
                    </ul>
                </div>
            )}
        </div>
      </div>
    );
  };
  
  export default Pokedex;