import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonMoreDetailComponent } from './pokemon-more-detail/pokemon-more-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  { path: 'pokemon-detail/:name', component: PokemonMoreDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
