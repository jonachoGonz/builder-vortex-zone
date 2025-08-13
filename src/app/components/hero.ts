import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="relative min-h-screen overflow-hidden" [ngClass]="getHeroClasses()">
      <!-- Background Video/Image -->
      <div class="absolute inset-0 z-0">
        <div *ngIf="type === 'type-1'" class="absolute inset-0 bg-charcoal-200 mix-blend-multiply z-10"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div 
            class="w-full h-full bg-cover bg-center bg-no-repeat transform scale-110 filter blur-sm"
            [style.background-image]="getBackgroundImage()"
          ></div>
          <div *ngIf="type === 'type-1'" class="absolute inset-0 bg-sage-200 z-[-1]"></div>
        </div>
      </div>

      <!-- Content -->
      <div class="relative z-10 px-[5%]">
        <div class="max-w-[2838px] mx-auto w-full">
          <div class="flex items-stretch min-h-screen py-32 lg:py-40 relative z-10">
            <div class="flex flex-col justify-between items-stretch w-full">
              
              <!-- Main Heading -->
              <div class="transform-gpu will-change-transform" [ngClass]="getHeadingTransform()">
                <h1 [ngClass]="getHeadingClasses()">
                  {{ getHeadingText() }}
                </h1>
              </div>

              <!-- Bottom Content -->
              <div class="flex justify-between items-end gap-8 flex-col lg:flex-row mt-16 lg:mt-0">
                
                <!-- Scroll to Explore -->
                <div class="flex items-end gap-2">
                  <a href="#intro" class="flex items-end gap-3 group cursor-pointer transform-gpu will-change-transform hover:scale-105 transition-all duration-300">
                    <div class="flex items-center border border-cream-100 rounded-full h-9 px-4 overflow-hidden relative group">
                      <div class="flex items-center gap-4">
                        <!-- Arrow Icon Container -->
                        <div class="relative w-11 h-11 rounded-full bg-sage-100 flex items-center justify-center overflow-hidden">
                          <!-- Default Arrow -->
                          <svg class="w-8 h-8 text-sage-200 transition-all duration-300 group-hover:opacity-0 group-hover:transform group-hover:-translate-y-2" viewBox="0 0 32 32" fill="none">
                            <path stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" d="M16 8l-6 8h4v8h4v-8h4l-6-8z" />
                          </svg>
                          <!-- Hover Arrow -->
                          <div class="absolute inset-0 rounded-full bg-sage-200 flex items-center justify-center opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                            <svg class="w-8 h-8 text-cream-100" viewBox="0 0 32 32" fill="none">
                              <path stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" d="M16 8l-6 8h4v8h4v-8h4l-6-8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p [ngClass]="getScrollTextClasses()">
                      Scroll to explore
                    </p>
                  </a>
                </div>

                <!-- Description and CTA -->
                <div class="relative w-full lg:w-[48%] transform-gpu will-change-transform">
                  <div class="w-full h-px bg-cream-200 flex items-center justify-start text-left mb-9"></div>
                  
                  <div class="mb-9">
                    <p [ngClass]="getDescriptionClasses()">
                      <span>{{ getDescriptionText() }}</span>
                      <ng-container *ngFor="let location of locations; let i = index">
                        <strong class="font-body font-semibold">{{ location }}</strong>
                        <span *ngIf="i < locations.length - 2">, </span>
                        <span *ngIf="i === locations.length - 2"> and </span>
                      </ng-container>
                      <span>{{ getDescriptionSuffix() }}</span>
                    </p>
                  </div>

                  <div class="flex items-center gap-4 flex-wrap">
                    <div class="relative">
                      <a 
                        routerLink="/contact" 
                        class="flex items-center gap-2 bg-sage-100 rounded-full px-7 py-3 overflow-hidden relative group cursor-pointer hover:scale-105 transition-all duration-300"
                      >
                        <div class="relative z-30 text-sage-200 font-medium">
                          {{ getCtaText() }}
                        </div>
                        
                        <div class="flex items-center gap-4 relative z-30">
                          <!-- Arrow Icon Container -->
                          <div class="w-11 h-11 rounded-full bg-sage-200 flex items-center justify-center overflow-hidden relative">
                            <!-- Default Arrow -->
                            <svg class="w-4 h-4 text-cream-100 transition-all duration-300" viewBox="0 0 24 24" fill="none">
                              <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>

                        <!-- Hover Background -->
                        <div class="absolute inset-0 bg-sage-200 rounded-full transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-20"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
})
export class HeroComponent {
  @Input() type: 'type-1' | 'type-2' = 'type-1';

  locations = ['Carlton', 'St Kilda', 'Geelong', 'Colac'];

  getHeroClasses(): string {
    return this.type === 'type-1' 
      ? 'bg-black' 
      : 'bg-gradient-to-br from-sage-100 to-sage-100/80';
  }

  getBackgroundImage(): string {
    return this.type === 'type-1' 
      ? "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop&crop=center')"
      : "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop&crop=center')";
  }

  getHeadingTransform(): string {
    return this.type === 'type-1' 
      ? 'transform -skew-x-1' 
      : 'transform hover:scale-105 transition-transform duration-700';
  }

  getHeadingClasses(): string {
    const baseClasses = 'border-cream-100 cursor-default font-display font-thin leading-tight';
    const typeClasses = this.type === 'type-1' 
      ? 'text-cream-100 text-6xl md:text-8xl lg:text-9xl xl:text-[142px] xl:leading-[149px]'
      : 'text-sage-200 text-5xl md:text-7xl lg:text-8xl xl:text-[120px] xl:leading-[130px]';
    
    return `${baseClasses} ${typeClasses}`;
  }

  getHeadingText(): string {
    return this.type === 'type-1' 
      ? 'Your place for supportive mental healthcare.'
      : 'Compassionate care for your mental wellbeing.';
  }

  getScrollTextClasses(): string {
    return this.type === 'type-1' 
      ? 'text-cream-100 text-body-lg leading-relaxed cursor-pointer'
      : 'text-sage-200 text-body-lg leading-relaxed cursor-pointer';
  }

  getDescriptionClasses(): string {
    return this.type === 'type-1' 
      ? 'text-cream-100 text-body-lg leading-relaxed'
      : 'text-sage-200 text-body-lg leading-relaxed';
  }

  getDescriptionText(): string {
    return this.type === 'type-1' 
      ? 'Q Psychology provides high quality, best-practice mental health support to clients and the community. We are leaders in LGBTQIAP+ affirming and neuroaffirming mental healthcare. We have clinics in '
      : 'Experience personalized mental health support with our team of qualified psychologists. We offer inclusive, evidence-based treatment across multiple locations in ';
  }

  getDescriptionSuffix(): string {
    return this.type === 'type-1'
      ? '. Appointments are available Monday to Saturday, including evening appointments.'
      : '. Flexible scheduling available including weekend and evening sessions.';
  }

  getCtaText(): string {
    return this.type === 'type-1' 
      ? 'Reach out to us'
      : 'Book consultation';
  }
}
