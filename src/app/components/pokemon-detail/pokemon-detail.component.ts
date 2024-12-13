import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
  standalone: false
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon: any = null;

  @Input() theme: 'light' | 'dark' = 'light';

  constructor() { }

  ngOnInit() {
  }

}
