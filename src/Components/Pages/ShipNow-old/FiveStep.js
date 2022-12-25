import React from 'react';

const FiveStep = () => {
  return (
 <div className='flex justify-center'>
     <div className='flex w-full max-w-3xl justify-center text-gray-4 text-sm'>
      <div class="bg-white text-center w-full md:rounded-xl py-8"><h2 class="text-base underline underline-offset-4">Shipment for <span class="font-bold">dfdf</span></h2><p class="mt-4">Destination Country:</p><p class="font-bold text-dark-purple">New Zealand</p><p class="mt-6">Package Details:</p><table class="mt-2 md:w-[30%] mx-auto"><tbody><tr class="whitespace-nowrap"><td class="px-4">Package 1</td><td class="px-4 text-light-purple text-left">45.00 kg </td></tr></tbody></table><div class="mt-8 mb-1.5"><p class="whitespace-pre-line">Quote (TBC at warehouse):</p></div><div class="flex justify-center items-center gap-3"><p class="font-bold text-dark-purple">SGD <span id="total">851.89</span></p><svg width="16px" height="12px" class="w-[14px] h-[8px] transition-transform duration-300 ease-in-out -rotate-180" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M1 1L8 9L15 1" stroke="#373F41" stroke-width="2" stroke-linecap="round"></path></svg></div><div class="block mt-4"><div class="grid md:grid-cols-2 md:auto-rows-auto justify-center md:w-[60%] mx-auto gap-x-16 gap-y-2"><div class="grid grid-cols-2 md:grid-cols-[70%_30%] text-left gap-x-20 md:gap-x-0"><p class="">Shipping</p><p class=" text-[#6E41E2] whitespace-nowrap">SGD <span id="total-shipping-cost">883.89</span></p></div><div class="grid grid-cols-2 md:grid-cols-[70%_30%] text-left gap-x-20 md:gap-x-0 text-pink"><p>Discount</p><p class="whitespace-nowrap">(SGD <span>32.00</span>)</p></div></div></div></div>
    </div>
 </div>
  );
};

export default FiveStep;