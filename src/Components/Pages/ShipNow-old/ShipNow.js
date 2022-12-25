import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import FiveStep from './FiveStep';
import FourStep from './FourStep';
import OneStep from './OneStep';
import './ShipNow.css'
import ThreeStep from './ThreeStep';
import TwoStep from './TwoStep';
const ShipNow = () => {
    const [counter, setCounter] = useState(1)
    if(counter>5){
        return setCounter(1)
    }
   
    
    return (
        <div>
            <div className="bg-background-gray z-0 min-h-screen">
                <div className="max-w-3xl mx-auto pt-8 pb-6 md:pt-10 md:pb-7">
                    <div className="flex items-center justify-between w-[92%] sm:w-[80%] lg:w-[70%] mx-auto relative">
                        <div className="flex flex-col place-items-center w-max">
                            <div className="flex items-center justify-center rounded-full bg-background-gray w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] border border-dark-purple shadow-border-focus">
                                <div className={`flex items-center justify-center rounded-full  w-[26px] h-[26px] md:w-[30px] md:h-[30px] ${counter === 1 ? "bg-dark-purple" : counter >= 2 ? "bg-gray-3" : 'bg-dark-purple'}`}>
                                    {
                                        counter === 1 ? <span className="text-sm md:text-base font-semibold text-white">1</span> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg> 
                                    }
                                </div>
                            </div>
                            <p className={`mt-2 text-xs md:text-sm ${counter === 1 ? 'text-light-purple' : "text-black"}`}>Sender</p>
                        </div>
                        <div className="flex flex-col place-items-center w-max">
                            <div className={`flex items-center justify-center rounded-full w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] ${counter === 2 ? "bg-dark-purple" :' bg-gray-3'}`} >
                                {
                                    counter === 2 ?<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>: <span className="text-sm md:text-base font-semibold rounded-lg text-white">2</span>  
                                }
                            </div>
                              <p className={`mt-2 text-xs md:text-sm ${counter === 2 ? 'text-light-purple' : "text-black"}`}>Recipient</p>
                        </div>
                        <div className="flex flex-col place-items-center w-max">
                            <div className={`flex items-center justify-center rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] ${counter === 3 ? "bg-dark-purple" :' bg-gray-3'}`}>
                            {
                               
                                    counter === 3 ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>: <span className="text-sm md:text-base font-semibold rounded-lg text-white">3</span>  
                               
                            }
                            </div>
                           <p className={`mt-2 text-xs md:text-sm ${counter === 3 ? 'text-light-purple' : "text-black"}`}>Package</p>
                        </div>
                        <div className="flex flex-col place-items-center w-max">
                            <div className={`flex items-center justify-center rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] ${counter === 4 ? "bg-dark-purple" :' bg-gray-3'}`} >
                            
                              {
                               
                                    counter === 4 ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>: <span className="text-sm md:text-base font-semibold">4</span>
                               
                            }
                            
                            </div>
                         <p className={`mt-2 text-xs md:text-sm ${counter === 4 ? 'text-light-purple' : "text-black"}`}>Add-ons</p>
                        </div>
                        <div className="flex flex-col place-items-center w-max">
                            <div className={`flex items-center justify-center rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] ${counter === 5 ? "bg-dark-purple" :' bg-gray-3'}`}>
                               {
                               
                                    counter === 5 ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>: <span className="text-sm md:text-base font-semibold">5</span>
                               
                            }
                            
                            
                            </div>
                             <p className={`mt-2 text-xs md:text-sm ${counter === 5 ? 'text-light-purple' : "text-black"}`}>Review</p>
                        </div>
                        <hr className="absolute border-gray-3 w-[90%] top-[16px] md:top-[20px] left-0 right-0 mx-auto" />
                    </div>
                </div>
                {}
                <div className="text-center mb-4 md:mb-6">
                    <p id="step-header" className="text-2xl md:text-3xl font-bold">Sender’s Particulars</p>
                    <p className="text-sm">(Point of contact for packing and billing)</p>
                </div>
               <div >
               {
                counter<=1 && <>
                 <OneStep/>
                </>
               }
               {
                 counter==2 && <>
                 <TwoStep/>
                </>
               }
                 {
                 counter==3 && <>
                 <ThreeStep/>
                </>
               }
                 {
                 counter==4 && <>
                 <FourStep/>
                </>
               }
               {
                 counter==5 && <>
                 <FiveStep/>
                </>
               }
               </div>
                <div className="flex mx-auto py-8 justify-center gap-4 md:gap-10">
                    {counter >= 2 ? <button onClick={() => setCounter(counter - 1)} type="button" className="pill-button button-hover border-[#844FFA] border-2   text-[#844FFA] font-bold hover:text-white hover:bg-[#844FFA] w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl">Back</button> : ""}
                   {
                      counter==5 ? <div> <button  type="button" id="next-button" className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl">Go To CheckOut</button> <p className='text-center'>Add to Cart</p><br /></div>:<> <button onClick={() => setCounter(counter + 1)} type="button" id="next-button" className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl">Next</button></>
                   }
                </div>
            </div>
        </div>
    )
}

export default ShipNow