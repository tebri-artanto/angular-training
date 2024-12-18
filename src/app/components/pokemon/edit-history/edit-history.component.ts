import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from '../../../services/pokemon.service';
import { MessageService } from 'primeng/api';
import { RealtimeDatabaseService } from '../../../services/realtime-database.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-history',
  templateUrl: './edit-history.component.html',
  styleUrls: ['./edit-history.component.css'],
  standalone:false
})
export class EditHistoryComponent implements OnInit {

    pokemon: any = null;
    pokemonEvolutions: PokemonEvolution[] = [];

    selectedOption: string = '';
    visible: boolean = false;
    selectedCode: PhoneCode | undefined;
    pokemonSpecies: any;
    evolutionChain: [] = [];
    pokemonChain: Array<{ name: string; url: string }> = [];
    history: any;
    pokemonToBuy: any[] = [];
    historyId: string = '';


    phoneCode: PhoneCode[] = [
      { name: 'US', code: '+1' },
      { name: 'IDR', code: '+62' },
    ];
    buyOption: string = '';

    constructor(
      private fb: FormBuilder,
      private pokemonService: PokemonService,
      private messageService: MessageService,
      private realtimeDatabase: RealtimeDatabaseService,
          private route: ActivatedRoute,
          private router: Router,
    ) {}

    async loadHistoryDetails(id: string): Promise<void> {
      try {
        this.history= await this.realtimeDatabase.getFormSubmission(id);
        console.log(this.history);
        this.historyId = this.history.id;


        if(this.history.buyOption){
          this.buyOption = this.history.buyOption;

        }
        if (this.history.pokemonToBuy && Array.isArray(this.history.pokemonToBuy)) {
          console.log(this.pokemonToBuy)
          this.pokemonToBuy = await Promise.all(
            this.history.pokemonToBuy.map(async (pokemonName: string) => {
              console.log(this.pokemonService.getPokemonByName(pokemonName));
              return this.pokemonService.getPokemonByName(pokemonName);
            })
          );
        }
        this.historyForm.patchValue(this.history);
        // if(this.buyOption == "all"){
          console.log(this.pokemonToBuy)
        //   const response = this.loadPokemonDetails(this.pokemonToBuy[0]);
        //   console.log(response);
        // }
      } catch (error) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to load Pokemon details',
        });
      }
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
    getOption() {
      console.log(this.selectedOption);

      return this.buyOption;
    }

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        const id = params.get('id') || "";
        if (id) {
          this.loadHistoryDetails(id);
        }
      });
      console.log(this.history);
      this.loadHistoryDetails(this.history);



    }
    showDialog() {
      this.visible = true;
    }
    historyForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl(''),
      phoneCountryCode: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
    });
    

    onSubmit() {
      console.log('Form Data:', this.historyForm.value);
      // if (this.buyForm.valid) {
      console.log('Form Data:', this.historyForm.value);
      console.log(this.selectedOption);

        const payload = {
          ...this.historyForm.value,
          id: this.historyId,
          buyOption: this.buyOption,
          pokemonToBuy: this.pokemonToBuy.map((pokemon) => pokemon.name),
        };
        console.log(payload);
        console.log(this.historyForm);
        const response = this.realtimeDatabase.updateFormSubmission(this.historyId ,payload);
        console.log(response);


      // }
    }




  }

  interface PhoneCode {
    name: string;
    code: string;
  }
  interface BuyOptions {
    value: string;
    label: string;
  }

  interface PokemonEvolution {
    name: string;
    url: string;
    image?: string;
  }