import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar';
import { SomosComponent } from '../components/somos';

@Component({
  selector: 'app-somos-showcase',
  standalone: true,
  imports: [NavbarComponent, SomosComponent],
  template: `
    <div class="min-h-screen bg-gray-50">
      <app-navbar type="type-2"></app-navbar>
      
      <div class="pt-20 pb-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Page Header -->
          <div class="text-center mb-16">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-12">
              <div class="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-sage-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              
              <h1 class="text-3xl font-display font-light text-sage-200 mb-4">
                Somos Components Showcase
              </h1>
              
              <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore different variations of the "About Us" sections designed for health and psychology-focused organizations.
              </p>
            </div>
          </div>

          <!-- Type 1: Health Testing Focus -->
          <div class="mb-16">
            <div class="mb-8">
              <h2 class="text-2xl font-semibold text-gray-900 mb-2">Type 1: Health Testing Focus</h2>
              <p class="text-gray-600">Interactive health metrics showcase with sliding cards and health score visualization.</p>
            </div>
            <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <app-somos type="type-1"></app-somos>
            </div>
          </div>

          <!-- Type 2: Q Psychology Focus -->
          <div class="mb-16">
            <div class="mb-8">
              <h2 class="text-2xl font-semibold text-gray-900 mb-2">Type 2: Q Psychology Focus</h2>
              <p class="text-gray-600">Clean, professional layout emphasizing inclusivity and community mental health.</p>
            </div>
            <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <app-somos type="type-2"></app-somos>
            </div>
          </div>

          <!-- Navigation -->
          <div class="text-center">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Ready to implement?</h3>
              <p class="text-gray-600 mb-6">These components are fully responsive and ready for production use.</p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/" 
                  class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-cream-100 bg-sage-200 hover:bg-sage-200/90 transition-all duration-300 hover:scale-105"
                >
                  ← View Live Site
                </a>
                
                <a 
                  href="/admin" 
                  class="inline-flex items-center px-6 py-3 border border-sage-200 text-base font-medium rounded-full text-sage-200 bg-transparent hover:bg-sage-200 hover:text-cream-100 transition-all duration-300"
                >
                  Component Manager
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class SomosShowcaseComponent {}
