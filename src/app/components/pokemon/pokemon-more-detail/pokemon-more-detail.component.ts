import { Component, Input,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../../services/pokemon.service';
@Component({
  selector: 'app-pokemon-more-detail',
  templateUrl: './pokemon-more-detail.component.html',
  styleUrls: ['./pokemon-more-detail.component.css'],
  standalone: false,
})
export class PokemonMoreDetailComponent implements OnInit {
  pokemon: any = null;
  value: number = 1;
  pokemonSpecies: any = null;
  pokemonChain: Array<{ name: string; url: string }> = [];
  // evolutionchain: any = null;
  currentEvo: number = 0;



  // @Input() pokemon: any = null;
  // @Input() theme: 'light' | 'dark' = 'light';

    constructor(
      private route: ActivatedRoute, private pokemonService: PokemonService, private router: Router
    ) {
      'PokemonMoreDetail called'
    }

    async ngOnInit(){
      this.route.paramMap.subscribe(params => {
        const name = params.get('name') || "";
        this.getPokemonByname(name);
      });

    }

    async getPokemonByname(name: string){
      this.pokemon = await this.pokemonService.getPokemonByName(name);
      await this.loadPokemonDetails(name);
    }

    async selectPokemonDetail(name: string) {
      console.log(this.pokemon);
    }

    private async loadPokemonDetails(name: string): Promise<void> {
      this.pokemon = await this.pokemonService.getPokemonByName(name);
      console.log(this.pokemon);
      if(this.pokemon){
        this.pokemonSpecies = await this.pokemonService.getPokemonSpecies(this.pokemon.species.name);
        console.log(this.pokemonSpecies);
        const evolutionChainUrl = this.pokemonSpecies.evolution_chain.url;

      // Use Promise.all to fetch the evolution chain
      this.pokemonChain = await this.pokemonService.getPokemonEvolutionChain(evolutionChainUrl);
        // const evolutionChainUrl = this.pokemonSpecies.evolution_chain.url;
        //   console.log(evolutionChainUrl);
        //   this.pokemonChain = await Promise.all([
        //     await this.pokemonService.getPokemonEvolutionChain(evolutionChainUrl)
        //   ]);
          // console.log(evolutionArray);
          // this.pokemonChain = evolutionArray;
        // if (this.pokemonSpecies?.evolution_chain) {
        //   const evolutionChainUrl = this.pokemonSpecies.evolution_chain.url;
        //   console.log(evolutionChainUrl);
        //   const evolutionChain = await this.pokemonService.getPokemonEvolutionChain(evolutionChainUrl);
        //   const [pokemonChain] = await Promise.all([
        //     await this.pokemonService.getPokemonEvolutionChain(evolutionChainUrl)
        // ]);

        // this.evolutionchain =evolutionChain;
        // console.log(evolutionChain);

      }

    }
    async selectChain(name: string){
      console.log(name);
      // this.selectedPokemon = await this.pokemonService.getPokemonDetails(url);
      this.router.navigate(['/moredetail', name]);
    }

   playAudio(){
    const audio = new Audio(this.pokemon.cries.latest);
    audio.play();
   }



    // async findIndex(index: number){

    // }

  }
