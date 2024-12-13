import { PokemonService } from './../../services/pokemon.service';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, NgModule } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  standalone: false,
})

export class PokemonListComponent implements OnInit, OnChanges, OnDestroy {
  pokemonList: any[] = [];
  filteredPokemon: any[] = [];
  paginatedPokemon: any[] = [];
  selectedPokemon: any = null;
  theme: 'light' | 'dark' = 'light';
  filter: string = '';
  selectedElement: string = '';
  elements: string[] = ['fire', 'water', 'grass', 'electric', 'ice', 'rock'];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 0;

  constructor(private pokemonService: PokemonService) {
    console.log('PokemonListComponent: Constructor called');
  }

  async ngOnInit() {
    console.log('PokemonListComponent: ngOnInit called');
    await this.fetchPokemon();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('PokemonListComponent: ngOnChanges called', changes);
  }

  ngOnDestroy() {
    console.log('PokemonListComponent: ngOnDestroy called');
  }

  async fetchPokemon() {
    const rawPokemonList = await this.pokemonService.getPokemonList(150); // Fetch first 150 Pokémon
    this.pokemonList = await Promise.all(
      rawPokemonList.map(async (pokemon: any) => {
        const details = await this.pokemonService.getPokemonDetails(
          pokemon.url
        );
        return {
          name: pokemon.name,
          url: pokemon.url,
          image: details.sprites.front_default,
          element: details.types[0]?.type?.name, // Assuming first type as element
        };
      })
    );
    this.filteredPokemon = this.pokemonList;
    this.updatePagination();
  }



  applyFilter() {
    this.filteredPokemon = this.pokemonList.filter((pokemon) => {
      const matchesName = pokemon.name
        .toLowerCase()
        .includes(this.filter.toLowerCase());
      const matchesElement =
        !this.selectedElement || pokemon.element === this.selectedElement;
      return matchesName && matchesElement;
    });

    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(
      this.filteredPokemon.length / this.itemsPerPage
    );
    this.paginate();
  }

  paginate() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedPokemon = this.filteredPokemon.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginate();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

  async selectPokemon(url: string) {
    this.selectedPokemon = await this.pokemonService.getPokemonDetails(url);
    console.log(this.selectedPokemon);
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }
}
