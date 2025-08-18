import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar';
import { HeroComponent } from '../components/hero';
import { SomosComponent } from '../components/somos';
import { TerapiasComponent } from '../components/terapias';
import { EquipoComponent } from '../components/equipo';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, SomosComponent, TerapiasComponent, EquipoComponent],
  template: `
    <div class="relative">
      <app-navbar type="type-1"></app-navbar>
      <app-hero type="type-1"></app-hero>
      <app-somos type="type-2"></app-somos>
      <app-terapias type="type-1"></app-terapias>
      <app-equipo type="type-1"></app-equipo>
    </div>
  `,
})
export class HomeComponent {}
