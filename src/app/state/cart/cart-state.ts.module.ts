import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './cart.reducer';


@NgModule({
  imports: [
    StoreModule.forFeature('cart',cartReducer )],
})
export class CartStateTsModule { }
