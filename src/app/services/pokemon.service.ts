import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  private apiSpecies = "https://pokeapi.co/api/v2/pokemon-species";
  private apiAudio = "";

  constructor() {
    console.log('PokemonService: Constructor called');
  }

  async getPokemonList(limit: number = 20) {
    const response = await axios.get(`${this.apiUrl}?limit=${limit}`);
    return response.data.results;
  }

  async getPokemonDetails(url: string) {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  }

  async getPokemonByName(name: string){
    const response = await axios.get(`${this.apiUrl}/${name}`);
    console.log(response.data);
    return response.data;
  }

  async getPokemonSpecies(name: string){
    const response = await axios.get(`${this.apiSpecies}/${name}`);
    console.log(response);
    return response.data;
  }

  async getPokemonEvolutionChain(url: string){
    const response = await axios.get(url);
    const chain = response.data.chain;
    console.log(chain);
    return this.parsePokemonChain(chain);
  }

  parsePokemonChain (chain: any){
    const evolutions = [];
    let current = chain;

    while(current){
      evolutions.push({
        name: current.species.name,
        url: current.species.url
      });
      current = current.evolves_to[0];
    }
    return evolutions;

  }

  getAudioLink(url: string){

  }

}

