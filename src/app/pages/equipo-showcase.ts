import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoComponent } from '../components/equipo';

@Component({
  selector: 'app-equipo-showcase',
  standalone: true,
  imports: [CommonModule, EquipoComponent],
  template: `
    <div class="min-h-screen bg-gray-50">
      <nav class="bg-white shadow-sm border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
              <h1 class="text-xl font-semibold text-gray-900">Equipo Component Showcase</h1>
            </div>
            <a 
              href="/" 
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-sage-200 hover:bg-sage-200/90 transition-colors"
            >
              ← Back to Site
            </a>
          </div>
        </div>
      </nav>

      <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div class="space-y-8">
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200">
              <h2 class="text-lg font-medium text-gray-900">Equipo Type 1</h2>
              <p class="text-sm text-gray-500 mt-1">Medical professionals focused team layout</p>
            </div>
            <div class="bg-white">
              <app-equipo type="type-1"></app-equipo>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200">
              <h2 class="text-lg font-medium text-gray-900">Equipo Type 2</h2>
              <p class="text-sm text-gray-500 mt-1">Founders and team focused layout</p>
            </div>
            <div class="bg-white">
              <app-equipo type="type-2"></app-equipo>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class EquipoShowcaseComponent {}
