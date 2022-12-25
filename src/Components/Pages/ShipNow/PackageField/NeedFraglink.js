import React from 'react';
import boxImg from "../../../../Assect/fragile-packing.webp";
import boxImgDown from "../../../../Assect/3x3x1.png";
const NeedFraglink = () => {
  return (
    <div>
         <div>
           <div className="md:mb-4 ">
                                                            <div className="grid md:grid-cols-2 px-6 md:px-8">
                                                                <div className="order-last md:order-first place-self-center">
                                                                    <div className="text-sm text-left my-4 mr-4 pb-6 md:pb-0 prose marker:text-subtext-gray hidden md:block">
                                                                    <p className="font-semibold">
                                                                     Opted for fragile packing?
                                                                    </p>
                                                                  
                                                                    <p>
                                                                       Note that a bigger box will be needed to fit fragile packing materials. This will increase shipping costs.

The exact padding required depends on the number of fragile items, the shape of the items, and how fragile they are.
                                                                    </p>
                                                                </div>
                                                                   
                                                                </div>
                                                               <img className="w-full" src={boxImg} />
                                                            </div>
                                                        </div>
    </div>
    <div>
           <div className="md:mb-4 mt-5 ">
                                                            <div className="text-center">
                                                              <p className='text-primary'>To order, estimate the box size needed for your unpacked items</p>
                                                               <div className='flex justify-center'>
                                                                 <img className=" w-48" src={boxImgDown} />
                                                               </div>
                                                               <p className='text-primary'>Custom Box (44 x 39 x 10)</p>
                                                            </div>
                                                        </div>
    </div>
    </div>
  );
};

export default NeedFraglink;