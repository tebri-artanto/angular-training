import Aura from '@primeng/themes/aura';
import { Component } from '@angular/core';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {

  constructor(private primeng: PrimeNG) {
      this.primeng.theme.set({
          preset: Aura,
              options: {
                  cssLayer: {
                      name: 'primeng',
                      order: 'tailwind-base, primeng, tailwind-utilities'
                  }
              }
          })
      }
  }

