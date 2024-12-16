import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
  standalone: false
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon: any = null;
  @Input() theme: 'light' | 'dark' = 'light';


  constructor(private pokemonService: PokemonService,private router: Router) {
    console.log(this.pokemon);
      console.log('PokemonDetailComponent: Constructor called');
    }

  ngOnInit() {
  }

  selectedPokemon: any = null;
  async selectPokemon(name: string) {
    console.log(name);
    // this.selectedPokemon = await this.pokemonService.getPokemonDetails(url);
    this.router.navigate(['/moredetail', name]);
    console.log(this.selectedPokemon);
  }


}

