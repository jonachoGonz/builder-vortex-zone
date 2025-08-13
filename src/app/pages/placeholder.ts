import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../components/navbar';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [NavbarComponent],
  template: `
    <div class="min-h-screen bg-cream-100">
      <app-navbar type="type-2"></app-navbar>
      
      <div class="pt-20 pb-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-12">
            <div class="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-sage-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            
            <h1 class="text-3xl font-display font-light text-sage-200 mb-4">
              {{ pageName || 'Page' }} Coming Soon
            </h1>
            
            <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              This page is currently under development. Our team is working hard to bring you quality content and functionality.
            </p>
            
            <div class="space-y-4">
              <p class="text-gray-500">
                In the meantime, you can:
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/" 
                  class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-cream-100 bg-sage-200 hover:bg-sage-200/90 transition-all duration-300 hover:scale-105"
                >
                  ← Return Home
                </a>
                
                <a 
                  href="/contact" 
                  class="inline-flex items-center px-6 py-3 border border-sage-200 text-base font-medium rounded-full text-sage-200 bg-transparent hover:bg-sage-200 hover:text-cream-100 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
            
            <div class="mt-12 pt-8 border-t border-gray-200">
              <p class="text-sm text-gray-400">
                Need help building this page? Continue prompting to add more content and functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class PlaceholderComponent {
  @Input() pageName?: string;
}
