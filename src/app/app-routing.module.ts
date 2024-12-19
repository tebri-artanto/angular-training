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
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuards } from './guards/auth.guard';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthComponent } from './components/auth/auth.component';
import { CanDeactiveService } from './guards/can-deactive.guard';

const routes: Routes = [
  // {
  //   path: "",
  //   component: LayoutComponent
  // },

  // {
  //   path: "login",
  //   component: LoginComponent
  // },
  // {
  //   path: "pokemonlist",
  //   component: PokemonListComponent
  // },
  // {
  //   path: "pokemondetail",
  //   component: PokemonDetailComponent
  // },
  // {
  //   path: "moredetail/:name",
  //   component: PokemonMoreDetailComponent
  // },
  // {
  //   path: "productForms",
  //   component: ProductFormsComponent,

  // },
  // {
  //   path: "buyPokemon",
  //   component: BuyPokemonComponent
  // },
  // {
  //   path: "tablePokemon",
  //   component: PokemonTableComponent
  // },
  // {
  //   path: "tableProduct",
  //   component: ProductComponent
  // },
  // {
  //   path: "editHistory/:id",
  //   component: EditHistoryComponent
  // }

  // Auth Page (no layout)
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  

  // Pages with Layout
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuards],
    children: [
      // CV Page
      { path: '', component: DetailUserComponent},

      // Pokémon List
      { path: 'pokemon', component: PokemonListComponent },

      // Pokémon Details
      { path: 'pokemon-detail/:name', component: PokemonMoreDetailComponent },

      // Edit Form Submission
      {
        path: 'edit-form-submission/:id',
        component: EditHistoryComponent,
        canDeactivate: [CanDeactiveService],
      },

      // Form Submissions Table
      { path: 'submission', component: PokemonTableComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
