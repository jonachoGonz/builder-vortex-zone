import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="w-full z-50" [ngClass]="getNavClasses()">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center" [ngClass]="getContainerClasses()">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a routerLink="/" class="flex items-center">
              <div class="text-xl font-semibold" [ngClass]="getLogoClasses()">
                Q Psychology
              </div>
            </a>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <ng-container *ngFor="let item of navItems">
                <a 
                  [routerLink]="item.path" 
                  class="transition-colors duration-200"
                  [ngClass]="getLinkClasses()"
                  routerLinkActive="active"
                >
                  {{ item.label }}
                </a>
              </ng-container>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="hidden md:block">
            <a 
              routerLink="/contact" 
              class="inline-flex items-center gap-2"
              [ngClass]="getCtaClasses()"
            >
              <span>Book Appointment</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button 
              type="button" 
              class="p-2 rounded-md transition-colors"
              [ngClass]="getMobileButtonClasses()"
              (click)="toggleMobileMenu()"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path *ngIf="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path *ngIf="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div *ngIf="isMobileMenuOpen" class="md:hidden" [ngClass]="getMobileMenuClasses()">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ng-container *ngFor="let item of navItems">
              <a 
                [routerLink]="item.path" 
                class="block px-3 py-2 transition-colors duration-200"
                [ngClass]="getMobileLinkClasses()"
                (click)="closeMobileMenu()"
              >
                {{ item.label }}
              </a>
            </ng-container>
            <a 
              routerLink="/contact" 
              class="block mt-4"
              [ngClass]="getMobileCtaClasses()"
              (click)="closeMobileMenu()"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  @Input() type: 'type-1' | 'type-2' = 'type-1';
  
  isMobileMenuOpen = false;
  
  navItems = [
    { label: 'Services', path: '/services' },
    { label: 'Locations', path: '/locations' }, 
    { label: 'About', path: '/about' },
    { label: 'Resources', path: '/resources' },
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  getNavClasses(): string {
    const baseClasses = 'fixed top-0 left-0 right-0 transition-all duration-300';
    
    if (this.type === 'type-1') {
      return `${baseClasses} bg-black/80 backdrop-blur-sm border-b border-cream-100/20`;
    } else {
      return `${baseClasses} bg-cream-100 border-b border-sage-100/20`;
    }
  }

  getContainerClasses(): string {
    return this.type === 'type-1' ? 'h-16' : 'h-20';
  }

  getLogoClasses(): string {
    return this.type === 'type-1' 
      ? 'text-cream-100 font-body' 
      : 'text-sage-200 font-body';
  }

  getLinkClasses(): string {
    const baseClasses = 'text-sm font-medium hover:scale-105';
    
    if (this.type === 'type-1') {
      return `${baseClasses} text-cream-100/80 hover:text-cream-100`;
    } else {
      return `${baseClasses} text-sage-200/80 hover:text-sage-200`;
    }
  }

  getCtaClasses(): string {
    const baseClasses = 'px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105';
    
    if (this.type === 'type-1') {
      return `${baseClasses} bg-sage-100 text-sage-200 hover:bg-sage-100/90`;
    } else {
      return `${baseClasses} bg-sage-200 text-cream-100 hover:bg-sage-200/90`;
    }
  }

  getMobileButtonClasses(): string {
    return this.type === 'type-1' 
      ? 'text-cream-100 hover:bg-cream-100/10' 
      : 'text-sage-200 hover:bg-sage-200/10';
  }

  getMobileMenuClasses(): string {
    return this.type === 'type-1' 
      ? 'bg-black/95 backdrop-blur-sm border-t border-cream-100/20' 
      : 'bg-cream-100 border-t border-sage-100/20';
  }

  getMobileLinkClasses(): string {
    const baseClasses = 'rounded-md font-medium';
    
    if (this.type === 'type-1') {
      return `${baseClasses} text-cream-100/80 hover:text-cream-100 hover:bg-cream-100/10`;
    } else {
      return `${baseClasses} text-sage-200/80 hover:text-sage-200 hover:bg-sage-200/10`;
    }
  }

  getMobileCtaClasses(): string {
    const baseClasses = 'px-6 py-3 rounded-full font-medium text-center transition-all duration-300';
    
    if (this.type === 'type-1') {
      return `${baseClasses} bg-sage-100 text-sage-200 hover:bg-sage-100/90`;
    } else {
      return `${baseClasses} bg-sage-200 text-cream-100 hover:bg-sage-200/90`;
    }
  }
}
