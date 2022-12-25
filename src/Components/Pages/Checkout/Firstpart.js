import React from 'react';

const Firstpart = () => {
  return (
    <div>
        <button type="button" class="mb-4 mt-2 md:mt-0 flex flex-col justify-center items-center form-input h-[50px] w-full bg-light-purple text-white border-transparent" disabled="">9am - 4:30pm <br/> <span class="text-xs">(ETA will be sent on the morning of pick-up date)</span></button>
 <div class="w-full flex flex-col group"><label for="recipientPostalCode" class="font-normal text-subheading-gray w-max group-focus-within:text-dark-purple">Postal Code</label>
 <div id="recipientPostalCodecontainer" class="mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-border-dark-gray shadow-border">
  <div class="relative flex items-center h-full z-[2] w-full"><input class="focus:outline-none pl-3 w-full h-full rounded-xl pr-8" maxlength="80" id="recipientPostalCode" type="text" value=""/>
  </div>
  <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-[18px] inline-block 
                absolute right-0 mr-2
              w-[18px] group-focus-within:invisible stroke-dark-purple z-[2]"><circle r="10" transform="matrix(1 0 0 -1 11 11)" stroke-width="2"></circle><path d="M6 11.9375L9.04348 15L16 8" stroke-width="2" stroke-linecap="round"></path></svg><p class="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p></div></div>
 <div class="w-full flex flex-col group"><label for="recipientPostalCode" class="font-normal text-subheading-gray w-max group-focus-within:text-dark-purple">Street Address</label>
 <div id="recipientPostalCodecontainer" class="mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-border-dark-gray shadow-border">
  <div class="relative flex items-center h-full z-[2] w-full"><input class="focus:outline-none pl-3 w-full h-full rounded-xl pr-8" maxlength="80" id="recipientPostalCode" type="text" value=""/>
  </div><svg viewBox="0 0 22 22" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-[18px] inline-block 
                absolute right-0 mr-2
              w-[18px] group-focus-within:invisible stroke-dark-purple z-[2]"><circle r="10" transform="matrix(1 0 0 -1 11 11)" stroke-width="2"></circle><path d="M6 11.9375L9.04348 15L16 8" stroke-width="2" stroke-linecap="round"></path></svg><p class="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p></div></div>

<div class="grid grid-cols-2 gap-4"><div><div class="w-full flex flex-col group"><label for="recipientCity" class="font-normal text-subheading-gray w-max group-focus-within:text-dark-purple">City</label><div id="recipientCitycontainer" class="mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-border-dark-gray shadow-border"><div class="relative flex items-center h-full z-[2] w-full"><input class="focus:outline-none pl-3 w-full h-full rounded-xl pr-8" maxlength="80" id="recipientCity" type="text" placeholder="Unit No" value=""/></div><svg viewBox="0 0 22 22" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-[18px] inline-block 
                absolute right-0 mr-2
              w-[18px] group-focus-within:invisible stroke-dark-purple z-[2]"><circle r="10" transform="matrix(1 0 0 -1 11 11)" stroke-width="2"></circle><path d="M6 11.9375L9.04348 15L16 8" stroke-width="2" stroke-linecap="round"></path></svg><p class="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p></div></div></div><div><label for="recipientState" class="font-normal text-subheading-gray w-max group-focus-within:text-dark-purple">State</label><input type="text" class="disabled:bg-gray-2 rounded-xl w-full h-10 mt-1" id="recipientState" disabled/></div></div>
    </div>
  );
};

export default Firstpart;