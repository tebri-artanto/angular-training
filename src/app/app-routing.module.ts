import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { DetailUserComponent } from './feature/user/detail-user/detail-user.component';
import { PokemonMoreDetailComponent } from './components/pokemon/pokemon-more-detail/pokemon-more-detail.component';
import { PokemonListComponent } from './components/pokemon/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "pokemonlist",
    component: PokemonListComponent
  },
  {
    path: "pokemondetail",
    component: PokemonDetailComponent
  },
  {
    path: "moredetail/:name",
    component: PokemonMoreDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
