import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar';
import { TerapiasComponent } from '../components/terapias';

@Component({
  selector: 'app-terapias-showcase',
  standalone: true,
  imports: [NavbarComponent, TerapiasComponent],
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              
              <h1 class="text-3xl font-display font-light text-sage-200 mb-4">
                Terapias Components Showcase
              </h1>
              
              <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore different variations of therapy and health optimization sections designed for performance and wellness organizations.
              </p>
            </div>
          </div>

          <!-- Type 1: Performance Journey -->
          <div class="mb-16">
            <div class="mb-8">
              <h2 class="text-2xl font-semibold text-gray-900 mb-2">Type 1: Performance Journey</h2>
              <p class="text-gray-600">Dark, premium design focused on peak performance optimization with colorful step cards.</p>
            </div>
            <div class="bg-black rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <app-terapias type="type-1"></app-terapias>
            </div>
          </div>

          <!-- Type 2: Health Testing -->
          <div class="mb-16">
            <div class="mb-8">
              <h2 class="text-2xl font-semibold text-gray-900 mb-2">Type 2: Health Testing</h2>
              <p class="text-gray-600">Clean, medical-focused layout emphasizing comprehensive health testing and analysis.</p>
            </div>
            <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <app-terapias type="type-2"></app-terapias>
            </div>
          </div>

          <!-- Navigation -->
          <div class="text-center">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Ready to implement?</h3>
              <p class="text-gray-600 mb-6">These therapy components are fully responsive and ready for production use.</p>
              
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
export class TerapiasShowcaseComponent {}
