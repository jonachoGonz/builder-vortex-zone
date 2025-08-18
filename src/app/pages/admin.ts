import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar';
import { HeroComponent } from '../components/hero';
import { SomosComponent } from '../components/somos';
import { TerapiasComponent } from '../components/terapias';
import { EquipoComponent } from '../components/equipo';
import { ResenaComponent } from '../components/resena';
import { RrssComponent } from '../components/rrss';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeroComponent, SomosComponent, TerapiasComponent, EquipoComponent, ResenaComponent, RrssComponent],
  template: `
    <div class="min-h-screen bg-gray-50">
      <nav class="bg-white shadow-sm border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
              <h1 class="text-xl font-semibold text-gray-900">Component Manager</h1>
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
          
          <!-- Navigation Components -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200">
              <h2 class="text-lg font-medium text-gray-900">Navigation Components</h2>
              <p class="text-sm text-gray-500 mt-1">Different navbar variations for the website</p>
            </div>
            
            <div class="p-6 space-y-8">
              <div>
                <h3 class="text-md font-medium text-gray-900 mb-4">Navbar Type 1 (Dark/Overlay)</h3>
                <div class="relative border border-gray-200 rounded-lg overflow-hidden">
                  <app-navbar type="type-1"></app-navbar>
                  <div class="h-20 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                    <span class="text-gray-500">Preview content area</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 class="text-md font-medium text-gray-900 mb-4">Navbar Type 2 (Light/Solid)</h3>
                <div class="relative border border-gray-200 rounded-lg overflow-hidden">
                  <app-navbar type="type-2"></app-navbar>
                  <div class="h-20 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                    <span class="text-gray-500">Preview content area</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Hero Components -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200">
              <h2 class="text-lg font-medium text-gray-900">Hero Components</h2>
              <p class="text-sm text-gray-500 mt-1">Different hero section variations</p>
            </div>
            
            <div class="p-6 space-y-8">
              <div>
                <h3 class="text-md font-medium text-gray-900 mb-4">Hero Type 1 (Q Psychology Style)</h3>
                <div class="relative border border-gray-200 rounded-lg overflow-hidden" style="height: 400px;">
                  <div class="transform scale-50 origin-top-left w-[200%] h-[200%]">
                    <app-hero type="type-1"></app-hero>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 class="text-md font-medium text-gray-900 mb-4">Hero Type 2 (Alternative Style)</h3>
                <div class="relative border border-gray-200 rounded-lg overflow-hidden" style="height: 400px;">
                  <div class="transform scale-50 origin-top-left w-[200%] h-[200%]">
                    <app-hero type="type-2"></app-hero>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Somos Components -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200">
              <h2 class="text-lg font-medium text-gray-900">Somos Components</h2>
              <p class="text-sm text-gray-500 mt-1">Different "About Us" section variations</p>
            </div>

            <div class="p-6 space-y-8">
              <div>
                <h3 class="text-md font-medium text-gray-900 mb-4">Somos Type 1 (Health Testing Focus)</h3>
                <div class="relative border border-gray-200 rounded-lg overflow-hidden" style="height: 600px;">
                  <div class="transform scale-50 origin-top-left w-[200%] h-[200%]">
                    <app-somos type="type-1"></app-somos>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-md font-medium text-gray-900 mb-4">Somos Type 2 (Q Psychology Focus)</h3>
                <div class="relative border border-gray-200 rounded-lg overflow-hidden" style="height: 400px;">
                  <div class="transform scale-50 origin-top-left w-[200%] h-[200%]">
                    <app-somos type="type-2"></app-somos>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Terapias Components -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200">
              <h2 class="text-lg font-medium text-gray-900">Terapias Components</h2>
              <p class="text-sm text-gray-500 mt-1">Different therapy/treatment section variations</p>
            </div>

            <div class="p-6 space-y-8">
              <div>
                <h3 class="text-md font-medium text-gray-900 mb-4">Terapias Type 1 (Performance Journey)</h3>
                <div class="relative border border-gray-200 rounded-lg overflow-hidden" style="height: 600px;">
                  <div class="transform scale-50 origin-top-left w-[200%] h-[200%]">
                    <app-terapias type="type-1"></app-terapias>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-md font-medium text-gray-900 mb-4">Terapias Type 2 (Health Testing)</h3>
                <div class="relative border border-gray-200 rounded-lg overflow-hidden" style="height: 600px;">
                  <div class="transform scale-50 origin-top-left w-[200%] h-[200%]">
                    <app-terapias type="type-2"></app-terapias>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Equipo Components -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200">
              <h2 class="text-lg font-medium text-gray-900">Equipo Components</h2>
              <p class="text-sm text-gray-500 mt-1">Different team section variations</p>
            </div>

            <div class="p-6 space-y-8">
              <div>
                <h3 class="text-md font-medium text-gray-900 mb-4">Equipo Type 1 (Medical Professionals)</h3>
                <div class="relative border border-gray-200 rounded-lg overflow-hidden" style="height: 600px;">
                  <div class="transform scale-50 origin-top-left w-[200%] h-[200%]">
                    <app-equipo type="type-1"></app-equipo>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-md font-medium text-gray-900 mb-4">Equipo Type 2 (Founders and Team)</h3>
                <div class="relative border border-gray-200 rounded-lg overflow-hidden" style="height: 800px;">
                  <div class="transform scale-50 origin-top-left w-[200%] h-[200%]">
                    <app-equipo type="type-2"></app-equipo>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Reseña Components -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200">
              <h2 class="text-lg font-medium text-gray-900">Reseña Components</h2>
              <p class="text-sm text-gray-500 mt-1">Different testimonials/reviews section variations</p>
            </div>

            <div class="p-6 space-y-8">
              <div>
                <h3 class="text-md font-medium text-gray-900 mb-4">Reseña Type 1 (Testimonials Carousel)</h3>
                <div class="relative border border-gray-200 rounded-lg overflow-hidden" style="height: 500px;">
                  <div class="transform scale-50 origin-top-left w-[200%] h-[200%]">
                    <app-resena type="type-1"></app-resena>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-md font-medium text-gray-900 mb-4">Reseña Type 2 (Vertical Scrolling Testimonials)</h3>
                <div class="relative border border-gray-200 rounded-lg overflow-hidden" style="height: 500px;">
                  <div class="transform scale-25 origin-top-left w-[400%] h-[400%]">
                    <app-resena type="type-2"></app-resena>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- RRSS Components -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200">
              <h2 class="text-lg font-medium text-gray-900">RRSS Components</h2>
              <p class="text-sm text-gray-500 mt-1">Social media testimonials and posts section variations</p>
            </div>

            <div class="p-6 space-y-8">
              <div>
                <h3 class="text-md font-medium text-gray-900 mb-4">RRSS Type 1 (Social Media Grid)</h3>
                <div class="relative border border-gray-200 rounded-lg overflow-hidden" style="height: 600px;">
                  <div class="transform scale-50 origin-top-left w-[200%] h-[200%]">
                    <app-rrss type="type-1"></app-rrss>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-md font-medium text-gray-900 mb-4">RRSS Type 2 (Instagram Feed)</h3>
                <div class="relative border border-gray-200 rounded-lg overflow-hidden" style="height: 400px;">
                  <div class="transform scale-50 origin-top-left w-[200%] h-[200%]">
                    <app-rrss type="type-2"></app-rrss>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Component Stats -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-sage-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">Navbar Types</p>
                  <p class="text-2xl font-semibold text-gray-700">2</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-sage-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">Hero Types</p>
                  <p class="text-2xl font-semibold text-gray-700">2</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-sage-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">Somos Types</p>
                  <p class="text-2xl font-semibold text-gray-700">2</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-sage-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">Terapias Types</p>
                  <p class="text-2xl font-semibold text-gray-700">2</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-sage-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">Equipo Types</p>
                  <p class="text-2xl font-semibold text-gray-700">2</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-sage-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">Reseña Types</p>
                  <p class="text-2xl font-semibold text-gray-700">2</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-sage-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7Z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">RRSS Types</p>
                  <p class="text-2xl font-semibold text-gray-700">2</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-sage-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 713.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">Total Components</p>
                  <p class="text-2xl font-semibold text-gray-700">14</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-sage-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">Status</p>
                  <p class="text-2xl font-semibold text-green-600">Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AdminComponent {}
