import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-terapias',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section [ngClass]="getSectionClasses()">
      
      <!-- Type 1: Performance Journey Design -->
      <div *ngIf="type === 'type-1'" class="px-20 py-30 relative z-10">
        <div class="max-w-6xl mx-auto relative">
          
          <!-- Main Heading -->
          <div class="mb-10">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              <span class="text-yellow-300">Your Journey to</span><br>
              <span class="text-white">Peak Performance</span>
            </h2>
          </div>

          <!-- Step Pills -->
          <div class="mb-15 overflow-hidden rounded-full">
            <div class="flex items-center gap-2">
              <div class="relative">
                <div class="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 cursor-pointer transition-all duration-300 hover:bg-white/20">
                  <p class="text-white text-sm font-medium uppercase tracking-wide">01 Complete Assessment</p>
                </div>
              </div>
              <div class="relative">
                <div class="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 cursor-pointer transition-all duration-300 hover:bg-white/20">
                  <p class="text-white text-sm font-medium uppercase tracking-wide">02 Data Analysis</p>
                </div>
              </div>
              <div class="relative">
                <div class="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 cursor-pointer transition-all duration-300 hover:bg-white/20">
                  <p class="text-white text-sm font-medium uppercase tracking-wide">03 Custom Protocol</p>
                </div>
              </div>
              <div class="relative">
                <div class="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 cursor-pointer transition-all duration-300 hover:bg-white/20">
                  <p class="text-white text-sm font-medium uppercase tracking-wide">04 Ongoing Support</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Cards Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-15">
            
            <!-- Card 1: Assessment -->
            <div class="bg-yellow-300 rounded-3xl overflow-hidden h-96 relative group cursor-pointer hover:scale-105 transition-all duration-300">
              <div class="flex flex-col justify-end h-full p-6">
                <div class="mb-10">
                  <div class="text-black/60 text-xs uppercase tracking-wide font-mono mb-2">01 Complete Assessment</div>
                  <h3 class="text-black text-2xl font-semibold uppercase leading-tight mb-4">
                    Comprehensive testing of performance markers and biomarkers
                  </h3>
                </div>
              </div>
              <div class="absolute inset-0 overflow-hidden rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&crop=center" 
                  alt="Health assessment"
                  class="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                >
              </div>
            </div>

            <!-- Card 2: Analysis -->
            <div class="bg-blue-400 rounded-3xl overflow-hidden h-96 relative group cursor-pointer hover:scale-105 transition-all duration-300">
              <div class="flex flex-col justify-end h-full p-6">
                <div class="mb-10">
                  <div class="text-white/60 text-xs uppercase tracking-wide font-mono mb-2">02 Data Analysis</div>
                  <h3 class="text-white text-2xl font-semibold uppercase leading-tight mb-4">
                    AI-powered analysis of your complete health profile
                  </h3>
                </div>
              </div>
              <div class="absolute inset-0 overflow-hidden rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=600&fit=crop&crop=center" 
                  alt="Data analysis"
                  class="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                >
              </div>
            </div>

            <!-- Card 3: Protocol -->
            <div class="bg-green-400 rounded-3xl overflow-hidden h-96 relative group cursor-pointer hover:scale-105 transition-all duration-300">
              <div class="flex flex-col justify-end h-full p-6">
                <div class="mb-10">
                  <div class="text-black/60 text-xs uppercase tracking-wide font-mono mb-2">03 Custom Protocol</div>
                  <h3 class="text-black text-2xl font-semibold uppercase leading-tight mb-4">
                    Personalized training and optimization program
                  </h3>
                </div>
              </div>
              <div class="absolute inset-0 overflow-hidden rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=600&fit=crop&crop=center" 
                  alt="Custom protocol"
                  class="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                >
              </div>
            </div>

            <!-- Card 4: Support -->
            <div class="bg-gray-300 rounded-3xl overflow-hidden h-96 relative group cursor-pointer hover:scale-105 transition-all duration-300">
              <div class="flex flex-col justify-end h-full p-6">
                <div class="mb-10">
                  <div class="text-black/60 text-xs uppercase tracking-wide font-mono mb-2">04 Ongoing Support</div>
                  <h3 class="text-black text-2xl font-semibold uppercase leading-tight mb-4">
                    Regular monitoring and protocol adjustments
                  </h3>
                </div>
              </div>
              <div class="absolute inset-0 overflow-hidden rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=center" 
                  alt="Ongoing support"
                  class="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                >
              </div>
            </div>
          </div>

          <!-- Navigation Controls -->
          <div class="absolute top-0 right-0 flex items-center gap-5 z-10">
            <button class="w-9 h-9 bg-black/30 rounded-lg flex items-center justify-center opacity-30 cursor-not-allowed">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button class="w-9 h-9 bg-black/50 rounded-lg flex items-center justify-center hover:bg-black/70 transition-colors">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Type 2: Health Testing Design -->
      <div *ngIf="type === 'type-2'" class="px-10 py-16 relative">
        <div class="max-w-5xl mx-auto">
          
          <!-- Header Section -->
          <div class="flex justify-between items-end gap-4 mb-10">
            <div class="w-full">
              <div class="mb-4">
                <div class="font-mono text-sm uppercase tracking-wide opacity-60 mb-4">
                  How it works
                </div>
                <div class="flex justify-between items-start">
                  <div class="max-w-4xl w-full">
                    <h2 class="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-4">
                      Test to know what's finally happening on the inside
                    </h2>
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

          <!-- Cards Carousel -->
          <div class="mt-10 relative">
            <div class="flex gap-2 overflow-x-auto scrollbar-hide">
              
              <!-- Card 1: Health Score -->
              <div class="flex-shrink-0 w-full lg:w-1/2 px-2">
                <div class="h-full relative">
                  <a routerLink="#" class="block w-full min-w-[500px] relative cursor-pointer group">
                    <div class="w-full">
                      <div class="max-w-sm w-full mb-8">
                        <div class="mb-2">
                          <div class="font-mono text-sm uppercase tracking-wide opacity-60">[1]</div>
                        </div>
                        <div class="mb-2">
                          <h4 class="text-xl font-medium leading-relaxed">Your health, quantified</h4>
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

                    <!-- Health Score Overlay -->
                    <div class="flex flex-col justify-start items-center -mt-[35%] relative w-full z-10">
                      <div class="backdrop-blur-3xl bg-black/40 rounded-3xl shadow-2xl flex flex-col justify-between gap-8 h-96 w-96 max-h-full overflow-hidden p-6">
                        <div class="flex items-center justify-between text-white">
                          <h4 class="text-xl font-medium">Health score</h4>
                          <div class="opacity-30">100+ markers</div>
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
                      <div class="max-w-sm w-full mb-8">
                        <div class="mb-2">
                          <div class="font-mono text-sm uppercase tracking-wide opacity-60">[2]</div>
                        </div>
                        <div class="mb-2">
                          <h4 class="text-xl font-medium leading-relaxed">Your biological age, unlocked</h4>
                        </div>
                        <div class="flex justify-between mb-8">
                          <div>
                            <span>Chronological age is surface-level.</span><br>
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

                    <!-- Bio Age Overlay -->
                    <div class="flex flex-col justify-start items-center -mt-[35%] relative w-full z-10">
                      <div class="relative">
                        <div class="backdrop-blur-3xl bg-gradient-to-br from-purple-900/80 to-blue-900/80 rounded-3xl shadow-2xl h-96 w-96 overflow-hidden relative">
                          <img 
                            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=380&fit=crop&crop=center" 
                            alt="Bio age card"
                            class="w-full h-full object-cover opacity-20"
                          >
                          <div class="absolute top-6 right-8 text-white text-6xl font-light">25</div>
                          <div class="absolute bottom-6 left-6 text-white">
                            <div class="text-sm opacity-70">Biological Age</div>
                            <div class="text-lg font-medium">Younger than 89% of people your age</div>
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
                      <div class="max-w-sm w-full mb-8">
                        <div class="mb-2">
                          <div class="font-mono text-sm uppercase tracking-wide opacity-60">[3]</div>
                        </div>
                        <div class="mb-2">
                          <h4 class="text-xl font-medium leading-relaxed">Next steps, simplified</h4>
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

                    <!-- Next Steps Overlay -->
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
      </div>
    </section>
  `,
})
export class TerapiasComponent {
  @Input() type: 'type-1' | 'type-2' = 'type-1';

  getSectionClasses(): string {
    if (this.type === 'type-1') {
      return 'relative min-h-screen overflow-hidden bg-gradient-to-b from-black to-gray-800';
    } else {
      return 'bg-white overflow-hidden relative';
    }
  }
}
