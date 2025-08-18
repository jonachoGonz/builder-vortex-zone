import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RrssComponent } from '../components/rrss';

@Component({
  selector: 'app-rrss-showcase',
  standalone: true,
  imports: [CommonModule, FormsModule, RrssComponent],
  template: `
    <div class="min-h-screen bg-gray-50">
      <nav class="bg-white shadow-sm border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
              <h1 class="text-xl font-semibold text-gray-900">RRSS Component Showcase</h1>
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
        <!-- Type Selector -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div class="flex items-center gap-4">
            <label class="text-sm font-medium text-gray-700">Component Type:</label>
            <select 
              [(ngModel)]="selectedType"
              class="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sage-200 focus:border-sage-200"
            >
              <option value="type-1">Type 1 - Social Media Grid</option>
            </select>
          </div>
        </div>

        <div class="space-y-8">
          <!-- Type 1 -->
          <div *ngIf="selectedType === 'type-1'" class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200">
              <h2 class="text-lg font-medium text-gray-900">RRSS Type 1</h2>
              <p class="text-sm text-gray-500 mt-1">Social media testimonials grid with videos and text posts from various platforms</p>
            </div>
            <div class="bg-white">
              <app-rrss type="type-1"></app-rrss>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class RrssShowcaseComponent {
  selectedType: 'type-1' = 'type-1';
}
