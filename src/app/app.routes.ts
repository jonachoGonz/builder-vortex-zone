import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { AdminComponent } from './pages/admin';
import { PlaceholderComponent } from './pages/placeholder';
import { SomosShowcaseComponent } from './pages/somos-showcase';
import { TerapiasShowcaseComponent } from './pages/terapias-showcase';
import { EquipoShowcaseComponent } from './pages/equipo-showcase';
import { ResenaShowcaseComponent } from './pages/resena-showcase';
import { RrssShowcaseComponent } from './pages/rrss-showcase';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'somos-showcase', component: SomosShowcaseComponent },
  { path: 'terapias-showcase', component: TerapiasShowcaseComponent },
  { path: 'equipo-showcase', component: EquipoShowcaseComponent },
  { path: 'resena-showcase', component: ResenaShowcaseComponent },
  { path: 'rrss-showcase', component: RrssShowcaseComponent },
  { path: 'services', component: PlaceholderComponent, data: { pageName: 'Services' } },
  { path: 'locations', component: PlaceholderComponent, data: { pageName: 'Locations' } },
  { path: 'about', component: PlaceholderComponent, data: { pageName: 'About' } },
  { path: 'resources', component: PlaceholderComponent, data: { pageName: 'Resources' } },
  { path: 'contact', component: PlaceholderComponent, data: { pageName: 'Contact' } },
  { path: '**', redirectTo: '' }
];
