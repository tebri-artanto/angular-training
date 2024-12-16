import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Card } from 'primeng/card';
import { ProgressBar } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonMoreDetailComponent } from './pokemon-more-detail/pokemon-more-detail.component';


@NgModule({
  declarations: [PokemonDetailComponent, PokemonListComponent, PokemonMoreDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    Card,
    ProgressBar,
    ToastModule

  ],
  providers: [PokemonService],
  exports: [PokemonDetailComponent, PokemonListComponent, PokemonMoreDetailComponent],

})
export class PokemonModule { }
