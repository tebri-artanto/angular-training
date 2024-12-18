import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  private apiSpecies = "https://pokeapi.co/api/v2/pokemon-species";

  constructor(private http: HttpClient) {}

  async getPokemonList(limit: number = 20) {
    const response = await axios.get(`${this.apiUrl}?limit=${limit}`);
    return response.data.results;
  }

  async getPokemonDetails(url: string) {
    const response = await axios.get(url);
    return response.data;
  }

  async getPokemonByName(name: string){
    const response = await axios.get(`${this.apiUrl}/${name}`);
    return response.data;
  }

  async getPokemonSpecies(name: string){
    const response = await axios.get(`${this.apiSpecies}/${name}`);
    return response.data;
  }

  async getPokemonEvolutionChain(url: string){
    const response = await axios.get(url);
    const chain = response.data.chain;
    return this.parsePokemonChain(chain);
  }

  parsePokemonChain(chain: any, evolutions: any[] = []): any[] {
    // Recursive method to handle more complex evolution chains
    if (!chain) return evolutions;

    evolutions.push({
      name: chain.species.name,
      url: chain.species.url
    });

    if (chain.evolves_to && chain.evolves_to.length > 0) {
      // If multiple evolutions exist, handle them
      return this.parsePokemonChain(chain.evolves_to[0], evolutions);
    }

    return evolutions;
  }

  //coba table

}


