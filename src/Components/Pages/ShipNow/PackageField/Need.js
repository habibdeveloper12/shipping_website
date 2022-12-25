import React from 'react';
import boxImg from "../../../../Assect/3x3x1.png";
const Need = () => {
  return (
    <div>
       <div>
           <div className="md:mb-4 mt-4 ">
                                                            <div className="text-center">
                                                              <p className='text-primary'>To order, estimate the box size needed for your unpacked items</p>
                                                               <div className='flex justify-center'>
                                                                 <img className=" w-48" src={boxImg} />
                                                               </div>
                                                               <p className='text-primary'>Custom Box (44 x 39 x 10)</p>
                                                            </div>
                                                        </div>
    </div>
    </div>
  );
};

export default Need;