import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-somos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section [ngClass]="getSectionClasses()">
      <div class="px-[5%]">
        <div class="max-w-[2838px] mx-auto w-full">
          <div [ngClass]="getContainerClasses()">
            
            <!-- Type 1: Health Testing Design -->
            <div *ngIf="type === 'type-1'" class="space-y-16">
              <!-- Header Section -->
              <div class="space-y-0">
                <div class="flex items-end justify-between gap-4 lg:gap-16">
                  <div class="w-full">
                    <div class="flex-grow">
                      <div class="mb-4">
                        <div class="font-mono text-sm uppercase tracking-wide opacity-60">
                          How it works
                        </div>
                      </div>
                      <div class="flex justify-between items-start">
                        <div class="max-w-4xl w-full">
                          <div class="mb-4">
                            <h2 class="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
                              Test to know what's finally happening on the inside
                            </h2>
                          </div>
                        </div>
                        <div class="hidden lg:flex items-center justify-end">
                          <a 
                            routerLink="/register" 
                            class="bg-orange-500 text-white px-6 py-4 rounded-full font-medium text-lg tracking-tight transition-all duration-300 hover:bg-orange-600 hover:scale-105"
                          >
                            Start testing
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Cards Section -->
              <div class="mt-10 relative">
                <div class="flex gap-2 overflow-x-auto scrollbar-hide">
                  
                  <!-- Card 1: Health Score -->
                  <div class="flex-shrink-0 w-full lg:w-1/2 px-2">
                    <div class="h-full relative">
                      <a routerLink="#" class="block w-full min-w-[500px] relative cursor-pointer group">
                        <div class="w-full">
                          <div class="max-w-sm w-full">
                            <div class="mb-2">
                              <div class="font-mono text-sm uppercase tracking-wide opacity-60">
                                [1]
                              </div>
                            </div>
                            <div class="mb-2">
                              <h4 class="text-xl font-medium leading-relaxed">
                                Your health, quantified
                              </h4>
                            </div>
                            <div class="flex justify-between mb-8">
                              <div>
                                Get insights into your heart, hormones, metabolism, and more – know exactly what's happening across your whole body.
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <!-- Image Container -->
                        <div class="h-80 overflow-hidden relative w-full rounded-lg">
                          <img 
                            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop&crop=center" 
                            alt="Health testing"
                            class="absolute inset-0 w-full h-80 object-cover"
                          >
                        </div>

                        <!-- Overlay Card -->
                        <div class="flex flex-col justify-start items-center -mt-[35%] relative w-full z-10">
                          <div class="backdrop-blur-3xl bg-black/40 rounded-3xl shadow-2xl flex flex-col justify-between gap-8 h-96 w-96 max-h-full overflow-hidden p-6">
                            <div class="flex items-center justify-between text-white">
                              <h4 class="text-xl font-medium">
                                Health score
                              </h4>
                              <div class="opacity-30">
                                100+ markers
                              </div>
                            </div>
                            
                            <!-- Health Metrics Grid -->
                            <div class="grid grid-cols-2 gap-2 text-white">
                              <div class="flex items-center bg-white/10 border border-white/20 rounded-full py-1 px-3 gap-2">
                                <div class="w-7 h-7 bg-green-400/20 rounded-full flex items-center justify-center">
                                  <span class="text-green-300 text-xs font-bold">A</span>
                                </div>
                                <div class="text-sm">Liver health</div>
                              </div>
                              
                              <div class="flex items-center py-1 px-3 gap-2">
                                <div class="w-7 h-7 bg-pink-400/20 rounded-full flex items-center justify-center">
                                  <span class="text-pink-300 text-xs font-bold">C</span>
                                </div>
                                <div class="text-sm">Skin & hair</div>
                              </div>
                              
                              <div class="flex items-center py-1 px-3 gap-2">
                                <div class="w-7 h-7 bg-green-400/20 rounded-full flex items-center justify-center">
                                  <span class="text-green-300 text-xs font-bold">A</span>
                                </div>
                                <div class="text-sm">Kidney</div>
                              </div>
                              
                              <div class="flex items-center py-1 px-3 gap-2">
                                <div class="w-7 h-7 bg-green-400/20 rounded-full flex items-center justify-center">
                                  <span class="text-green-300 text-xs font-bold">A</span>
                                </div>
                                <div class="text-sm">Nutrition</div>
                              </div>
                              
                              <div class="flex items-center py-1 px-3 gap-2">
                                <div class="w-7 h-7 bg-green-400/20 rounded-full flex items-center justify-center">
                                  <span class="text-green-300 text-xs font-bold">A</span>
                                </div>
                                <div class="text-sm">Metabolism</div>
                              </div>
                              
                              <div class="flex items-center py-1 px-3 gap-2">
                                <div class="w-7 h-7 bg-yellow-400/20 rounded-full flex items-center justify-center">
                                  <span class="text-yellow-300 text-xs font-bold">B</span>
                                </div>
                                <div class="text-sm">Toxin exposure</div>
                              </div>
                              
                              <div class="flex items-center py-1 px-3 gap-2">
                                <div class="w-7 h-7 bg-yellow-400/20 rounded-full flex items-center justify-center">
                                  <span class="text-yellow-300 text-xs font-bold">B</span>
                                </div>
                                <div class="text-sm">Heart</div>
                              </div>
                              
                              <div class="flex items-center py-1 px-3 gap-2">
                                <div class="w-7 h-7 bg-yellow-400/20 rounded-full flex items-center justify-center">
                                  <span class="text-yellow-300 text-xs font-bold">B</span>
                                </div>
                                <div class="text-sm">Stress</div>
                              </div>
                              
                              <div class="flex items-center py-1 px-3 gap-2">
                                <div class="w-7 h-7 bg-yellow-400/20 rounded-full flex items-center justify-center">
                                  <span class="text-yellow-300 text-xs font-bold">B</span>
                                </div>
                                <div class="text-sm">Sex hormones</div>
                              </div>
                              
                              <div class="flex items-center py-1 px-3 gap-2">
                                <div class="w-7 h-7 bg-green-400/20 rounded-full flex items-center justify-center">
                                  <span class="text-green-300 text-xs font-bold">A</span>
                                </div>
                                <div class="text-sm">Energy</div>
                              </div>
                              
                              <div class="flex items-center py-1 px-3 gap-2">
                                <div class="w-7 h-7 bg-yellow-400/20 rounded-full flex items-center justify-center">
                                  <span class="text-yellow-300 text-xs font-bold">B</span>
                                </div>
                                <div class="text-sm">Thyroid health</div>
                              </div>
                              
                              <div class="flex items-center py-1 px-3 gap-2">
                                <div class="w-7 h-7 bg-green-400/20 rounded-full flex items-center justify-center">
                                  <span class="text-green-300 text-xs font-bold">A</span>
                                </div>
                                <div class="text-sm">Brain health</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <!-- Card 2: Biological Age -->
                  <div class="flex-shrink-0 w-full lg:w-1/2 px-2">
                    <div class="h-full relative">
                      <a routerLink="#" class="block w-full min-w-[500px] relative cursor-pointer group">
                        <div class="w-full">
                          <div class="max-w-sm w-full">
                            <div class="mb-2">
                              <div class="font-mono text-sm uppercase tracking-wide opacity-60">
                                [2]
                              </div>
                            </div>
                            <div class="mb-2">
                              <h4 class="text-xl font-medium leading-relaxed">
                                Your biological age, unlocked
                              </h4>
                            </div>
                            <div class="flex justify-between mb-8">
                              <div>
                                <span>Chronological age is surface-level.</span>
                                <br>
                                <span>Biological age reveals how fast or slow your body is really aging.</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <!-- Image Container -->
                        <div class="h-80 overflow-hidden relative w-full rounded-lg">
                          <img 
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center" 
                            alt="Biological age"
                            class="absolute inset-0 w-full h-80 object-cover"
                          >
                        </div>

                        <!-- Age Card -->
                        <div class="flex flex-col justify-start items-center -mt-[35%] relative w-full z-10">
                          <div class="relative">
                            <div class="backdrop-blur-3xl bg-gradient-to-br from-purple-900/80 to-blue-900/80 rounded-3xl shadow-2xl h-96 w-96 overflow-hidden relative">
                              <img 
                                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=380&fit=crop&crop=center" 
                                alt="Bio age card"
                                class="w-full h-full object-cover opacity-20"
                              >
                              <div class="absolute top-6 right-8 text-white text-6xl font-light">
                                25
                              </div>
                              <div class="absolute bottom-6 left-6 text-white">
                                <div class="text-sm opacity-70">Biological Age</div>
                                <div class="text-2xl font-medium">Younger than 89% of people your age</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <!-- Card 3: Next Steps -->
                  <div class="flex-shrink-0 w-full lg:w-1/2 px-2">
                    <div class="h-full relative">
                      <a routerLink="#" class="block w-full min-w-[500px] relative cursor-pointer group">
                        <div class="w-full">
                          <div class="max-w-sm w-full">
                            <div class="mb-2">
                              <div class="font-mono text-sm uppercase tracking-wide opacity-60">
                                [3]
                              </div>
                            </div>
                            <div class="mb-2">
                              <h4 class="text-xl font-medium leading-relaxed">
                                Next steps, simplified
                              </h4>
                            </div>
                            <div class="flex justify-between mb-8">
                              <div>
                                We've analyzed your lab results and have translated them to a clear plan. Built around your biology, goals, and what matters most.
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <!-- Image Container -->
                        <div class="h-80 overflow-hidden relative w-full rounded-lg">
                          <img 
                            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center" 
                            alt="Next steps"
                            class="absolute inset-0 w-full h-80 object-cover"
                          >
                        </div>

                        <!-- Plan Card -->
                        <div class="flex flex-col justify-start items-center -mt-[35%] relative w-full z-10">
                          <div class="backdrop-blur-3xl bg-gradient-to-br from-green-900/80 to-teal-900/80 rounded-3xl shadow-2xl h-96 w-96 overflow-hidden relative">
                            <img 
                              src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400&h=380&fit=crop&crop=center" 
                              alt="Plan content"
                              class="w-full h-full object-cover opacity-30"
                            >
                            <div class="absolute inset-6 text-white">
                              <div class="mb-4">
                                <h3 class="text-xl font-medium">Personalized Plan</h3>
                              </div>
                              <div class="space-y-3">
                                <div class="flex items-center gap-3">
                                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                                  <span class="text-sm">Nutrition recommendations</span>
                                </div>
                                <div class="flex items-center gap-3">
                                  <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                                  <span class="text-sm">Supplement guidance</span>
                                </div>
                                <div class="flex items-center gap-3">
                                  <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                                  <span class="text-sm">Lifestyle adjustments</span>
                                </div>
                                <div class="flex items-center gap-3">
                                  <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                  <span class="text-sm">Progress tracking</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Navigation -->
                <div class="flex justify-center items-center gap-8 mt-16">
                  <div class="flex items-center gap-4">
                    <button class="p-3 bg-black/5 rounded-full opacity-25 pointer-events-none">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    
                    <div class="flex items-center bg-black/5 rounded-full py-4 px-6 gap-2">
                      <button class="w-2 h-2 bg-black rounded-full"></button>
                      <button class="w-2 h-2 bg-black/25 rounded-full"></button>
                      <button class="w-2 h-2 bg-black/25 rounded-full"></button>
                    </div>
                    
                    <button class="p-3 bg-black/5 rounded-full transition-colors hover:bg-black/10">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Type 2: Q Psychology Design -->
            <div *ngIf="type === 'type-2'" class="space-y-32">
              <!-- Main Heading -->
              <div>
                <div class="max-w-6xl w-full">
                  <h2 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-thin leading-tight cursor-default">
                    Q Psychology aims to positively impact the mental health of all individuals and communities.
                  </h2>
                </div>
              </div>

              <!-- Content Section -->
              <div class="flex items-start justify-between relative">
                <div class="relative w-full lg:w-[48%]">
                  <div class="w-full h-px bg-sage-200 flex items-center justify-start text-left mb-9"></div>
                  
                  <p class="text-body-lg leading-relaxed mb-9">
                    We are dedicated to creating a safe and inclusive environment for all. We are leaders in LGBTQIAP+ affirming and neuroaffirming mental health care.
                  </p>
                  
                  <div class="mt-9">
                    <div class="flex items-center gap-4 flex-wrap">
                      <a 
                        routerLink="/about" 
                        class="flex items-center gap-2 bg-sage-100 rounded-full px-7 py-3 overflow-hidden relative group cursor-pointer hover:scale-105 transition-all duration-300"
                      >
                        <div class="relative z-30 text-sage-200 font-medium">
                          More about us
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
    </section>
  `,
})
export class SomosComponent {
  @Input() type: 'type-1' | 'type-2' = 'type-1';

  getSectionClasses(): string {
    return this.type === 'type-1' 
      ? 'bg-white overflow-hidden relative' 
      : 'bg-cream-100';
  }

  getContainerClasses(): string {
    return this.type === 'type-1' 
      ? 'py-16 lg:py-20 relative' 
      : 'py-32 lg:py-40';
  }
}
