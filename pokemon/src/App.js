import React from 'react';

export const getPokemonRange = async (start, end = start + 9) => {
  if (isNaN(start) || isNaN(end)) {
    throw new Error('Los parámetros deben ser números');
  }
  const limit = Math.min(20, end - start + 1, 151 - start + 1);
  const promises = [];
  for (let i = start; i < start + limit; i++) {
    promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
  }
  return Promise.all(promises);
};

export const getPokemonType = async (typeId) => {
  if (isNaN(typeId)) {
    throw new Error('El parámetro debe ser un número');
  }
  const response = await fetch(`https://pokeapi.co/api/v2/type/${typeId}`);
  const data = await response.json();
  return {
    name: data.name,
    pokemonCount: data.pokemon.length
  };
};

function App() {
  return (
    <div>
      <h1>PokeAPI Fetcher</h1>
      {/**/}
    </div>
  );
}

export default App;
