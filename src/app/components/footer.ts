import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngSwitch]="type">
      <!-- Footer Type 1 -->
      <footer *ngSwitchCase="'type-1'" class="bg-[rgb(57,68,43)] relative pb-[51px] pt-[63.75px]">
        <div class="mx-auto relative max-w-[1955px] w-[88.8%]">
          <div class="relative pb-[68px]">
            <div class="flex items-center justify-between">
              <a href="https://www.hevahealth.com/" 
                 class="text-[rgb(253,253,241)] cursor-pointer max-w-full transition-all duration-400 ease-[cubic-bezier(0.19,1,0.22,1)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 128 30" fill="none" 
                     class="inline max-w-[142.375px] w-full" style="fill: none;">
                  <path d="M64.543 1.15625H68.4962L76.5127 29.5493L84.4779 1.15625H88.4311L79.9452 29.571H73.0215L64.543 1.15625Z" fill="currentColor"></path>
                  <path d="M17.5072 1.15625V13.2535H3.71121V13.239H1.45955L3.71121 10.9771V1.15625H0V29.5638H3.71121V16.7005H17.5072V29.5638H21.2111V1.15625H17.5072Z" fill="currentColor"></path>
                  <path d="M39.2468 26.2324H37.1565L39.2468 24.1294V16.5777H51.9794V13.2535H39.2468V4.48046H53.2555V1.15625H35.543V29.5638H53.2555V26.2396H39.2468V26.2324Z" fill="currentColor"></path>
                  <path d="M111.734 1.15625H105.059L96.082 29.571H100.079L102.302 22.2216H114.411L116.633 29.571H120.63L111.734 1.15625ZM103.292 18.9697H101.399L104.011 16.491L108.448 1.17793L113.421 18.9769H103.284L103.292 18.9697Z" fill="currentColor"></path>
                  <path d="M123.461 4.15527H123.996L125.045 5.92577H125.925L124.803 4.12636C125.382 4.06855 125.852 3.75781 125.852 3.01347C125.852 2.14629 125.294 1.80664 124.275 1.80664H122.676V5.92577H123.453V4.15527H123.461ZM123.461 2.39199H124.201C124.612 2.39199 125.081 2.47148 125.081 2.94843C125.081 3.50488 124.685 3.56269 124.194 3.56269H123.468V2.38476L123.461 2.39199Z" fill="currentColor"></path>
                  <path d="M124.143 7.5951C126.277 7.5951 128.001 5.88963 128.001 3.79394C128.001 1.69824 126.27 0 124.143 0C122.016 0 120.285 1.70546 120.285 3.79394C120.285 5.88241 122.016 7.5951 124.143 7.5951ZM124.143 0.823826C125.749 0.823826 127.106 2.14628 127.106 3.79394C127.106 5.44159 125.749 6.77127 124.143 6.77127C122.537 6.77127 121.18 5.43436 121.18 3.79394C121.18 2.15351 122.537 0.823826 124.143 0.823826Z" fill="currentColor"></path>
                </svg>
              </a>
              <div class="flex items-center justify-end flex-wrap gap-[34px]">
                <a target="_blank" href="https://shop.hevahealth.com/" 
                   class="text-[rgb(253,253,241)] cursor-pointer max-w-full relative transition-colors duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)]">
                  <div class="relative">
                    <div class="font-['ppeditorialnew',sans-serif] text-[34px] font-light tracking-[-0.136px] leading-[37.4px]">
                      Supplements
                    </div>
                  </div>
                </a>
                <a target="_blank" href="https://dashboard.yourheva.com/auth/welcome" 
                   class="text-[rgb(253,253,241)] cursor-pointer max-w-full relative transition-colors duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)]">
                  <div class="relative">
                    <div class="font-['ppeditorialnew',sans-serif] text-[34px] font-light tracking-[-0.136px] leading-[37.4px]">
                      Login
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full h-px bg-[rgb(253,253,241)] opacity-30"></div>
          </div>
          
          <div class="pt-[68px]">
            <div class="flex flex-wrap justify-between -mb-[40px] -ml-[20px] -mr-[20px]">
              <div class="flex-basis-[33.33%] flex-grow max-w-[33.3333%] mb-[40px] pl-[20px] pr-[20px]">
                <div class="flex flex-col gap-[31.96px]">
                  <div class="text-[rgb(253,253,241)] font-['ppeditorialnew',sans-serif] text-[51px] font-light tracking-[-0.306px] leading-[56.1px]">
                    <span>Heva is virtual care. </span>
                    <em class="italic">Nationwide.</em>
                  </div>
                  <div class="flex items-center justify-start gap-[31.96px]">
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=61558796272104" 
                       class="text-[rgb(253,253,241)] cursor-pointer max-w-full transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 48 48" fill="none" 
                           class="inline aspect-square h-[25.5px] max-h-[25.5px] max-w-[25.5px] w-full">
                        <g clip-path="url(#clip0_17_61)">
                          <path d="M24 0C10.7453 0 0 10.7453 0 24C0 35.255 7.74912 44.6995 18.2026 47.2934V31.3344H13.2538V24H18.2026V20.8397C18.2026 12.671 21.8995 8.8848 29.9194 8.8848C31.44 8.8848 34.0637 9.18336 35.137 9.48096V16.129C34.5706 16.0694 33.5866 16.0397 32.3645 16.0397C28.4294 16.0397 26.9088 17.5306 26.9088 21.4061V24H34.7482L33.4013 31.3344H26.9088V47.8243C38.7926 46.3891 48.001 36.2707 48.001 24C48 10.7453 37.2547 0 24 0Z" fill="currentColor"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_17_61">
                            <rect width="48" height="48" fill="currentColor"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/hevahealth/" 
                       class="text-[rgb(253,253,241)] cursor-pointer max-w-full transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" 
                           class="inline aspect-square h-[25.5px] max-h-[25.5px] max-w-[25.5px] w-full">
                        <g clip-path="url(#clip0_4165_668)">
                          <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" fill="currentColor"></path>
                          <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="currentColor"></path>
                          <path d="M19.8469 5.59239C19.8469 6.38926 19.2 7.03145 18.4078 7.03145C17.6109 7.03145 16.9688 6.38457 16.9688 5.59239C16.9688 4.79551 17.6156 4.15332 18.4078 4.15332C19.2 4.15332 19.8469 4.8002 19.8469 5.59239Z" fill="currentColor"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_4165_668">
                            <rect width="24" height="24" fill="currentColor"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/company/hevahealth/" 
                       class="text-[rgb(253,253,241)] cursor-pointer max-w-full transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" 
                           class="inline aspect-square h-[25.5px] max-h-[25.5px] max-w-[25.5px] w-full">
                        <g clip-path="url(#clip0_4165_669)">
                          <path d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z" fill="currentColor"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_4165_669">
                            <rect width="24" height="24" fill="currentColor"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <div class="flex w-full">
                    <div class="w-full mb-[15px]">
                      <form name="newsletter-form" method="post" aria-label="newsletter">
                        <input maxlength="256" name="email" placeholder="Email Address" type="email" required 
                               class="w-full h-[38px] mb-[21.25px] pb-0 pt-0 text-[rgb(253,253,241)] text-[14px] leading-[20px] border-b border-[rgb(253,253,241)] bg-transparent outline-none transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)]">
                        <input type="submit" value="SUBSCRIBE" 
                               class="w-full bg-[rgb(253,253,241)] text-black cursor-pointer font-['ppfraktionmono',sans-serif] text-[14.875px] leading-[16.3625px] py-[15.9375px] px-[15px] rounded-[1680px] text-center uppercase transition-all">
                      </form>
                    </div>
                  </div>
                  <div class="flex items-center justify-start pt-[17px]">
                    <div class="max-h-[68px] max-w-[68px]">
                      <a target="_blank" title="Verify LegitScript Approval" href="https://www.legitscript.com/websites/?checker_keywords=hevahealth.com" 
                         class="cursor-pointer inline underline">
                        <img alt="Verify Approval" width="73" height="79" 
                             src="https://static.legitscript.com/seals/21223651.png" 
                             class="inline-block h-full max-w-full object-contain">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="flex-basis-[58.33%] flex-grow max-w-[58.3333%] mb-[40px] pl-[20px] pr-[20px]">
                <div class="mb-[34px]">
                  <div class="text-[rgb(253,253,241)] font-['ppeditorialnew',sans-serif] text-[34px] font-light tracking-[-0.136px] leading-[37.4px]">
                    Treatments
                  </div>
                </div>
                <div class="flex flex-wrap -mb-[40px] -ml-[20px] -mr-[20px]">
                  <div class="flex-basis-[33.33%] flex-grow max-w-[33.3333%] mb-[40px] pl-[20px] pr-[20px]">
                    <div class="flex flex-col justify-start gap-[34px]">
                      <div class="flex flex-col justify-start gap-[15.3px]">
                        <div class="text-[rgb(253,253,241)] font-['neuehaasgrotesktext',sans-serif] leading-[21.6px]">
                          Weight Loss
                        </div>
                        <div class="flex flex-col justify-start gap-[11.9px]">
                          <a href="https://www.hevahealth.com/treatment/semaglutide" 
                             class="text-[rgb(253,253,241)] cursor-pointer max-w-full opacity-60 transition-opacity duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:opacity-100">
                            <div class="inline-block leading-[21.6px] relative pb-[1.7px]">
                              Semaglutide
                            </div>
                          </a>
                          <a href="https://www.hevahealth.com/treatment/tirzepatide" 
                             class="text-[rgb(253,253,241)] cursor-pointer max-w-full opacity-60 transition-opacity duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:opacity-100">
                            <div class="inline-block leading-[21.6px] relative pb-[1.7px]">
                              Tirzepatide
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="flex-basis-[33.33%] flex-grow max-w-[33.3333%] mb-[40px] pl-[20px] pr-[20px]">
                    <div class="flex flex-col justify-start gap-[34px]">
                      <div class="flex flex-col justify-start gap-[15.3px]">
                        <div class="text-[rgb(253,253,241)] font-['neuehaasgrotesktext',sans-serif] leading-[21.6px]">
                          Sexual Health
                        </div>
                        <div class="flex flex-col justify-start gap-[11.9px]">
                          <a href="https://www.hevahealth.com/treatment/rise" 
                             class="text-[rgb(253,253,241)] cursor-pointer max-w-full opacity-60 transition-opacity duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:opacity-100">
                            <div class="inline-block leading-[21.6px] relative pb-[1.7px]">
                              Rise
                            </div>
                          </a>
                          <a href="https://www.hevahealth.com/treatment/bloom" 
                             class="text-[rgb(253,253,241)] cursor-pointer max-w-full opacity-60 transition-opacity duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:opacity-100">
                            <div class="inline-block leading-[21.6px] relative pb-[1.7px]">
                              Bloom
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="flex-basis-[33.33%] flex-grow max-w-[33.3333%] mb-[40px] pl-[20px] pr-[20px]">
                    <div class="flex flex-col justify-start gap-[34px]">
                      <div class="flex flex-col justify-start gap-[15.3px]">
                        <div class="text-[rgb(253,253,241)] font-['neuehaasgrotesktext',sans-serif] leading-[21.6px]">
                          Hormone Treatment
                        </div>
                        <div class="flex flex-col justify-start gap-[11.9px]">
                          <a href="https://www.hevahealth.com/treatment/fortify" 
                             class="text-[rgb(253,253,241)] cursor-pointer max-w-full opacity-60 transition-opacity duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:opacity-100">
                            <div class="inline-block leading-[21.6px] relative pb-[1.7px]">
                              Fortify
                            </div>
                          </a>
                          <a target="_blank" href="https://www.hevahealth.com/treatment/mens-health" 
                             class="text-[rgb(253,253,241)] cursor-pointer max-w-full opacity-60 transition-opacity duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:opacity-100">
                            <div class="inline-block leading-[21.6px] relative pb-[1.7px]">
                              Men's Health
                            </div>
                          </a>
                          <a target="_blank" href="https://www.hevahealth.com/treatment/womens-health" 
                             class="text-[rgb(253,253,241)] cursor-pointer max-w-full opacity-60 transition-opacity duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:opacity-100">
                            <div class="inline-block leading-[21.6px] relative pb-[1.7px]">
                              Women's Health
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="flex-basis-[33.33%] flex-grow max-w-[33.3333%] mb-[40px] pl-[20px] pr-[20px]">
                    <div class="flex flex-col justify-start gap-[34px]">
                      <div class="flex flex-col justify-start gap-[15.3px]">
                        <div class="text-[rgb(253,253,241)] font-['neuehaasgrotesktext',sans-serif] leading-[21.6px]">
                          Lab Testing
                        </div>
                        <div class="flex flex-col justify-start gap-[11.9px]">
                          <a href="https://www.hevahealth.com/treatment/heva-lab-testing" 
                             class="text-[rgb(253,253,241)] cursor-pointer max-w-full opacity-60 transition-opacity duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:opacity-100">
                            <div class="inline-block leading-[21.6px] relative pb-[1.7px]">
                              Heva Lab Tests
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="pb-[102px]">
          <div class="mx-auto relative max-w-[1955px] w-[88.8%]">
            <div class="flex items-center justify-between mt-[17px] pt-[10.625px] relative">
              <div class="flex items-center justify-start gap-[5.95px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 13 13" fill="none" 
                     class="text-[rgb(253,253,241)] h-[13.7594px] w-full" style="fill: none;">
                  <path d="M8.90156 7.59861C8.90156 8.4903 8.64789 9.16676 8.14054 9.62798C7.64089 10.0815 6.93753 10.3083 6.03046 10.3083C5.55387 10.3083 5.13108 10.2237 4.7621 10.0546C4.39313 9.8855 4.0818 9.65489 3.82813 9.36278C3.57446 9.06299 3.37844 8.70938 3.24008 8.30197C3.10171 7.89456 3.03253 7.44871 3.03253 6.96443V5.96128C3.03253 5.48468 3.10171 5.04268 3.24008 4.63527C3.37844 4.22017 3.57446 3.86272 3.82813 3.56293C4.0818 3.26314 4.39313 3.02868 4.7621 2.85957C5.13108 2.69045 5.55387 2.6059 6.03046 2.6059C6.93753 2.6059 7.64473 2.83651 8.15208 3.29773C8.65942 3.75895 8.91309 4.43156 8.91309 5.31557H7.64473C7.63705 4.76979 7.50252 4.37007 7.24116 4.11639C6.98749 3.86272 6.58392 3.73589 6.03046 3.73589C5.73835 3.73589 5.48084 3.79354 5.25792 3.90885C5.04268 4.02415 4.86203 4.18173 4.71598 4.3816C4.56993 4.57377 4.46231 4.80823 4.39313 5.08496C4.32394 5.354 4.28935 5.64227 4.28935 5.94975V6.96443C4.28935 7.2796 4.32394 7.57171 4.39313 7.84075C4.46231 8.1098 4.56993 8.34425 4.71598 8.54411C4.86203 8.74398 5.04268 8.90156 5.25792 9.01687C5.48084 9.13217 5.73835 9.18982 6.03046 9.18982C6.58392 9.18982 6.98749 9.06299 7.24116 8.80932C7.49484 8.55564 7.62551 8.15208 7.6332 7.59861H8.90156ZM1.00315 6.45709C1.00315 7.21042 1.13383 7.92147 1.39519 8.59024C1.65655 9.25132 2.01784 9.83169 2.47906 10.3313C2.94028 10.8233 3.48222 11.2115 4.10486 11.4959C4.7352 11.7803 5.4155 11.9226 6.14577 11.9226C6.86834 11.9226 7.54096 11.7803 8.16361 11.4959C8.79394 11.2038 9.33972 10.8118 9.80094 10.3198C10.2622 9.82016 10.6234 9.23979 10.8848 8.57871C11.1462 7.91762 11.2768 7.21042 11.2768 6.45709C11.2768 5.71145 11.1462 5.01193 10.8848 4.35854C10.6234 3.69745 10.2622 3.12093 9.80094 2.62896C9.33972 2.13699 8.79394 1.75264 8.16361 1.47591C7.54096 1.19149 6.86834 1.04928 6.14577 1.04928C5.4155 1.04928 4.7352 1.19149 4.10486 1.47591C3.48222 1.75264 2.94028 2.13699 2.47906 2.62896C2.01784 3.12093 1.65655 3.69745 1.39519 4.35854C1.13383 5.01193 1.00315 5.71145 1.00315 6.45709ZM0 6.45709C0 5.8575 0.0691831 5.28482 0.207549 4.73904C0.353602 4.18558 0.557308 3.67055 0.818667 3.19395C1.08003 2.70967 1.39519 2.27151 1.76417 1.87947C2.14083 1.48744 2.55593 1.15305 3.00946 0.876319C3.463 0.599587 3.95497 0.384351 4.48537 0.23061C5.01577 0.0768701 5.56924 0 6.14577 0C7.0144 0 7.82153 0.169114 8.56717 0.507343C9.31281 0.845571 9.95852 1.30679 10.5043 1.891C11.0578 2.46753 11.4921 3.14783 11.8072 3.93191C12.1224 4.71598 12.28 5.55771 12.28 6.45709C12.28 7.35647 12.1224 8.20204 11.8072 8.9938C11.4921 9.77788 11.0578 10.4659 10.5043 11.0578C9.95852 11.642 9.31281 12.1032 8.56717 12.4414C7.82153 12.7797 7.0144 12.9488 6.14577 12.9488C5.27713 12.9488 4.46615 12.7797 3.71283 12.4414C2.96719 12.1032 2.31763 11.642 1.76417 11.0578C1.21839 10.4659 0.787919 9.77788 0.472751 8.9938C0.157584 8.20204 0 7.35647 0 6.45709Z" fill="currentColor"></path>
                </svg>
                <div class="text-[rgb(253,253,241)] font-['ppfraktionmono',sans-serif] text-[14.875px] font-bold tracking-[1.4875px] leading-[16.3625px] uppercase">
                  2024 heva health
                </div>
              </div>
              <a href="https://www.hevahealth.com/privacy-policy" 
                 class="text-[rgb(253,253,241)] cursor-pointer max-w-full">
                <div class="inline-block font-['ppfraktionmono',sans-serif] text-[14.875px] font-bold tracking-[1.4875px] leading-[16.3625px] uppercase pb-[6.8px] relative">
                  PRIVACY POLICY
                </div>
              </a>
              <div class="absolute top-0 left-0 w-full h-px bg-[rgb(253,253,241)]"></div>
            </div>
          </div>
        </div>
      </footer>

      <!-- Footer Type 2 -->
      <footer *ngSwitchCase="'type-2'" class="bg-[rgb(3,66,44)] overflow-hidden relative z-[3] pb-4 pt-20">
        <div class="grid gap-5 grid-cols-8 mx-auto max-w-[clamp(0px,calc(100%-40px),1440px)]">
          <div class="flex flex-col items-start col-span-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="43" viewBox="0 0 49 43" fill="none" 
                 class="fill-none h-[43px] w-[49px]">
              <path opacity="0.5" d="M10.9456 34.8632L19.8546 19.5269L30.0365 36.9632H12.8546L10.9456 34.8632Z" fill="white"></path>
              <path d="M48.4909 42.5625L24.3091 0.5625L16.4182 13.9261L32.9636 42.5625H48.4909Z" fill="white"></path>
              <path d="M0 42.5625L8.27273 28.308L16.5455 42.5625H0Z" fill="white"></path>
            </svg>
            <p class="text-[rgb(167,240,204)] flex-grow font-['urbanist',arial,helvetica,sans-serif] text-[32px] font-semibold leading-[40px] pt-4">
              Bridging AI-driven data science and ethical testing to deliver
              innovation in health product development.
            </p>
            <a href="#" class="border-b border-white text-white cursor-pointer font-['urbanist',arial,helvetica,sans-serif] font-semibold h-fit leading-5 uppercase">
              Back to the top
            </a>
          </div>
          
          <div class="col-span-3 col-start-6">
            <nav class="flex flex-col gap-8">
              <div class="grid grid-cols-3 gap-5">
                <span class="text-[rgb(167,240,204)] font-['urbanist',arial,helvetica,sans-serif] font-medium leading-5 col-span-1">
                  More
                </span>
                <ul class="text-white flex flex-col gap-4 col-span-2">
                  <li>
                    <a href="https://vivaltes.com/" class="border-b border-white text-white cursor-pointer inline font-['urbanist',arial,helvetica,sans-serif] font-semibold h-fit leading-5 uppercase">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="https://vivaltes.com/about-us" class="border-b border-white text-white cursor-pointer inline font-['urbanist',arial,helvetica,sans-serif] font-semibold h-fit leading-5 uppercase">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="https://vivaltes.com/vision" class="border-b border-white text-white cursor-pointer inline font-['urbanist',arial,helvetica,sans-serif] font-semibold h-fit leading-5 uppercase">
                      Our vision
                    </a>
                  </li>
                  <li>
                    <a href="https://vivaltes.com/contact" class="border-b border-white text-white cursor-pointer inline font-['urbanist',arial,helvetica,sans-serif] font-semibold h-fit leading-5 uppercase">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="https://vivaltes.com/careers" class="border-b border-white text-white cursor-pointer inline font-['urbanist',arial,helvetica,sans-serif] font-semibold h-fit leading-5 uppercase">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="https://vivaltes.com/experimental-assays" class="border-b border-white text-white cursor-pointer inline font-['urbanist',arial,helvetica,sans-serif] font-semibold h-fit leading-5 uppercase">
                      Experimental assays
                    </a>
                  </li>
                  <li>
                    <a href="https://vivaltes.com/solutions#projects" class="border-b border-white text-white cursor-pointer inline font-['urbanist',arial,helvetica,sans-serif] font-semibold h-fit leading-5 uppercase">
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
              
              <div class="grid grid-cols-3 gap-5">
                <span class="text-[rgb(167,240,204)] font-['urbanist',arial,helvetica,sans-serif] font-medium leading-5 col-span-1">
                  Solutions
                </span>
                <ul class="text-white flex flex-col gap-4 col-span-2">
                  <li>
                    <a href="https://vivaltes.com/herb-paths" class="border-b border-white text-white cursor-pointer inline font-['urbanist',arial,helvetica,sans-serif] font-semibold h-fit leading-5 uppercase">
                      Herb-paths page
                    </a>
                  </li>
                  <li>
                    <a href="https://vivaltes.com/approach" class="border-b border-white text-white cursor-pointer inline font-['urbanist',arial,helvetica,sans-serif] font-semibold h-fit leading-5 uppercase">
                      New approach methodologies
                    </a>
                  </li>
                  <li>
                    <a href="https://vivaltes.com/solutions" class="border-b border-white text-white cursor-pointer inline font-['urbanist',arial,helvetica,sans-serif] font-semibold h-fit leading-5 uppercase">
                      All solutions
                    </a>
                  </li>
                </ul>
              </div>
              
              <div class="grid grid-cols-3 gap-5">
                <span class="text-[rgb(167,240,204)] font-['urbanist',arial,helvetica,sans-serif] font-medium leading-5 col-span-1">
                  Social
                </span>
                <ul class="text-white flex flex-col gap-4 col-span-2">
                  <li>
                    <a target="_blank" href="https://www.linkedin.com/company/vivaltes/" class="border-b border-white text-white cursor-pointer inline font-['urbanist',arial,helvetica,sans-serif] font-semibold h-fit leading-5 uppercase">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://instagram.com/vivaltes" class="border-b border-white text-white cursor-pointer inline font-['urbanist',arial,helvetica,sans-serif] font-semibold h-fit leading-5 uppercase">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          
          <svg class="col-span-8 pb-4 pt-20 relative w-[1400px] h-[214px]" width="1400" height="214" viewBox="0 0 1400 214" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
              <path d="M120.084 213.563L0 0.562511H43.8305L120.084 136.38L196.337 0.562511H240.167L120.084 213.563Z" fill="white"></path>
              <path d="M451.046 213.563L330.962 0.562511H374.793L451.046 136.38L527.299 0.562511H571.13L451.046 213.563Z" fill="white"></path>
              <path d="M638.494 0.5625L758.577 213.563L714.747 213.562L638.494 77.7451L562.241 213.562L518.41 213.562L638.494 0.5625Z" fill="white"></path>
              <path d="M264.77 0.562511H302.259V213.563H264.77V0.562511Z" fill="white"></path>
              <path d="M787.28 0.562511H824.77V177.065H918.494L939.289 213.563H787.28V0.562511Z" fill="white"></path>
              <path d="M1115.9 0.562511H1231.3V40.0513H1153.39V90.3097H1231.3V125.61H1153.39V177.065H1231.3L1252.09 213.563H1115.9V0.562511Z" fill="white"></path>
              <path d="M935.481 38.8546V2.35745H1071.97L1092.76 38.8546H1026.86V213.563H989.372V38.8546H935.481Z" fill="white"></path>
              <path d="M1400 0.562511H1324.44C1324.44 0.562511 1275.18 26.8884 1274.94 66.9754C1274.64 115.14 1344.35 127.405 1344.35 157.919C1344.35 178.98 1297.88 203.79 1274.64 213.563H1355.48C1355.48 213.563 1394.73 187.596 1394.73 149.543C1394.73 101.977 1323.26 96.592 1323.26 63.3855C1323.26 34.9058 1376.18 9.63695 1400 0.562511Z" fill="white"></path>
            </g>
          </svg>
          
          <span class="text-[rgb(167,240,204)] font-['urbanist',arial,helvetica,sans-serif] font-medium leading-5 col-span-2">
            © 2025 Vivaltes. All rights reserved
          </span>
          
          <nav class="text-[rgb(167,240,204)] col-span-4 col-start-3">
            <ul class="flex items-center gap-4">
              <li>
                <a href="https://vivaltes.com/legal-notice" class="border-b border-[rgb(167,240,204)] text-[rgb(167,240,204)] cursor-pointer inline font-['urbanist',arial,helvetica,sans-serif] font-semibold h-fit leading-5 uppercase">
                  legal notice
                </a>
              </li>
              <li>
                <a href="https://vivaltes.com/gdpr" class="border-b border-[rgb(167,240,204)] text-[rgb(167,240,204)] cursor-pointer inline font-['urbanist',arial,helvetica,sans-serif] font-semibold h-fit leading-5 uppercase">
                  GDPR
                </a>
              </li>
              <li>
                <a href="https://vivaltes.com/general-conditions" class="border-b border-[rgb(167,240,204)] text-[rgb(167,240,204)] cursor-pointer inline font-['urbanist',arial,helvetica,sans-serif] font-semibold h-fit leading-5 uppercase">
                  General conditions
                </a>
              </li>
            </ul>
          </nav>
          
          <span class="flex flex-col items-end text-[rgb(167,240,204)] font-['urbanist',arial,helvetica,sans-serif] text-[12.8px] font-medium leading-4 col-span-2 col-start-7">
            <span class="text-[rgb(167,240,204)] font-['urbanist',arial,helvetica,sans-serif] text-[12.8px] font-medium leading-4">
              <span>Developed by </span>
              <a target="_blank" href="https://benjamingeets.com/" class="text-[rgb(167,240,204)] cursor-pointer inline font-['urbanist',arial,helvetica,sans-serif] text-[12.8px] font-medium leading-4 underline">
                Benjamin Geets
              </a>
            </span>
            <span class="text-[rgb(167,240,204)] font-['urbanist',arial,helvetica,sans-serif] text-[12.8px] font-medium leading-4">
              <span>Design by </span>
              <a target="_blank" href="https://galandtristan.com/" class="text-[rgb(167,240,204)] cursor-pointer inline font-['urbanist',arial,helvetica,sans-serif] text-[12.8px] font-medium leading-4 underline">
                Galand Tristan
              </a>
            </span>
          </span>
        </div>
      </footer>

      <!-- Default case -->
      <div *ngSwitchDefault>
        <p class="text-red-500 text-center p-4">Footer type not recognized. Available types: 'type-1', 'type-2'</p>
      </div>
    </div>
  `
})
export class FooterComponent {
  @Input() type: 'type-1' | 'type-2' = 'type-1';
}
