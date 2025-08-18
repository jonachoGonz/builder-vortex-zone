import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  goal?: string;
  image: string;
  instagramHandle?: string;
  instagramUrl?: string;
  company?: string;
}

@Component({
  selector: 'app-resena',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Type 1: Testimonials Carousel -->
    <section *ngIf="type === 'type-1'"
             class="overflow-hidden bg-white"
             style="mask: radial-gradient(center, white, black);">
      <div class="max-w-5xl mx-auto px-10 lg:px-40">
        <!-- Header -->
        <div class="flex flex-col items-center justify-start text-center mx-auto gap-2 mb-10 pt-25">
          <div class="text-sm leading-4 text-center text-black/30 opacity-100 filter-none transition-all duration-800 ease-out">
            Testimonials
          </div>
          <h2 class="text-2xl font-medium leading-7 text-center text-black filter-none opacity-100 transition-all duration-800 ease-out"
              style="font-family: 'PP Eiko', sans-serif; letter-spacing: -0.24px;">
            Helping people feel better, every day
          </h2>
        </div>

        <!-- Carousel Container -->
        <div class="mx-auto pb-25">
          <div class="max-w-full w-full relative overflow-hidden">
            <!-- Testimonials Track -->
            <div class="flex h-80 w-full transition-transform duration-1000 ease-out"
                 [style.transform]="'translateX(' + (-currentIndex * 100) + '%)'">

              <!-- Testimonial Cards -->
              <div *ngFor="let testimonial of testimonials; let i = index"
                   class="flex-shrink-0 flex flex-row gap-8 h-80 mr-30 w-full overflow-hidden">

                <!-- Content Section -->
                <div class="flex flex-col justify-between flex-1 gap-4 pb-5 pt-0">
                  <!-- Quote -->
                  <div class="gap-4">
                    <div class="text-base leading-6 text-black/50">
                      <p>{{ testimonial.quote }}</p>
                    </div>
                  </div>

                  <!-- User Info -->
                  <div class="flex flex-col justify-between gap-4 w-full">
                    <div class="flex flex-col">
                      <!-- Profile Info (Mobile Hidden) -->
                      <div class="hidden items-normal justify-normal gap-0">
                        <img [src]="testimonial.image"
                             [alt]="testimonial.name"
                             class="rounded-3xl hidden h-full max-h-80 object-cover overflow-clip w-70">

                        <div class="flex flex-col justify-start gap-1">
                          <div class="flex items-center justify-start gap-3">
                            <div class="flex items-end justify-start">
                              <div class="text-base font-medium leading-6">{{ testimonial.name }}</div>
                            </div>
                            <a *ngIf="testimonial.instagramUrl" [href]="testimonial.instagramUrl"
                               class="flex items-center justify-center gap-1 h-6 px-2 border-b border-black/30 rounded-1 max-w-full cursor-pointer text-xs font-medium">
                              <!-- Instagram Icon -->
                              <svg xmlns="http://www.w3.org/2000/svg"
                                   width="100%" height="100%" viewBox="0 0 15 14" fill="none"
                                   class="cursor-pointer fill-none flex-shrink-0 h-full overflow-clip w-full min-w-0">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M9.81608 1.18555C10.8531 1.18555 11.7667 1.53123 12.4087 2.19789C13.0506 2.83987 13.3963 3.72876 13.3963 4.76579V9.85221C13.3963 10.9139 13.0506 11.8275 12.384 12.4695C11.742 13.0868 10.8531 13.4325 9.79139 13.4325H4.75435C3.74201 13.4325 2.85312 13.1115 2.18645 12.4695C1.49509 11.8028 1.14941 10.8893 1.14941 9.82752V4.76579C1.14941 2.61765 2.58151 1.18555 4.72966 1.18555H9.81608ZM11.5939 11.6547C12.0383 11.2349 12.3099 10.6176 12.3099 9.85221V4.76579C12.3099 4.04974 12.063 3.43246 11.6432 2.98802C11.1988 2.54357 10.5815 2.32135 9.84077 2.32135H4.75435C4.01361 2.32135 3.37164 2.54357 2.95188 2.96332C2.50744 3.40777 2.28522 4.02505 2.28522 4.76579V9.82752C2.28522 10.593 2.50744 11.2102 2.95188 11.6547C3.39633 12.0744 4.01361 12.2967 4.75435 12.2967H9.79139C10.5321 12.2967 11.1494 12.0744 11.5939 11.6547ZM10.5569 4.76804C10.9523 4.76804 11.2729 4.44745 11.2729 4.05199C11.2729 3.65652 10.9523 3.33594 10.5569 3.33594C10.1614 3.33594 9.84082 3.65652 9.84082 4.05199C9.84082 4.44745 10.1614 4.76804 10.5569 4.76804ZM7.27085 4.12109C5.54245 4.12109 4.11035 5.5285 4.11035 7.28159C4.11035 9.03467 5.51776 10.4421 7.27085 10.4421C9.02393 10.4421 10.4313 9.00998 10.4313 7.28159C10.4313 5.55319 8.99924 4.12109 7.27085 4.12109ZM7.27085 9.30628C6.15973 9.30628 5.24615 8.3927 5.24615 7.28159C5.24615 6.17048 6.15973 5.2569 7.27085 5.2569C8.38196 5.2569 9.29554 6.17048 9.29554 7.28159C9.29554 8.3927 8.38196 9.30628 7.27085 9.30628Z"
                                      fill="black" fill-opacity="0.3">
                                </path>
                              </svg>
                              <div class="cursor-pointer text-xs font-medium">{{ testimonial.instagramHandle }}</div>
                            </a>
                          </div>
                          <div class="flex">
                            <div class="text-sm leading-4 text-black/30">{{ testimonial.title }}</div>
                          </div>
                          <div *ngIf="testimonial.goal" class="text-sm text-black/50">{{ testimonial.goal }}</div>
                        </div>
                      </div>

                      <!-- Visible Profile Info -->
                      <div class="flex flex-col justify-start gap-1">
                        <div class="flex items-center justify-start gap-3">
                          <div class="flex items-end justify-start">
                            <div class="text-base font-medium leading-6">{{ testimonial.name }}</div>
                          </div>
                          <a *ngIf="testimonial.instagramUrl" [href]="testimonial.instagramUrl"
                             class="flex items-center justify-center gap-1 h-6 px-2 border-b border-black/30 rounded-1 max-w-full cursor-pointer text-xs font-medium hover:opacity-80 transition-opacity">
                            <!-- Instagram Icon -->
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="100%" height="100%" viewBox="0 0 15 14" fill="none"
                                 class="cursor-pointer fill-none flex-shrink-0 h-full overflow-clip w-full min-w-0">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M9.81608 1.18555C10.8531 1.18555 11.7667 1.53123 12.4087 2.19789C13.0506 2.83987 13.3963 3.72876 13.3963 4.76579V9.85221C13.3963 10.9139 13.0506 11.8275 12.384 12.4695C11.742 13.0868 10.8531 13.4325 9.79139 13.4325H4.75435C3.74201 13.4325 2.85312 13.1115 2.18645 12.4695C1.49509 11.8028 1.14941 10.8893 1.14941 9.82752V4.76579C1.14941 2.61765 2.58151 1.18555 4.72966 1.18555H9.81608ZM11.5939 11.6547C12.0383 11.2349 12.3099 10.6176 12.3099 9.85221V4.76579C12.3099 4.04974 12.063 3.43246 11.6432 2.98802C11.1988 2.54357 10.5815 2.32135 9.84077 2.32135H4.75435C4.01361 2.32135 3.37164 2.54357 2.95188 2.96332C2.50744 3.40777 2.28522 4.02505 2.28522 4.76579V9.82752C2.28522 10.593 2.50744 11.2102 2.95188 11.6547C3.39633 12.0744 4.01361 12.2967 4.75435 12.2967H9.79139C10.5321 12.2967 11.1494 12.0744 11.5939 11.6547ZM10.5569 4.76804C10.9523 4.76804 11.2729 4.44745 11.2729 4.05199C11.2729 3.65652 10.9523 3.33594 10.5569 3.33594C10.1614 3.33594 9.84082 3.65652 9.84082 4.05199C9.84082 4.44745 10.1614 4.76804 10.5569 4.76804ZM7.27085 4.12109C5.54245 4.12109 4.11035 5.5285 4.11035 7.28159C4.11035 9.03467 5.51776 10.4421 7.27085 10.4421C9.02393 10.4421 10.4313 9.00998 10.4313 7.28159C10.4313 5.55319 8.99924 4.12109 7.27085 4.12109ZM7.27085 9.30628C6.15973 9.30628 5.24615 8.3927 5.24615 7.28159C5.24615 6.17048 6.15973 5.2569 7.27085 5.2569C8.38196 5.2569 9.29554 6.17048 9.29554 7.28159C9.29554 8.3927 8.38196 9.30628 7.27085 9.30628Z"
                                    fill="black" fill-opacity="0.3">
                              </path>
                            </svg>
                            <div class="cursor-pointer text-xs font-medium">{{ testimonial.instagramHandle }}</div>
                          </a>
                        </div>
                        <div class="flex">
                          <div class="text-sm leading-4 text-black/30">{{ testimonial.title }}</div>
                        </div>
                        <div *ngIf="testimonial.goal" class="text-sm text-black/50">{{ testimonial.goal }}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Image Section -->
                <img [src]="testimonial.image"
                     [alt]="testimonial.name"
                     class="rounded-3xl block h-full max-h-80 object-cover overflow-clip w-70">
              </div>
            </div>

            <!-- Navigation -->
            <div class="flex gap-2 mt-10">
              <button (click)="previousSlide()"
                      class="flex items-center justify-center w-12 h-12 bg-cream-200 rounded-full cursor-pointer transition-all duration-300 hover:bg-cream-300 border border-black/10 pl-1.5 pr-1 py-0.5">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="100%" height="100%" viewBox="0 0 20 18" fill="none"
                     class="cursor-pointer fill-none h-full overflow-clip text-center w-full">
                  <path d="M19 9L1 9M1 9L8.65 17M1 9L8.65 1"
                        stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round">
                  </path>
                </svg>
              </button>
              <button (click)="nextSlide()"
                      class="flex items-center justify-center w-12 h-12 bg-cream-200 rounded-full cursor-pointer relative transition-all duration-300 hover:bg-cream-300 border border-black/10 pl-1.5 pr-1 py-0.5">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="100%" height="100%" viewBox="0 0 20 18" fill="none"
                     class="cursor-pointer fill-none h-full overflow-clip text-center w-full">
                  <path d="M1 9L19 9M19 9L11.35 17M19 9L11.35 1"
                        stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Type 2: Vertical Scrolling Testimonials -->
    <section *ngIf="type === 'type-2'"
             class="flex flex-col items-center justify-center gap-24 py-20 px-0 relative overflow-hidden bg-black">

      <!-- Header -->
      <div class="flex flex-col items-center justify-start gap-24 max-w-4xl">
        <div class="flex flex-col items-center justify-center gap-8 max-w-4xl">
          <h2 class="text-white text-center text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight"
              style="font-family: 'Recoleta Regular', 'Recoleta Regular Placeholder', sans-serif; letter-spacing: -3.744px;">
            Don't just take our word for it...
          </h2>
        </div>
      </div>

      <!-- Testimonials Columns -->
      <div class="flex gap-8 w-1/2 h-[894px] overflow-hidden">

        <!-- Column 1 -->
        <div class="flex-1 h-full overflow-hidden relative"
             style="mask: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17.5%, rgb(0, 0, 0) 82.5%, rgba(0, 0, 0, 0) 100%);">
          <ul class="flex flex-col gap-6 animate-scroll-up">
            <li *ngFor="let testimonial of type2TestimonialsColumn1"
                class="bg-white p-6 rounded-none flex-shrink-0 h-[282px] w-full">
              <div class="flex flex-col gap-5 h-full">
                <!-- Quote -->
                <p class="text-gray-800 text-base leading-6"
                   style="font-family: 'Kumbh Sans', 'Kumbh Sans Placeholder', sans-serif;">
                  "{{ testimonial.quote }}"
                </p>

                <!-- User Info -->
                <div class="flex items-center gap-4">
                  <!-- Profile Image -->
                  <div class="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img [src]="testimonial.image"
                         [alt]="testimonial.name"
                         class="w-full h-full object-cover"
                         style="filter: saturate(0.7);">
                  </div>

                  <!-- User Details -->
                  <div class="flex flex-col">
                    <p class="text-gray-800 text-lg leading-7 font-medium"
                       style="font-family: 'Recoleta Medium', 'Recoleta Medium Placeholder', sans-serif;">
                      {{ testimonial.name }}
                    </p>
                    <p class="text-gray-600 text-base leading-6"
                       style="font-family: 'Kumbh Sans', 'Kumbh Sans Placeholder', sans-serif;">
                      {{ testimonial.company }}
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <!-- Duplicate items for seamless loop -->
            <li *ngFor="let testimonial of type2TestimonialsColumn1"
                class="bg-white p-6 rounded-none flex-shrink-0 h-[282px] w-full">
              <div class="flex flex-col gap-5 h-full">
                <!-- Quote -->
                <p class="text-gray-800 text-base leading-6"
                   style="font-family: 'Kumbh Sans', 'Kumbh Sans Placeholder', sans-serif;">
                  "{{ testimonial.quote }}"
                </p>

                <!-- User Info -->
                <div class="flex items-center gap-4">
                  <!-- Profile Image -->
                  <div class="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img [src]="testimonial.image"
                         [alt]="testimonial.name"
                         class="w-full h-full object-cover"
                         style="filter: saturate(0.7);">
                  </div>

                  <!-- User Details -->
                  <div class="flex flex-col">
                    <p class="text-gray-800 text-lg leading-7 font-medium"
                       style="font-family: 'Recoleta Medium', 'Recoleta Medium Placeholder', sans-serif;">
                      {{ testimonial.name }}
                    </p>
                    <p class="text-gray-600 text-base leading-6"
                       style="font-family: 'Kumbh Sans', 'Kumbh Sans Placeholder', sans-serif;">
                      {{ testimonial.company }}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- Column 2 -->
        <div class="flex-1 h-full overflow-hidden relative"
             style="mask: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17.5%, rgb(0, 0, 0) 82.5%, rgba(0, 0, 0, 0) 100%);">
          <ul class="flex flex-col gap-6 animate-scroll-down">
            <li *ngFor="let testimonial of type2TestimonialsColumn2"
                class="bg-white p-6 rounded-none flex-shrink-0 h-[282px] w-full">
              <div class="flex flex-col gap-5 h-full">
                <!-- Quote -->
                <p class="text-gray-800 text-base leading-6"
                   style="font-family: 'Kumbh Sans', 'Kumbh Sans Placeholder', sans-serif;">
                  "{{ testimonial.quote }}"
                </p>

                <!-- User Info -->
                <div class="flex items-center gap-4">
                  <!-- Profile Image -->
                  <div class="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img [src]="testimonial.image"
                         [alt]="testimonial.name"
                         class="w-full h-full object-cover"
                         style="filter: saturate(0.7);">
                  </div>

                  <!-- User Details -->
                  <div class="flex flex-col">
                    <p class="text-gray-800 text-lg leading-7 font-medium"
                       style="font-family: 'Recoleta Medium', 'Recoleta Medium Placeholder', sans-serif;">
                      {{ testimonial.name }}
                    </p>
                    <p class="text-gray-600 text-base leading-6"
                       style="font-family: 'Kumbh Sans', 'Kumbh Sans Placeholder', sans-serif;">
                      {{ testimonial.company }}
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <!-- Duplicate items for seamless loop -->
            <li *ngFor="let testimonial of type2TestimonialsColumn2"
                class="bg-white p-6 rounded-none flex-shrink-0 h-[282px] w-full">
              <div class="flex flex-col gap-5 h-full">
                <!-- Quote -->
                <p class="text-gray-800 text-base leading-6"
                   style="font-family: 'Kumbh Sans', 'Kumbh Sans Placeholder', sans-serif;">
                  "{{ testimonial.quote }}"
                </p>

                <!-- User Info -->
                <div class="flex items-center gap-4">
                  <!-- Profile Image -->
                  <div class="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img [src]="testimonial.image"
                         [alt]="testimonial.name"
                         class="w-full h-full object-cover"
                         style="filter: saturate(0.7);">
                  </div>

                  <!-- User Details -->
                  <div class="flex flex-col">
                    <p class="text-gray-800 text-lg leading-7 font-medium"
                       style="font-family: 'Recoleta Medium', 'Recoleta Medium Placeholder', sans-serif;">
                      {{ testimonial.name }}
                    </p>
                    <p class="text-gray-600 text-base leading-6"
                       style="font-family: 'Kumbh Sans', 'Kumbh Sans Placeholder', sans-serif;">
                      {{ testimonial.company }}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <style>
      @keyframes scroll-up {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-50%);
        }
      }

      @keyframes scroll-down {
        0% {
          transform: translateY(-50%);
        }
        100% {
          transform: translateY(0);
        }
      }

      .animate-scroll-up {
        animation: scroll-up 20s linear infinite;
      }

      .animate-scroll-down {
        animation: scroll-down 20s linear infinite;
      }
    </style>
  `
})
export class ResenaComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() type: 'type-1' | 'type-2' = 'type-1';
  
  currentIndex = 0;
  autoplayInterval: any;

  testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Charging by body, mind, and spirit with Luminous Labs and meditation is one of my favourite health stacks.",
      name: "Carrie",
      title: "Habit Change Coach",
      goal: "Wanted increased resilience",
      image: "https://cdn.prod.website-files.com/671b3356a4bc707cb991d139/6745d86fc98201a5ad90d71d_carrie_nurturedhealing.webp",
      instagramHandle: "@nurturedhealing",
      instagramUrl: "https://www.instagram.com/nurturedhealing/"
    },
    {
      id: 2,
      quote: "I love using RLT as an athlete and trainer: better performance, less soreness, and faster recovery.",
      name: "Kern",
      title: "Certified Health Coach",
      goal: "Looked for increased sports performance",
      image: "https://cdn.prod.website-files.com/671b3356a4bc707cb991d139/6745d80a68aa5f7427410f40_kern_kernhealthfitnesshealth.webp",
      instagramHandle: "@kernhealthfitnesshealth",
      instagramUrl: "https://www.luminouslabs.health/?r=0#"
    },
    {
      id: 3,
      quote: "I love my Luminous Labs device for general wellness, skin health, and healing from surgery.",
      name: "Shani",
      title: "Whole30 Coach",
      goal: "Wanted to support skin health and overall wellness",
      image: "https://cdn.prod.website-files.com/671b3356a4bc707cb991d139/6745d7c9185f784b932ce621_shani_simplewholepaleo.webp",
      instagramHandle: "@simplewholepaleo",
      instagramUrl: "https://www.instagram.com/simplewholepaleo/"
    },
    {
      id: 4,
      quote: "This has to be one of the most helpful recovery tools I've ever used. Today I am using it for my ankle and overall muscle soreness due to a hard weekend of training.",
      name: "Dimitri",
      title: "Fitness trainer",
      goal: "Looked for muscle recovery",
      image: "https://cdn.prod.website-files.com/671b3356a4bc707cb991d139/6745d7ae98de39f322a6931e_dimitri_dimitribergados.webp",
      instagramHandle: "@dimitribergados",
      instagramUrl: "https://www.instagram.com/dimitribergados/"
    },
    {
      id: 5,
      quote: "For me, red light therapy has become indispensable, as the application has a positive effect on my system, partly measurable and partly subjective.",
      name: "Marco",
      title: "",
      goal: "Wanted to support his daily performance",
      image: "https://cdn.prod.website-files.com/671b3356a4bc707cb991d139/6745d753b9fd8070329f0005_marco_minimalistbiohacker.webp",
      instagramHandle: "@minimalistbiohacker",
      instagramUrl: "https://www.instagram.com/minimalist_biohacker/"
    }
  ];

  ngOnInit() {
    this.startAutoplay();
  }

  ngAfterViewInit() {
    // Additional setup if needed
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.resetAutoplay();
  }

  previousSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
    this.resetAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  resetAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
