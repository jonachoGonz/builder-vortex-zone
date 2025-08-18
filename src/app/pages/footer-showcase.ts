import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../components/footer';

@Component({
  selector: 'app-footer-showcase',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
  template: `
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Footer Component Showcase</h1>
          <p class="text-lg text-gray-600 mb-6">Interactive preview of Footer component variations</p>
          
          <div class="inline-flex items-center space-x-4">
            <label for="footerType" class="text-sm font-medium text-gray-700">Footer Type:</label>
            <select 
              id="footerType"
              [(ngModel)]="selectedType" 
              class="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="type-1">Type 1</option>
              <option value="type-2">Type 2</option>
            </select>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Preview</h2>
          <div class="border border-gray-200 rounded-lg overflow-hidden">
            <app-footer [type]="selectedType"></app-footer>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Description</h2>
          <div [ngSwitch]="selectedType">
            <div *ngSwitchCase="'type-1'" class="text-gray-600">
              <h3 class="text-lg font-medium text-gray-800 mb-2">Footer Type 1 - Comprehensive Healthcare Footer</h3>
              <p class="mb-4">
                A comprehensive footer design with dark green background featuring:
              </p>
              <ul class="list-disc list-inside space-y-2 mb-4">
                <li>Brand logo and navigation (Supplements, Login)</li>
                <li>Company tagline "Heva is virtual care. Nationwide."</li>
                <li>Social media icons (Facebook, Instagram, LinkedIn)</li>
                <li>Newsletter subscription form</li>
                <li>Comprehensive treatment categories (Weight Loss, Sexual Health, Hormone Treatment, Lab Testing)</li>
                <li>LegitScript verification badge</li>
                <li>Copyright and privacy policy links</li>
              </ul>
              <p class="text-sm">
                <strong>Use case:</strong> Perfect for healthcare and medical websites that need to display comprehensive services and maintain professional credibility.
              </p>
            </div>
            
            <div *ngSwitchCase="'type-2'" class="text-gray-600">
              <h3 class="text-lg font-medium text-gray-800 mb-2">Footer Type 2 - Modern Tech Company Footer</h3>
              <p class="mb-4">
                A clean, modern footer design with dark background featuring:
              </p>
              <ul class="list-disc list-inside space-y-2 mb-4">
                <li>Geometric brand logo</li>
                <li>Company mission statement about AI-driven data science</li>
                <li>Organized navigation sections (More, Solutions, Social)</li>
                <li>Large brand typography background element</li>
                <li>Legal compliance links (GDPR, Legal Notice, General Conditions)</li>
                <li>Developer and designer credits</li>
                <li>"Back to top" functionality</li>
              </ul>
              <p class="text-sm">
                <strong>Use case:</strong> Ideal for technology companies, research organizations, and data science firms that want to showcase innovation and professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FooterShowcaseComponent {
  selectedType: 'type-1' | 'type-2' = 'type-1';
}
