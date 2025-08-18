import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Type 1: Medical Professionals -->
    <section *ngIf="type === 'type-1'" 
             class="bg-white overflow-hidden py-16 lg:py-24">
      <div class="px-6 lg:px-10">
        <div class="flex justify-center mx-auto max-w-7xl w-full relative">
          <div class="flex flex-col gap-12">
            <!-- Header Section -->
            <div class="grid gap-0 grid-rows-[auto_1fr] lg:grid-cols-[1fr_auto]">
              <div class="flex flex-col gap-4">
                <div class="mb-4">
                  <h2 class="text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-charcoal-900">
                    <span>Developed by world-class </span>
                    <br class="hidden lg:inline">
                    <span>medical professionals</span>
                  </h2>
                </div>
                <p class="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Supported by the world's top longevity clinicians and MDs.
                </p>
              </div>
              <div class="flex flex-col justify-end mt-8 lg:mt-0">
                <div class="flex items-end gap-8 lg:gap-10 flex-wrap">
                  <img loading="lazy" 
                       alt="Stanford University" 
                       src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6872bd59573993b99def2932_logo-stanford.svg" 
                       class="grayscale max-h-10 max-w-full opacity-60">
                  <img loading="lazy" 
                       alt="Harvard University" 
                       src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6872bd59e1c1fed237f2b998_logo-harvard.svg" 
                       class="grayscale max-h-10 max-w-full opacity-60">
                  <img loading="lazy" 
                       alt="UCLA" 
                       src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6872bd59fd93859e177910bc_logo-ucla.svg" 
                       class="grayscale max-h-10 max-w-full opacity-60">
                </div>
              </div>
            </div>

            <!-- Team Grid -->
            <div class="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <!-- Dr Anant Vinjamoori -->
              <div class="flex flex-col gap-5">
                <div class="aspect-square rounded-3xl overflow-hidden relative">
                  <img alt="Dr Anant Vinjamoori" 
                       src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/688286f9a0d5aaa42ec70b82_MD%20Profiles%201.avif" 
                       class="absolute inset-0 w-full h-full object-cover">
                </div>
                <div class="flex flex-col gap-1.5">
                  <h3 class="text-lg lg:text-xl font-medium text-charcoal-900">
                    Dr Anant Vinjamoori
                  </h3>
                  <p class="text-gray-600 text-sm lg:text-base">
                    Superpower Chief Longevity Officer, Harvard MD & MBA
                  </p>
                </div>
              </div>

              <!-- Dr Leigh Erin Connelly -->
              <div class="flex flex-col gap-5">
                <div class="aspect-square rounded-3xl overflow-hidden relative">
                  <img alt="Dr Leigh Erin Connelly" 
                       src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68828720c595517f8c1a5690_MD%20Profiles%202.avif" 
                       class="absolute inset-0 w-full h-full object-cover">
                </div>
                <div class="flex flex-col gap-1.5">
                  <h3 class="text-lg lg:text-xl font-medium text-charcoal-900">
                    Dr Leigh Erin Connelly
                  </h3>
                  <p class="text-gray-600 text-sm lg:text-base">
                    Clinician & Founder of The Centre for New Medicine
                  </p>
                </div>
              </div>

              <!-- Dr Molly Maloof -->
              <div class="flex flex-col gap-5">
                <div class="aspect-square rounded-3xl overflow-hidden relative">
                  <img alt="Dr Molly Maloof" 
                       src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/688286f9b2e15450e725fd4d_MD%20Profiles%203.avif" 
                       class="absolute inset-0 w-full h-full object-cover">
                </div>
                <div class="flex flex-col gap-1.5">
                  <h3 class="text-lg lg:text-xl font-medium text-charcoal-900">
                    Dr Molly Maloof
                  </h3>
                  <p class="text-gray-600 text-sm lg:text-base">
                    Longevity Physician, Stanford Professor
                  </p>
                </div>
              </div>

              <!-- Dr Abe Malkin -->
              <div class="flex flex-col gap-5">
                <div class="aspect-square rounded-3xl overflow-hidden relative">
                  <img alt="Dr Abe Malkin" 
                       src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6882877758e3701f62f9c02f_MD%20Profiles%204.avif" 
                       class="absolute inset-0 w-full h-full object-cover">
                </div>
                <div class="flex flex-col gap-1.5">
                  <h3 class="text-lg lg:text-xl font-medium text-charcoal-900">
                    Dr Abe Malkin
                  </h3>
                  <p class="text-gray-600 text-sm lg:text-base">
                    Founder and Medical Director of Concierge MD
                  </p>
                </div>
              </div>

              <!-- Dr Robert Lufkin -->
              <div class="flex flex-col gap-5">
                <div class="aspect-square rounded-3xl overflow-hidden relative">
                  <img alt="Dr Robert Lufkin" 
                       src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/688286f934288c010f3a589a_MD%20Profiles%205.avif" 
                       class="absolute inset-0 w-full h-full object-cover">
                </div>
                <div class="flex flex-col gap-1.5">
                  <h3 class="text-lg lg:text-xl font-medium text-charcoal-900">
                    Dr Robert Lufkin
                  </h3>
                  <p class="text-gray-600 text-sm lg:text-base">
                    UCLA Medical Professor, NYT Bestselling Author
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Type 2: Founders and Team -->
    <section *ngIf="type === 'type-2'" 
             class="bg-emerald-950">
      <div class="grid gap-5 grid-cols-8 max-w-7xl mx-auto px-5 py-32 relative">
        <!-- Section Header -->
        <h2 class="text-emerald-300 font-medium text-lg col-span-8 md:col-span-3 leading-tight">
          Meet Our Founders
        </h2>
        <h3 class="text-emerald-100 text-3xl md:text-5xl font-semibold col-span-8 md:col-span-6 leading-tight pb-32 pt-4">
          Vivaltes is, above all, the story of passionate scientists who have
          combined their expertise to deliver the future of health product R&D.
        </h3>

        <!-- Founders Grid -->
        <ul class="flex items-start grid grid-cols-8 gap-5 col-span-8 relative z-10">
          <!-- Dr. Marjolein Wildwater -->
          <li class="grid grid-cols-4 col-span-8 md:col-span-4">
            <img height="500" width="500" loading="lazy" 
                 alt="Dr. Marjolein Wildwater" 
                 src="https://vivaltes.com/assets/dr-marjolein-wildwater.webp" 
                 class="col-span-3 w-full">
            <div class="col-span-4 md:col-span-1 md:col-start-2">
              <h4 class="text-white text-2xl md:text-3xl font-semibold leading-10 pb-2 pt-5">
                Dr. Marjolein Wildwater
              </h4>
              <h5 class="text-emerald-300 text-xl font-medium leading-6">
                Founder, CEO
              </h5>
              <p class="text-emerald-300 font-medium leading-5 py-4">
                Dr. Marjolein Wildwater is a co-founder of Vivaltes and a
                distinguished scientist with an impressive background in
                research. Her contributions to science include publications in
                Nature and Cell, reflecting her expertise and innovative
                approach. Recognised as a top scientific talent, she has
                received both national and international awards for her
                creativity, leadership, and groundbreaking work. Under her
                guidance, the Vivaltes team has evolved into an international,
                customer-focused powerhouse, known for its excellence and
                innovation.
              </p>
              <div>
                <a target="_blank" title="LinkedIn" 
                   href="https://www.linkedin.com/in/marjolein-wildwater-42b65a7/" 
                   class="border-b border-white text-white font-semibold leading-5 uppercase text-sm hover:opacity-80 transition-opacity">
                  IN
                </a>
              </div>
            </div>
          </li>

          <!-- Dr. Gerrit Keizer -->
          <li class="grid grid-cols-3 col-span-8 md:col-span-3 md:col-start-6 pt-32">
            <img height="500" width="500" loading="lazy" 
                 alt="Dr. Gerrit Keizer" 
                 src="https://vivaltes.com/assets/dr-gerrit-keizer.webp" 
                 class="col-span-2 w-full">
            <div class="col-span-3">
              <h4 class="text-white text-2xl md:text-3xl font-semibold leading-10 pb-2 pt-5">
                Dr. Gerrit Keizer
              </h4>
              <h5 class="text-emerald-300 text-xl font-medium leading-6">
                Founder
              </h5>
              <p class="text-emerald-300 font-medium leading-5 py-4">
                Dr. Gerrit Keizer is a co-founder of Vivaltes and a
                science-driven entrepreneur with extensive experience in both
                multinational corporations and start-ups. He has held senior
                managerial positions at leading companies and successfully
                founded multiple businesses across the Netherlands, Germany, and
                Poland.
              </p>
              <div>
                <a target="_blank" title="LinkedIn" 
                   href="https://www.linkedin.com/in/gerrit-keizer-4107b212/" 
                   class="border-b border-white text-white font-semibold leading-5 uppercase text-sm hover:opacity-80 transition-opacity">
                  IN
                </a>
              </div>
            </div>
          </li>

          <!-- Robert du Mosch -->
          <li class="flex items-center grid grid-cols-5 col-span-8 md:col-span-6 md:col-start-2 pt-16">
            <img height="500" width="500" loading="lazy" 
                 alt="Robert du Mosch" 
                 src="https://vivaltes.com/assets/robert-du-mosch.webp" 
                 class="col-span-2 w-full pr-8">
            <div class="col-span-3 pr-16">
              <h4 class="text-white text-2xl md:text-3xl font-semibold leading-10 pb-2 pt-5">
                Robert du Mosch
              </h4>
              <h5 class="text-emerald-300 text-xl font-medium leading-6">
                Chief Commercial Officer
              </h5>
              <p class="text-emerald-300 font-medium leading-5 py-4">
                Robert du Mosch brings over 38 years of experience in general
                management, global marketing, and category management. With a
                proven track record as Head of Sales at iconic companies such as
                Nike, he has been instrumental in driving the success of
                health-focused products, including world-class equestrian
                supplements and medicinal cannabis, through innovation and
                strategic branding.
              </p>
              <div>
                <a target="_blank" title="LinkedIn" 
                   href="https://www.linkedin.com/in/robert-du-mosch-6a6b876/" 
                   class="border-b border-white text-white font-semibold leading-5 uppercase text-sm hover:opacity-80 transition-opacity">
                  IN
                </a>
              </div>
            </div>
          </li>
        </ul>

        <!-- Innovation Team Header -->
        <h3 class="text-emerald-100 text-2xl md:text-3xl font-semibold col-span-8 md:col-span-7 md:col-start-2 leading-10 mt-32 pb-16">
          The people behind the innovation
        </h3>

        <!-- Team Grid -->
        <ul class="grid grid-cols-4 gap-8 col-span-8">
          <!-- Dr. Sandra Langeveld -->
          <li class="flex items-center flex-col">
            <img loading="lazy" height="500" width="500" 
                 alt="Dr. Sandra Langeveld" 
                 src="https://vivaltes.com/assets/dr-sandra-langeveld.webp" 
                 class="w-full max-w-60">
            <h4 class="text-white text-xl md:text-2xl font-semibold leading-8 pb-2 pt-4 w-full">
              Dr. Sandra Langeveld
            </h4>
            <p class="text-emerald-300 font-medium leading-5 w-full">
              Chief Human Resources Officer
            </p>
          </li>

          <!-- Dr. Jason Kroll -->
          <li class="flex items-center flex-col">
            <img loading="lazy" height="500" width="500" 
                 alt="Dr. Jason Kroll" 
                 src="https://vivaltes.com/assets/dr-jason-kroll.webp" 
                 class="w-full max-w-60">
            <h4 class="text-white text-xl md:text-2xl font-semibold leading-8 pb-2 pt-4 w-full">
              Dr. Jason Kroll
            </h4>
            <p class="text-emerald-300 font-medium leading-5 w-full">
              Lead Scientist
            </p>
          </li>

          <!-- Dr. Vincent Portegijs -->
          <li class="flex items-center flex-col">
            <img loading="lazy" height="500" width="500" 
                 alt="Dr. Vincent Portegijs" 
                 src="https://vivaltes.com/assets/dr-vincent-portegijs.webp" 
                 class="w-full max-w-60">
            <h4 class="text-white text-xl md:text-2xl font-semibold leading-8 pb-2 pt-4 w-full">
              Dr. Vincent Portegijs
            </h4>
            <p class="text-emerald-300 font-medium leading-5 w-full">
              Lead Scientist
            </p>
          </li>

          <!-- Dr. Eefje Poppelaars -->
          <li class="flex items-center flex-col">
            <img loading="lazy" height="500" width="500" 
                 alt="Dr. Eefje Poppelaars" 
                 src="https://vivaltes.com/assets/dr-eefje-poppelaars.webp" 
                 class="w-full max-w-60">
            <h4 class="text-white text-xl md:text-2xl font-semibold leading-8 pb-2 pt-4 w-full">
              Dr. Eefje Poppelaars
            </h4>
            <p class="text-emerald-300 font-medium leading-5 w-full">
              Lead Data Scientist
            </p>
          </li>

          <!-- Dr. Mo Arkani -->
          <li class="flex items-center flex-col">
            <img loading="lazy" height="500" width="500" 
                 alt="Dr. Mo Arkani" 
                 src="https://vivaltes.com/assets/dr-mo-arkani.webp" 
                 class="w-full max-w-60">
            <h4 class="text-white text-xl md:text-2xl font-semibold leading-8 pb-2 pt-4 w-full">
              Dr. Mo Arkani
            </h4>
            <p class="text-emerald-300 font-medium leading-5 w-full">
              Lead Data Scientist
            </p>
          </li>

          <!-- Jesús G. Arellano Spadaro -->
          <li class="flex items-center flex-col">
            <img loading="lazy" height="500" width="500" 
                 alt="Jesús G. Arellano Spadaro, MSc." 
                 src="https://vivaltes.com/assets/jesus-arellano-spadaro.webp" 
                 class="w-full max-w-60">
            <h4 class="text-white text-xl md:text-2xl font-semibold leading-8 pb-2 pt-4 w-full">
              Jesús G. Arellano Spadaro, MSc.
            </h4>
            <p class="text-emerald-300 font-medium leading-5 w-full">
              Scientist
            </p>
          </li>

          <!-- Rashad Tangali -->
          <li class="flex items-center flex-col">
            <img loading="lazy" height="500" width="500" 
                 alt="Rashad Tangali, MSc." 
                 src="https://vivaltes.com/assets/rashad-tangali.webp" 
                 class="w-full max-w-60">
            <h4 class="text-white text-xl md:text-2xl font-semibold leading-8 pb-2 pt-4 w-full">
              Rashad Tangali, MSc.
            </h4>
            <p class="text-emerald-300 font-medium leading-5 w-full">
              Data Scientist
            </p>
          </li>

          <!-- Liam Kirwan -->
          <li class="flex items-center flex-col">
            <img loading="lazy" height="500" width="500" 
                 alt="Liam Kirwan, MSc." 
                 src="https://vivaltes.com/assets/liam-kirwan.webp" 
                 class="w-full max-w-60">
            <h4 class="text-white text-xl md:text-2xl font-semibold leading-8 pb-2 pt-4 w-full">
              Liam Kirwan, MSc.
            </h4>
            <p class="text-emerald-300 font-medium leading-5 w-full">
              Researcher & Marketing Coordinator
            </p>
          </li>

          <!-- Luuk Huisman -->
          <li class="flex items-center flex-col">
            <img loading="lazy" height="500" width="500" 
                 alt="Luuk Huisman, MSc." 
                 src="https://vivaltes.com/assets/luuk-huisman.webp" 
                 class="w-full max-w-60">
            <h4 class="text-white text-xl md:text-2xl font-semibold leading-8 pb-2 pt-4 w-full">
              Luuk Huisman, MSc.
            </h4>
            <p class="text-emerald-300 font-medium leading-5 w-full">
              Researcher & GMO Officer
            </p>
          </li>

          <!-- Ivo van de Pasch -->
          <li class="flex items-center flex-col">
            <img loading="lazy" height="500" width="500" 
                 alt="Ivo van de Pasch, MSc." 
                 src="https://vivaltes.com/assets/ivo-van-de-pasch.webp" 
                 class="w-full max-w-60">
            <h4 class="text-white text-xl md:text-2xl font-semibold leading-8 pb-2 pt-4 w-full">
              Ivo van de Pasch, MSc.
            </h4>
            <p class="text-emerald-300 font-medium leading-5 w-full">
              Researcher
            </p>
          </li>

          <!-- Max Beukelman -->
          <li class="flex items-center flex-col">
            <img loading="lazy" height="500" width="500" 
                 alt="Max Beukelman" 
                 src="https://vivaltes.com/assets/max-beukelman.webp" 
                 class="w-full max-w-60">
            <h4 class="text-white text-xl md:text-2xl font-semibold leading-8 pb-2 pt-4 w-full">
              Max Beukelman
            </h4>
            <p class="text-emerald-300 font-medium leading-5 w-full">
              Researcher
            </p>
          </li>

          <!-- Mette Schroeder -->
          <li class="flex items-center flex-col">
            <img loading="lazy" height="500" width="500" 
                 alt="Mette Schroeder, MSc." 
                 src="https://vivaltes.com/assets/mette-schroeder.webp" 
                 class="w-full max-w-60">
            <h4 class="text-white text-xl md:text-2xl font-semibold leading-8 pb-2 pt-4 w-full">
              Mette Schroeder, MSc.
            </h4>
            <p class="text-emerald-300 font-medium leading-5 w-full">
              Researcher
            </p>
          </li>
        </ul>

        <!-- Advisors Section -->
        <h3 class="text-emerald-100 text-2xl md:text-3xl font-semibold col-span-8 md:col-span-7 md:col-start-2 leading-10 pb-16 pt-16">
          Our trusted advisors
        </h3>

        <ul class="grid grid-cols-4 gap-5 col-span-8">
          <li>
            <h4 class="text-white text-xl md:text-2xl font-semibold leading-8">
              Dr. ir. M.T.O. Chiel Jonker
            </h4>
            <h5 class="text-emerald-300 font-medium leading-5 pt-2">
              Scientific Advisor
            </h5>
            <p class="text-emerald-300 font-medium leading-5">
              Assistant professor at Utrecht University, Institute for Risk
              Assessment Sciences (IRAS). Expert in chemical exposure assessment
              in toxicology.
            </p>
          </li>
          <li>
            <h4 class="text-white text-xl md:text-2xl font-semibold leading-8">
              Dr. Cees J. Beukelman
            </h4>
            <h5 class="text-emerald-300 font-medium leading-5 pt-2">
              Scientific Advisor
            </h5>
            <p class="text-emerald-300 font-medium leading-5">
              Expert in biochemistry and drug development.
            </p>
          </li>
          <li>
            <h4 class="text-white text-xl md:text-2xl font-semibold leading-8">
              Mark de Klerk
            </h4>
            <h5 class="text-emerald-300 font-medium leading-5 pt-2">
              Business Development Advisor
            </h5>
            <p class="text-emerald-300 font-medium leading-5">
              Worked over 25 years at Nike as Senior Director of Sports
              Marketing (East/Central Europe & EMEA). Expert in consumer
              marketing and business development.
            </p>
          </li>
        </ul>
      </div>
    </section>
  `
})
export class EquipoComponent {
  @Input() type: 'type-1' | 'type-2' = 'type-1';
}
