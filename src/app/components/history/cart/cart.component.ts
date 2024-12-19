import { Router, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CartItem } from '../../../state/cart/cart.state';
import { clearCart, removeFromCart } from '../../../state/cart/cart.actions';
import { selectCartItemCount, selectCartItems } from '../../../state/cart/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: false
})
export class CartComponent {

  cartItems$;
  totalItems$;

  constructor(private store: Store<{ cart: { items: CartItem[] } }>,private router: Router) {
    this.cartItems$ = this.store.pipe(select(selectCartItems));
    this.totalItems$ = this.store.pipe(select(selectCartItemCount));
  }

  removeItem(pokemonName: string): void {
    this.store.dispatch(removeFromCart({ pokemonName }));
  }
  clearCart(): void {
    this.store.dispatch(clearCart());
  }

  logout() {
    this.router.navigate(["/checkout"])
  }
}
