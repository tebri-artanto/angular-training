import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import { DetailUserComponent } from './feature/user/detail-user/detail-user.component';
import { UserModule } from './feature/user/user.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
