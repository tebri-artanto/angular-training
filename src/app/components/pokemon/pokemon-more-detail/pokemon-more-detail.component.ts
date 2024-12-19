import { Component, Input,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../../services/pokemon.service';
import { MessageService } from 'primeng/api';
interface PokemonEvolution {
  name: string;
  url: string;
  image?: string;
}

@Component({
  selector: 'app-pokemon-more-detail',
  templateUrl: './pokemon-more-detail.component.html',
  styleUrls: ['./pokemon-more-detail.component.css'],
  standalone: false,
})
export class PokemonMoreDetailComponent implements OnInit {
  pokemon: any;
  pokemonSpecies: any;
  pokemonEvolutions: PokemonEvolution[] = [];

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name') || "";
      if (name) {
        this.loadPokemonDetails(name);
      }
    });

  }

  async loadPokemonDetails(name: string): Promise<void> {
    try {
      this.pokemon = await this.pokemonService.getPokemonByName(name);
      this.pokemonSpecies = await this.pokemonService.getPokemonSpecies(name);

      const evolutionChainUrl = this.pokemonSpecies.evolution_chain.url;
      const evolutionChain = await this.pokemonService.getPokemonEvolutionChain(evolutionChainUrl);

      // Fetch images for each evolution
      this.pokemonEvolutions = await Promise.all(
        evolutionChain.map(async (evo) => {
          const details = await this.pokemonService.getPokemonByName(evo.name);
          return {
            ...evo,
            image: details.sprites.front_default
          };
        })
      );
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to load Pokemon details'
      });
    }
  }

  navigateToEvolution(name: string) {
    this.router.navigate(['/pokemon-detail', name]);
  }

  playAudio() {
    if (this.pokemon?.cries?.latest) {
      const audio = new Audio(this.pokemon.cries.latest);
      audio.play().catch(error => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Audio',
          detail: 'Could not play Pokemon cry'
        });
      });
    }
  }

  getStatColor(statValue: number): string {
    if (statValue > 80) return 'success';
    if (statValue > 50) return 'warning';
    return 'danger';
  }


  //form
  selectedOption: string = "";
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  selectedCity: PhoneCode | undefined;
  cities: PhoneCode[] = [
    { name: 'US', code: '+1' },
    { name: 'IDR', code: '+62' },
  ];

  selectedBuy: any = null;

  async selectBuy(name: string) {
    this.selectedBuy = name;
    console.log(this.selectedBuy);
  }

}

interface PhoneCode {
  name: string;
  code: string;
}
