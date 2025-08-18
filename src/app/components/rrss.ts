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
