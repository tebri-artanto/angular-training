import { MessageService } from 'primeng/api';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PokemonService } from '../../../services/pokemon.service';
import { RealtimeDatabaseService } from '../../../services/realtime-database.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartItem } from '../../../state/cart/cart.state';
import { Store } from '@ngrx/store';
import { selectCartItems } from '../../../state/cart/cart.selector';

interface PokemonEvolution {
  name: string;
  url: string;
  image?: string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  standalone: false
})

export class CheckoutComponent  implements OnInit {

    pokemon: any = null;
    pokemonEvolutions: PokemonEvolution[] = [];
     cancel = new EventEmitter<void>();
    confirm = new EventEmitter<void>();
  selectedOption: string = '';
  visible: boolean = false;
  selectedCode: PhoneCode | undefined;
  pokemonSpecies: any;
  evolutionChain: [] = [];
  pokemonChain: Array<{ name: string; url: string }> = [];

  cartItems$: Observable<CartItem[]>;
  cartItems: CartItem[] = [];
  formSubmitted = false;
  evolutionOptions: Record<string, any[]> = {};
  displayedPokemons: any[][] = [];

  phoneCode: PhoneCode[] = [
    { name: 'US', code: '+1' },
    { name: 'IDR', code: '+62' },
  ];
  buyOption: BuyOptions[] = [
    { value: 'one', label: 'Buy One' },
    { value: 'all', label: 'Buy All' },
  ];

  constructor(
    private fb: FormBuilder,
    private pokemonService: PokemonService,
    private messageService: MessageService,
    private realtimeDatabase: RealtimeDatabaseService,
    private route: Router,
    private store: Store
  ) {
    this.cartItems$ = this.store.select(selectCartItems);
  }

  async loadPokemonDetails(name: string): Promise<void> {
    try {
      this.pokemon = await this.pokemonService.getPokemonByName(name);
      console.log(this.pokemon);
      if (this.pokemon) {
        this.pokemonSpecies = await this.pokemonService.getPokemonSpecies(
          this.pokemon.species.name
        );
        console.log(this.pokemonSpecies);
        const evolutionChainUrl = this.pokemonSpecies.evolution_chain.url;

        this.pokemonChain = await this.pokemonService.getPokemonEvolutionChain(
          evolutionChainUrl
        );
        console.log(this.pokemonChain),
          console.log(this.pokemonChain.map((i: any) => i.name));
      }
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to load Pokemon details',
      });
    }
  }
  getOption() {
    console.log(this.selectedOption);

    return this.selectedOption;
  }

  ngOnInit() {
    this.showDialog();
    console.log(this.pokemon);
    this.loadPokemonDetails(this.pokemon);
  }
  showDialog() {
    this.visible = true;
  }
  hideDialog() {
    this.visible = false;
  }
  buyForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl(''),
    phoneCountryCode: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    buyOption: new FormControl('', [Validators.required]),
  });

  async onSubmit(): Promise<void> {
    if (this.buyForm.invalid) {
      this.buyForm.markAllAsTouched();
      return;
    }
    console.log('Form Data:', this.buyForm.value);

    try {
      console.log('Form Data:', this.buyForm.value);
      console.log(this.selectedOption);
      if (this.selectedOption === 'one') {
        const payload = {
          ...this.buyForm.value,
          pokemonToBuy: [this.pokemon.name]
        };
        console.log(payload);
        console.log(this.buyForm);
        const response = await this.realtimeDatabase.saveFormSubmission(payload);
        console.log(response);
      } else if (this.selectedOption === 'all') {
        const payload = {
          ...this.buyForm.value,
          pokemonToBuy: this.pokemonChain.map((i: any) => i.name),
        };
        console.log(payload);
        const response = await this.realtimeDatabase.saveFormSubmission(payload);

        console.log(response);
        this.confirm.emit();
        // this.route.navigate(['/submission'])
      }
    } catch (error) {
      console.error('Error saving form submission:', error);
    }
  }


  // onSubmit() {

  //   if (this.buyForm.invalid) {
  //     this.buyForm.markAllAsTouched();
  //     return;
  //   }
  //   console.log('Form Data:', this.buyForm.value);
  //   // if (this.buyForm.valid) {
  //   console.log('Form Data:', this.buyForm.value);
  //   console.log(this.selectedOption);
  //   if (this.selectedOption === 'one') {
  //     const payload = {
  //       ...this.buyForm.value,
  //       pokemonToBuy: [this.pokemon.name]
  //     };
  //     console.log(payload);
  //     console.log(this.buyForm);
  //     const response = this.realtimeDatabase.saveFormSubmission(payload);
  //     console.log(response);
  //   } else if (this.selectedOption === 'all') {
  //     const payload = {
  //       ...this.buyForm.value,
  //       pokemonToBuy: this.pokemonChain.map((i: any) => i.name),
  //     };
  //     console.log(payload);
  //     const response = this.realtimeDatabase.saveFormSubmission(payload);
  //     console.log(response);
  //   }

  //   // }
  // }
}

interface PhoneCode {
  name: string;
  code: string;
}
interface BuyOptions {
  value: string;
  label: string;
}






