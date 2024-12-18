import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { DetailUserComponent } from './feature/user/detail-user/detail-user.component';
import { PokemonMoreDetailComponent } from './components/pokemon/pokemon-more-detail/pokemon-more-detail.component';
import { PokemonListComponent } from './components/pokemon/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon/pokemon-detail/pokemon-detail.component';
import { ProductFormsComponent } from './components/product/product-forms/product-forms.component';
import { BuyPokemonComponent } from './components/pokemon/buy-pokemon/buy-pokemon.component';
import { PokemonTableComponent } from './components/pokemon/pokemon-table/pokemon-table.component';
import { ProductComponent } from './components/product/product.component';
import { EditHistoryComponent } from './components/pokemon/edit-history/edit-history.component';

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
  },
  {
    path: "productForms",
    component: ProductFormsComponent,

  },
  {
    path: "buyPokemon",
    component: BuyPokemonComponent
  },
  {
    path: "tablePokemon",
    component: PokemonTableComponent
  },
  {
    path: "tableProduct",
    component: ProductComponent
  },
  {
    path: "editHistory/:id",
    component: EditHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
