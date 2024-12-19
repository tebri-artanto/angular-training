import { AuthModule } from './components/auth/auth.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { PrimeNG } from 'primeng/config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import { DetailUserComponent } from './feature/user/detail-user/detail-user.component';
import { UserModule } from './feature/user/user.module';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { DrawerModule } from 'primeng/drawer';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { PokemonModule } from './components/pokemon/pokemon.module';
import { ProductModule } from './components/product/product.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from '../enviroments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { PokemonService } from './services/pokemon.service';
import { RealtimeDatabaseService } from './services/realtime-database.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cartReducer } from './state/cart/cart.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CartComponent } from './components/history/cart/cart.component';
import { HistoryModule } from './components/history/history.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterOutlet,
    InputTextModule,
    ButtonModule,
    MessageModule,
    FormsModule,
    ProductModule,
    ButtonModule,
    CardModule,
    PanelModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    ToastModule,
    Dialog,
    InputTextModule,
    InputGroup,
    SelectModule,
    InputNumberModule,
    InputGroup,
    InputGroupModule,
    InputGroupAddonModule,
    DrawerModule,
    TableModule,
    ConfirmDialogModule,
    MenubarModule,
    AuthModule,
    HistoryModule,
    StoreModule.forRoot(
      { cart: cartReducer },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [
    PokemonService,
    MessageService,
    RealtimeDatabaseService,
    ConfirmationService,

    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
