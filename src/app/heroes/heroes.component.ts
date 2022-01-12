import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { Heroes } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Wolverine',
  };

  heroes = Heroes;

  selectHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectHero = hero;
  }
}
