import React from 'react';
import boxImg from "../../../../Assect/3x3x3.png";
const Noneed = () => {
  return (
    <div>
           <div className="md:mb-4 ">
                                                            <div className="grid md:grid-cols-2 px-6 md:px-8">
                                                                <div className="order-last md:order-first place-self-center">
                                                                    <img className=" w-48" src={boxImg} />
                                                                </div>
                                                                <div className="text-sm text-left my-4 mr-4 pb-6 md:pb-0 prose marker:text-subtext-gray hidden md:block">
                                                                    <p className="font-semibold">
                                                                        Don’t want to top-up later?
                                                                    </p>
                                                                    <ul>
                                                                        <li>
                                                                            Measure from the longest cross-section of each
                                                                            side of your box
                                                                        </li>
                                                                        <li>
                                                                            Round up to the nearest 0.5 cm when you measure
                                                                        </li>
                                                                    </ul>
                                                                    <p>
                                                                        Don’t worry about over-declaring, we will refund
                                                                        you the excess if that happens.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
    </div>
  );
};

export default Noneed;