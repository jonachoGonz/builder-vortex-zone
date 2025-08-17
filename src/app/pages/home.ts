import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar';
import { HeroComponent } from '../components/hero';
import { SomosComponent } from '../components/somos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, SomosComponent],
  template: `
    <div class="relative">
      <app-navbar type="type-1"></app-navbar>
      <app-hero type="type-1"></app-hero>
      <app-somos type="type-2"></app-somos>
    </div>
  `,
})
export class HomeComponent {}
