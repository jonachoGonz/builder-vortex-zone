import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialPost {
  id: number;
  type: 'video' | 'text';
  platform: 'instagram' | 'youtube' | 'twitter' | 'linkedin';
  username: string;
  verified: boolean;
  followers: string;
  description?: string;
  content: string;
  profileImage: string;
  videoUrl?: string;
  socialUrl: string;
}

@Component({
  selector: 'app-rrss',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Type 1: Social Media Testimonials Grid -->
    <section *ngIf="type === 'type-1'" class="bg-white py-12 px-10">
      <div class="max-w-6xl mx-auto">
        
        <!-- Header Section -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div class="lg:col-span-2">
            <div class="flex flex-col gap-4 mb-4">
              <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                Superpower is changing thousands&nbsp;of lives
              </h2>
            </div>
            <p class="text-lg lg:text-xl text-gray-600 leading-relaxed tracking-tight">
              Real people to real data to personalized impact
            </p>
          </div>
          
          <div class="flex flex-col justify-end items-end">
            <div class="flex items-center">
              <a 
                href="https://superpower.com/reviews" 
                target="_blank"
                class="bg-black text-white px-6 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors cursor-pointer text-center">
                See more reviews
              </a>
            </div>
          </div>
        </div>

        <!-- Social Posts Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <!-- Column 1 -->
          <div class="flex flex-col gap-4">
            <!-- Video Post 1 -->
            <a 
              href="https://www.instagram.com/reel/DMIJhpPiktZ/" 
              target="_blank"
              class="relative rounded-2xl overflow-hidden shadow-sm h-96 group cursor-pointer">
              
              <div class="absolute inset-0 bg-cover bg-center bg-gray-900">
                <div class="w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <!-- Simulated video background -->
                  <div class="w-full h-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400"></div>
                </div>
              </div>
              
              <!-- Profile Info Overlay -->
              <div class="absolute top-6 left-6 flex items-center gap-2 z-10">
                <img 
                  src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6879e389339c62b26de7b1c5_superpower-thumbnail-testimonialsimage-4.png" 
                  alt="@mytechceo"
                  class="w-10 h-10 rounded-full border-2 border-white">
                <div class="flex flex-col text-white">
                  <div class="flex items-center gap-1">
                    <span class="font-medium">@mytechceo</span>
                    <!-- Verification Badge -->
                    <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <path d="M9.96702 0.650391L11.1675 2.50889L13.3795 2.61739L13.4915 4.82939L15.35 6.02989L14.342 8.00039L15.35 9.96739L13.4915 11.1679L13.383 13.3799L11.171 13.4919L9.97052 15.3504L8.00002 14.3424L6.03302 15.3504L4.83252 13.4919L2.62052 13.3834L2.50852 11.1714L0.650024 9.97089L1.65802 8.00039L0.650024 6.03339L2.50852 4.83289L2.61702 2.62089L4.82902 2.50889L6.02952 0.650391L8.00002 1.65839L9.96702 0.650391Z" fill="#42A5F5"/>
                      <path d="M7.0865 10.5378L4.815 8.26632L5.557 7.52432L7.1005 9.06432L10.4465 5.81982L11.178 6.57232L7.0865 10.5378Z" fill="white"/>
                    </svg>
                  </div>
                  <div class="text-xs opacity-60">254k followers</div>
                </div>
              </div>
            </a>

            <!-- Text Post 1 -->
            <a 
              href="https://superpower.com/reviews#" 
              target="_blank"
              class="bg-gray-100 rounded-2xl p-5 cursor-pointer hover:bg-gray-50 transition-colors">
              
              <div class="flex items-start gap-3 mb-4">
                <img 
                  src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6879e3897b9dfebf63d3169a_superpower-thumbnail-testimonialsimage.png" 
                  alt="Cassandra Bankson"
                  class="w-10 h-10 rounded-full">
                <div class="flex-1">
                  <div class="flex items-center gap-1 mb-1">
                    <span class="font-medium text-gray-900">Cassandra Bankson, 32</span>
                    <!-- Verification Badge -->
                    <svg class="w-4 h-4 opacity-60" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/>
                    </svg>
                  </div>
                  <div class="text-xs text-gray-500 opacity-60">2.4M followers on Youtube</div>
                </div>
              </div>
              
              <p class="text-sm text-gray-700 leading-relaxed">
                "Superpower enables me to understand my health and wellness concerns before they become big problems again."
              </p>
            </a>
          </div>

          <!-- Column 2 -->
          <div class="flex flex-col gap-4">
            <!-- Text Post 2 -->
            <a 
              href="https://x.com/_alexbrogan/status/1856907844928282763" 
              target="_blank"
              class="bg-gray-100 rounded-2xl p-5 cursor-pointer hover:bg-gray-50 transition-colors">
              
              <div class="flex items-start gap-3 mb-4">
                <img 
                  src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6879e38960268c4e8ef92532_superpower-thumbnail-testimonialsimage-1.png" 
                  alt="Alex Brogan"
                  class="w-10 h-10 rounded-full">
                <div class="flex-1">
                  <div class="flex items-center gap-1 mb-1">
                    <span class="font-medium text-gray-900">Alex Brogan</span>
                  </div>
                  <div class="text-xs text-gray-500 opacity-60">300k followers on X</div>
                </div>
              </div>
              
              <p class="text-sm text-gray-700 leading-relaxed">
                "The only thing I'm not impressed with is with my biological age being 3.5 years above my actual age."
              </p>
            </a>

            <!-- Video Post 2 -->
            <a 
              href="https://www.instagram.com/p/DMJHkvfhBfh/" 
              target="_blank"
              class="relative rounded-2xl overflow-hidden shadow-sm h-96 group cursor-pointer">
              
              <div class="absolute inset-0 bg-cover bg-center bg-gray-900">
                <div class="w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <!-- Simulated video background -->
                  <div class="w-full h-full bg-gradient-to-br from-blue-600 via-teal-500 to-green-400"></div>
                </div>
              </div>
              
              <!-- Profile Info Overlay -->
              <div class="absolute top-6 left-6 flex items-center gap-2 z-10">
                <img 
                  src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6879e3897a18f8fa77088f85_superpower-thumbnail-testimonialsimage-5.png" 
                  alt="@emmyxtech"
                  class="w-10 h-10 rounded-full border-2 border-white">
                <div class="flex flex-col text-white">
                  <div class="flex items-center gap-1">
                    <span class="font-medium">@emmyxtech</span>
                    <!-- Verification Badge -->
                    <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <path d="M9.96702 0.650391L11.1675 2.50889L13.3795 2.61739L13.4915 4.82939L15.35 6.02989L14.342 8.00039L15.35 9.96739L13.4915 11.1679L13.383 13.3799L11.171 13.4919L9.97052 15.3504L8.00002 14.3424L6.03302 15.3504L4.83252 13.4919L2.62052 13.3834L2.50852 11.1714L0.650024 9.97089L1.65802 8.00039L0.650024 6.03339L2.50852 4.83289L2.61702 2.62089L4.82902 2.50889L6.02952 0.650391L8.00002 1.65839L9.96702 0.650391Z" fill="#42A5F5"/>
                      <path d="M7.0865 10.5378L4.815 8.26632L5.557 7.52432L7.1005 9.06432L10.4465 5.81982L11.178 6.57232L7.0865 10.5378Z" fill="white"/>
                    </svg>
                  </div>
                  <div class="text-xs opacity-60">368k followers</div>
                </div>
              </div>
            </a>
          </div>

          <!-- Column 3 -->
          <div class="flex flex-col gap-4">
            <!-- Video Post 3 -->
            <a 
              href="https://www.instagram.com/p/DMMT5m6NZEC/" 
              target="_blank"
              class="relative rounded-2xl overflow-hidden shadow-sm h-96 group cursor-pointer">
              
              <div class="absolute inset-0 bg-cover bg-center bg-gray-900">
                <div class="w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <!-- Simulated video background -->
                  <div class="w-full h-full bg-gradient-to-br from-red-600 via-pink-500 to-purple-400"></div>
                </div>
              </div>
              
              <!-- Profile Info Overlay -->
              <div class="absolute top-6 left-6 flex items-center gap-2 z-10">
                <img 
                  src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6879e38974b970e954b903e6_superpower-thumbnail-testimonialsimage-6.png" 
                  alt="Quentin Johnston"
                  class="w-10 h-10 rounded-full border-2 border-white">
                <div class="flex flex-col text-white">
                  <div class="flex items-center gap-1">
                    <span class="font-medium">Quentin Johnston</span>
                    <!-- Verification Badge -->
                    <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <path d="M9.96702 0.650391L11.1675 2.50889L13.3795 2.61739L13.4915 4.82939L15.35 6.02989L14.342 8.00039L15.35 9.96739L13.4915 11.1679L13.383 13.3799L11.171 13.4919L9.97052 15.3504L8.00002 14.3424L6.03302 15.3504L4.83252 13.4919L2.62052 13.3834L2.50852 11.1714L0.650024 9.97089L1.65802 8.00039L0.650024 6.03339L2.50852 4.83289L2.61702 2.62089L4.82902 2.50889L6.02952 0.650391L8.00002 1.65839L9.96702 0.650391Z" fill="#42A5F5"/>
                      <path d="M7.0865 10.5378L4.815 8.26632L5.557 7.52432L7.1005 9.06432L10.4465 5.81982L11.178 6.57232L7.0865 10.5378Z" fill="white"/>
                    </svg>
                  </div>
                  <div class="text-xs opacity-60">NFL player</div>
                </div>
              </div>
            </a>

            <!-- Text Post 3 -->
            <a 
              href="https://www.instagram.com/victoriagarrickbrowne/" 
              target="_blank"
              class="bg-gray-100 rounded-2xl p-5 cursor-pointer hover:bg-gray-50 transition-colors">
              
              <div class="flex items-start gap-3 mb-4">
                <img 
                  src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6879e3894ad375cab97e9847_superpower-thumbnail-testimonialsimage-2.png" 
                  alt="@victoriagarrickbrowne"
                  class="w-10 h-10 rounded-full">
                <div class="flex-1">
                  <div class="flex items-center gap-1 mb-1">
                    <span class="font-medium text-gray-900">@victoriagarrickbrowne</span>
                    <!-- Verification Badge -->
                    <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <path d="M9.96702 0.650391L11.1675 2.50889L13.3795 2.61739L13.4915 4.82939L15.35 6.02989L14.342 8.00039L15.35 9.96739L13.4915 11.1679L13.383 13.3799L11.171 13.4919L9.97052 15.3504L8.00002 14.3424L6.03302 15.3504L4.83252 13.4919L2.62052 13.3834L2.50852 11.1714L0.650024 9.97089L1.65802 8.00039L0.650024 6.03339L2.50852 4.83289L2.61702 2.62089L4.82902 2.50889L6.02952 0.650391L8.00002 1.65839L9.96702 0.650391Z" fill="#42A5F5"/>
                      <path d="M7.0865 10.5378L4.815 8.26632L5.557 7.52432L7.1005 9.06432L10.4465 5.81982L11.178 6.57232L7.0865 10.5378Z" fill="white"/>
                    </svg>
                  </div>
                  <div class="text-xs text-gray-500 opacity-60">523k followers, Forbes 30U30</div>
                </div>
              </div>
              
              <p class="text-sm text-gray-700 leading-relaxed">
                " I felt so validated...it's not just like, oh, I burnt out. I'm feeling like I got answers and I'm hopeful."
              </p>
            </a>
          </div>

          <!-- Column 4 -->
          <div class="flex flex-col gap-4">
            <!-- Text Post 4 -->
            <a 
              href="https://www.linkedin.com/posts/jason-severiano-lampkin_longevity-health-wellness-activity-7270774112405356544-HL04" 
              target="_blank"
              class="bg-gray-100 rounded-2xl p-5 cursor-pointer hover:bg-gray-50 transition-colors">
              
              <div class="flex items-start gap-3 mb-4">
                <img 
                  src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6879e38970da1e0e73424cde_superpower-thumbnail-testimonialsimage%209.png" 
                  alt="Jason Lampkin"
                  class="w-10 h-10 rounded-full">
                <div class="flex-1">
                  <div class="flex items-center gap-1 mb-1">
                    <span class="font-medium text-gray-900">Jason Lampkin</span>
                  </div>
                  <div class="text-xs text-gray-500 opacity-60">Former professional athlete</div>
                </div>
              </div>
              
              <p class="text-sm text-gray-700 leading-relaxed">
                "Seamless testing, quick results, and a detailed follow-up consult left me with actionable insights and a tailored plan"
              </p>
            </a>

            <!-- Video Post 4 -->
            <a 
              href="https://www.instagram.com/p/DMInR8-Rjrl/" 
              target="_blank"
              class="relative rounded-2xl overflow-hidden shadow-sm h-96 group cursor-pointer">
              
              <div class="absolute inset-0 bg-cover bg-center bg-gray-900">
                <div class="w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <!-- Simulated video background -->
                  <div class="w-full h-full bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400"></div>
                </div>
              </div>
              
              <!-- Profile Info Overlay -->
              <div class="absolute top-6 left-6 flex items-center gap-2 z-10">
                <img 
                  src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6879e389c3c2c0000da81800_superpower-thumbnail-testimonialsimage-3.png" 
                  alt="@avnibarman_"
                  class="w-10 h-10 rounded-full border-2 border-white">
                <div class="flex flex-col text-white">
                  <div class="flex items-center gap-1">
                    <span class="font-medium">@avnibarman_</span>
                    <!-- Verification Badge -->
                    <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <path d="M9.96702 0.650391L11.1675 2.50889L13.3795 2.61739L13.4915 4.82939L15.35 6.02989L14.342 8.00039L15.35 9.96739L13.4915 11.1679L13.383 13.3799L11.171 13.4919L9.97052 15.3504L8.00002 14.3424L6.03302 15.3504L4.83252 13.4919L2.62052 13.3834L2.50852 11.1714L0.650024 9.97089L1.65802 8.00039L0.650024 6.03339L2.50852 4.83289L2.61702 2.62089L4.82902 2.50889L6.02952 0.650391L8.00002 1.65839L9.96702 0.650391Z" fill="#42A5F5"/>
                      <path d="M7.0865 10.5378L4.815 8.26632L5.557 7.52432L7.1005 9.06432L10.4465 5.81982L11.178 6.57232L7.0865 10.5378Z" fill="white"/>
                    </svg>
                  </div>
                  <div class="text-xs opacity-60">228k followers</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Type 2: Instagram Feed Layout -->
    <section *ngIf="type === 'type-2'" class="py-20 px-10">
      <div class="max-w-7xl mx-auto">

        <!-- Header Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div class="lg:col-span-2">
            <h2 class="text-4xl lg:text-5xl font-bold text-purple-800 leading-tight mb-8">
              We're on Instagram
            </h2>
          </div>
          <div class="flex items-end justify-start lg:justify-end">
            <span class="text-4xl lg:text-5xl font-bold text-purple-800 leading-tight">
              @habitsupps
            </span>
          </div>
        </div>

        <!-- Instagram Feed Widget -->
        <div class="relative w-full">
          <div class="bg-white rounded-lg shadow-sm overflow-hidden">

            <!-- Posts Container -->
            <div class="relative overflow-hidden">
              <!-- Posts Grid -->
              <div class="flex overflow-x-auto scrollbar-hide" id="instagram-slider">
                <div class="flex gap-0 min-w-full">

                  <!-- Post 1 -->
                  <div class="w-1/6 flex-shrink-0 bg-white relative group">
                    <a
                      href="https://www.instagram.com/p/DMYyVR2zcrX"
                      target="_blank"
                      class="block relative w-full pt-[100%] overflow-hidden cursor-pointer">

                      <img
                        src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?w=400&h=400&fit=crop&crop=center"
                        alt="Self-care summer tips"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">

                      <!-- Hover Overlay -->
                      <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div class="text-white text-center p-4 text-sm leading-5 max-h-20 overflow-hidden">
                          it's self-care summer 🌺🌊🐚 here's a few of our fave self-care tips to keep you feeling your best this summer ✨
                        </div>
                      </div>

                      <!-- Post Type Icon -->
                      <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                          <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                        </svg>
                      </div>
                    </a>
                  </div>

                  <!-- Post 2 -->
                  <div class="w-1/6 flex-shrink-0 bg-white relative group">
                    <a
                      href="https://www.instagram.com/p/DMWDf1_TWBn"
                      target="_blank"
                      class="block relative w-full pt-[100%] overflow-hidden cursor-pointer">

                      <img
                        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center"
                        alt="Science-backed supplements"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">

                      <!-- Hover Overlay -->
                      <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div class="text-white text-center p-4 text-sm leading-5 max-h-20 overflow-hidden">
                          Level up your wellness routine with our science-backed supplements 💊✨ Women's Multi supports general health + wellness
                        </div>
                      </div>

                      <!-- Post Type Icon -->
                      <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 45.964 45.964">
                          <path d="M32.399,40.565H11.113v1.297c0,2.24,1.838,4.051,4.076,4.051h26.733c2.239,0,4.042-1.811,4.042-4.051V15.13c0-2.237-1.803-4.068-4.042-4.068h-1.415v21.395C40.507,36.904,36.845,40.566,32.399,40.565z"/>
                          <path d="M0,4.102l0,28.355c0,2.241,1.814,4.067,4.051,4.067h28.365c2.237,0,4.066-1.826,4.066-4.067l0-28.356c0-2.238-1.828-4.051-4.066-4.051H4.051C1.814,0.05,0,1.862,0,4.102z"/>
                        </svg>
                      </div>
                    </a>
                  </div>

                  <!-- Post 3 -->
                  <div class="w-1/6 flex-shrink-0 bg-white relative group">
                    <a
                      href="https://www.instagram.com/p/DMHaGpjT7io"
                      target="_blank"
                      class="block relative w-full pt-[100%] overflow-hidden cursor-pointer">

                      <img
                        src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop&crop=center"
                        alt="Women's Multi vitamins"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">

                      <!-- Hover Overlay -->
                      <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div class="text-white text-center p-4 text-sm leading-5 max-h-20 overflow-hidden">
                          Self-care starts here 🌸 Our Women's Multi is packed with 23 essential vitamins and minerals ✨
                        </div>
                      </div>

                      <!-- Post Type Icon -->
                      <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 45.964 45.964">
                          <path d="M32.399,40.565H11.113v1.297c0,2.24,1.838,4.051,4.076,4.051h26.733c2.239,0,4.042-1.811,4.042-4.051V15.13c0-2.237-1.803-4.068-4.042-4.068h-1.415v21.395C40.507,36.904,36.845,40.566,32.399,40.565z"/>
                          <path d="M0,4.102l0,28.355c0,2.241,1.814,4.067,4.051,4.067h28.365c2.237,0,4.066-1.826,4.066-4.067l0-28.356c0-2.238-1.828-4.051-4.066-4.051H4.051C1.814,0.05,0,1.862,0,4.102z"/>
                        </svg>
                      </div>
                    </a>
                  </div>

                  <!-- Post 4 -->
                  <div class="w-1/6 flex-shrink-0 bg-white relative group">
                    <a
                      href="https://www.instagram.com/p/DJ76kyZzrzJ"
                      target="_blank"
                      class="block relative w-full pt-[100%] overflow-hidden cursor-pointer">

                      <img
                        src="https://images.unsplash.com/photo-1610182419520-3b5834c18d30?w=400&h=400&fit=crop&crop=center"
                        alt="Daily wellness checklist"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">

                      <!-- Hover Overlay -->
                      <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div class="text-white text-center p-4 text-sm leading-5 max-h-20 overflow-hidden">
                          Daily checklist 📝✨ What wellness HABITs are you prioritizing today? 🧘🏻‍♀️🍵🎧💌
                        </div>
                      </div>

                      <!-- Post Type Icon -->
                      <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 45.964 45.964">
                          <path d="M32.399,40.565H11.113v1.297c0,2.24,1.838,4.051,4.076,4.051h26.733c2.239,0,4.042-1.811,4.042-4.051V15.13c0-2.237-1.803-4.068-4.042-4.068h-1.415v21.395C40.507,36.904,36.845,40.566,32.399,40.565z"/>
                          <path d="M0,4.102l0,28.355c0,2.241,1.814,4.067,4.051,4.067h28.365c2.237,0,4.066-1.826,4.066-4.067l0-28.356c0-2.238-1.828-4.051-4.066-4.051H4.051C1.814,0.05,0,1.862,0,4.102z"/>
                        </svg>
                      </div>
                    </a>
                  </div>

                  <!-- Post 5 -->
                  <div class="w-1/6 flex-shrink-0 bg-white relative group">
                    <a
                      href="https://www.instagram.com/p/DJpfdKaz6gm"
                      target="_blank"
                      class="block relative w-full pt-[100%] overflow-hidden cursor-pointer">

                      <img
                        src="https://images.unsplash.com/photo-1580013759032-c96505e24c1f?w=400&h=400&fit=crop&crop=center"
                        alt="Hair Growth supplement"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">

                      <!-- Hover Overlay -->
                      <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div class="text-white text-center p-4 text-sm leading-5 max-h-20 overflow-hidden">
                          Your hair's new secret admirer 🎀 Stronger, healthier hair starts here with key nutrients that nourish from within ✨
                        </div>
                      </div>

                      <!-- Post Type Icon -->
                      <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 45.964 45.964">
                          <path d="M32.399,40.565H11.113v1.297c0,2.24,1.838,4.051,4.076,4.051h26.733c2.239,0,4.042-1.811,4.042-4.051V15.13c0-2.237-1.803-4.068-4.042-4.068h-1.415v21.395C40.507,36.904,36.845,40.566,32.399,40.565z"/>
                          <path d="M0,4.102l0,28.355c0,2.241,1.814,4.067,4.051,4.067h28.365c2.237,0,4.066-1.826,4.066-4.067l0-28.356c0-2.238-1.828-4.051-4.066-4.051H4.051C1.814,0.05,0,1.862,0,4.102z"/>
                        </svg>
                      </div>
                    </a>
                  </div>

                  <!-- Post 6 -->
                  <div class="w-1/6 flex-shrink-0 bg-white relative group">
                    <a
                      href="https://www.instagram.com/p/DJSmrfdzuBm"
                      target="_blank"
                      class="block relative w-full pt-[100%] overflow-hidden cursor-pointer">

                      <img
                        src="https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=400&h=400&fit=crop&crop=center"
                        alt="Men's Multi supplement"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">

                      <!-- Hover Overlay -->
                      <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div class="text-white text-center p-4 text-sm leading-5 max-h-20 overflow-hidden">
                          Your all-in-one for feeling your best ✨ HABIT's Men's Multi supports energy, immunity, mood + sleep with 23 essential nutrients
                        </div>
                      </div>

                      <!-- Post Type Icon -->
                      <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 45.964 45.964">
                          <path d="M32.399,40.565H11.113v1.297c0,2.24,1.838,4.051,4.076,4.051h26.733c2.239,0,4.042-1.811,4.042-4.051V15.13c0-2.237-1.803-4.068-4.042-4.068h-1.415v21.395C40.507,36.904,36.845,40.566,32.399,40.565z"/>
                          <path d="M0,4.102l0,28.355c0,2.241,1.814,4.067,4.051,4.067h28.365c2.237,0,4.066-1.826,4.066-4.067l0-28.356c0-2.238-1.828-4.051-4.066-4.051H4.051C1.814,0.05,0,1.862,0,4.102z"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Navigation Buttons -->
              <button
                class="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-80 hover:bg-opacity-90 text-white w-15 h-15 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                (click)="scrollInstagramFeed('left')"
                type="button"
                aria-label="Previous posts">
                <svg class="w-3 h-4 fill-current" viewBox="4 0 8 16">
                  <path d="M4.3,8.7l6,5.9c0.4,0.4,1.1,0.4,1.5,0c0.4-0.4,0.4-1.1,0-1.5L6.5,8l5.2-5.2c0.4-0.4,0.4-1.1,0-1.5c-0.4-0.4-1.1-0.4-1.5,0l-6,6C3.9,7.7,3.9,8.3,4.3,8.7z"/>
                </svg>
              </button>

              <button
                class="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-80 hover:bg-opacity-90 text-white w-15 h-15 rounded-full flex items-center justify-center transition-all duration-200 z-10"
                (click)="scrollInstagramFeed('right')"
                type="button"
                aria-label="Next posts">
                <svg class="w-3 h-4 fill-current" viewBox="4 0 8 16">
                  <path d="M11.7,7.3l-6-5.9c-0.4-0.4-1.1-0.4-1.5,0c-0.4,0.4-0.4,1.1,0,1.5L9.5,8l-5.2,5.2c-0.4,0.4-0.4,1.1,0,1.5c0.4,0.4,1.1,0.4,1.5,0l6-6C12.1,8.3,12.1,7.7,11.7,7.3z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <style>
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    </style>
  `
})
export class RrssComponent {
  @Input() type: 'type-1' | 'type-2' = 'type-1';

  socialPosts: SocialPost[] = [
    {
      id: 1,
      type: 'video',
      platform: 'instagram',
      username: '@mytechceo',
      verified: true,
      followers: '254k followers',
      profileImage: 'https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6879e389339c62b26de7b1c5_superpower-thumbnail-testimonialsimage-4.png',
      content: '',
      socialUrl: 'https://www.instagram.com/reel/DMIJhpPiktZ/'
    },
    {
      id: 2,
      type: 'text',
      platform: 'youtube',
      username: 'Cassandra Bankson, 32',
      verified: true,
      followers: '2.4M followers on Youtube',
      profileImage: 'https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6879e3897b9dfebf63d3169a_superpower-thumbnail-testimonialsimage.png',
      content: 'Superpower enables me to understand my health and wellness concerns before they become big problems again.',
      socialUrl: 'https://superpower.com/reviews#'
    },
    {
      id: 3,
      type: 'text',
      platform: 'twitter',
      username: 'Alex Brogan',
      verified: false,
      followers: '300k followers on X',
      profileImage: 'https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6879e38960268c4e8ef92532_superpower-thumbnail-testimonialsimage-1.png',
      content: 'The only thing I\'m not impressed with is with my biological age being 3.5 years above my actual age.',
      socialUrl: 'https://x.com/_alexbrogan/status/1856907844928282763'
    }
  ];
}
