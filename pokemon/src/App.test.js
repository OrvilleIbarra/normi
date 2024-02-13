global.fetch = require('node-fetch');

import { getPokemonRange, getPokemonType } from './App'; 

describe('PokeAPI Fetcher', () => {
  test('Obtener un rango de Pokémon', async () => {
    const pokemons = await getPokemonRange(1, 10);
    console.log(pokemons);
    expect(pokemons.length).toBe(10);
    pokemons.forEach(pokemon => {
      expect(pokemon.id).toBeLessThanOrEqual(151);
    });
  });

  test('Error al ingresar un parámetro no numérico', async () => {
    await expect(getPokemonRange('a', 10)).rejects.toThrow('Los parámetros deben ser números');
  });

  test('Obtener información de un tipo de Pokémon', async () => {
    const typeInfo = await getPokemonType(1); 
    console.log(typeInfo);
    expect(typeInfo).toHaveProperty('name');
    expect(typeInfo).toHaveProperty('pokemonCount');
    expect(typeof typeInfo.pokemonCount).toBe('number');
  });
});
