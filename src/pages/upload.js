import Applayout from '@/components/header/layout/Applayout'
import React from 'react'

export default function Upload() {
  return (
    <Applayout>
        <div class="flex items-center justify-center  mt-10">
    <div class="w-full max-w-md">
        <div class="max-w-md mx-auto lg:p-0 p-3 text-right">
            <a href="/dashboard.html"><i class="fa-solid fa-chevron-left fa-sm" style={{color: "#000000;"}}></i> Go back</a>
        </div>
        <div class="bg-[#ffffff] px-5  rounded-md mt-5 shadow-sm">
          <div class="text-left">
            <h2 class="text-[#000000] mt-3 font-semibold">Upload Image</h2>
            <h3 class="text-[#000000] mt-3 text-sm">
                Upload personal image / take a selfie
            </h3>
        </div>
        <div>
            <div class="mt-10">
                <div class="mt-4">
                  
                    <div class="relative">
                        <input type="file" id="imageInput" name="imageInput" class="hidden" accept="image/*" />
                        <label for="imageInput" class="cursor-pointer block w-full p-4 border border-dashed border-gray-300 rounded-md text-center">
                            <div class="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" viewBox="0 0 106 106" fill="none">
                                    <path d="M76.9645 39.9234C76.9969 39.9232 77.0297 39.9232 77.0625 39.9232C87.9357 39.9232 96.75 48.7536 96.75 59.6469C96.75 69.7991 89.0938 78.1597 79.25 79.25M76.9645 39.9234C77.0293 39.2015 77.0625 38.4704 77.0625 37.7316C77.0625 24.4179 66.2895 13.625 53 13.625C40.4142 13.625 30.0852 23.3054 29.0268 35.6397M76.9645 39.9234C76.5169 44.8957 74.5626 49.4326 71.5622 53.0722M29.0268 35.6397C17.9299 36.6976 9.25 46.0608 9.25 57.4551C9.25 68.0574 16.7652 76.9015 26.75 78.9319M29.0268 35.6397C29.7174 35.5738 30.4173 35.5401 31.125 35.5401C36.0505 35.5401 40.5957 37.171 44.2522 39.9232" stroke="#141B34" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M53 57.375V92.375M53 57.375C49.9366 57.375 44.2129 66.1001 42.0625 68.3125M53 57.375C56.0634 57.375 61.7872 66.1001 63.9375 68.3125" stroke="#141B34" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <p class="mt-2 text-sm text-[#252525]">Upload from files or gallery</p>
                        </label>
                        <div class="text-center mt-3">
                            <a href="#!" class="text-[#252525]">Take a selfie</a>
                        </div>
                    </div>
    
                 
                    <div class="text-center mt-3 p-2">
                        <a href="/dashboard.html" class="text-[#FEFEFE] bg-[#4F378B] px-28 py-3 rounded-md">Done</a>
                    </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
    </Applayout>
  )
}
