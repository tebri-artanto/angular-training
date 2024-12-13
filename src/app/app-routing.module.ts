import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { DetailUserComponent } from './feature/user/detail-user/detail-user.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "detail",
    component: DetailUserComponent
  },
  {
    path: "pokemonlist",
    component: PokemonListComponent
  },
  {
    path: "pokemondetail",
    component: PokemonDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
