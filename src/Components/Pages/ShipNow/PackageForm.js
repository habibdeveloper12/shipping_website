import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import {RiDeleteBin6Line} from "react-icons/ri"
import ItemFields from "./ItemFields";
import Need from "./PackageField/Need";
import NeedFraglink from "./PackageField/NeedFraglink";
import Noneed from "./PackageField/Noneed";

const PackageForm = () => {
    
    const { register } = useFormContext();
 
    const {
        fields: packageFields,
        append: packageAppend,
        remove: packageRemove,
    } = useFieldArray({
        name: "package",
    });

    return (
        <div>
            <div>
                <main>
                    <div className="bg-[#F6F6F6] min-h-[100vh]">
                        <div className="container max-w-5xl 2xl:max-w-6xl mx-auto sm:px-5 py-8 sm:py-12">
                            <div className=" w-full pb-8 ">
                                <div className="max-w-4xl mx-auto">

                                    {
                                        packageFields.map((field, index) => {
                                            return (

                                                <div key={field.id} className="rounded-xl overflow-hidden bg-[#F0E8FE] ">

                                                    <div className="md:flex justify-between md:pr-5 my-5">
                                                        <h1 className="text-primary text-2xl pl-5 font-bold">
                                                        Package {`${index + 1}`}
                                                       
                                                    </h1>
                                                     {packageFields.length > 1 ? <button onClick={() => packageRemove(index)}><RiDeleteBin6Line className="text-2xl text-primary"/></button> : null}
                                                    </div>

                                                    <div>
                                                        <Tabs>
    <TabList className={"flex justify-between px-5"}>
      <Tab>  <input
                                                            type="radio"
                                                            name="packing"
                                                            value="No Need Packing"
                                                            id={`no-need-packing-${index}`}
                                                            {...register(`package.${index}.packing`)}
                                                            
                                                        />
                                                        <label htmlFor={`no-need-packing-${index}`}>No Need Packing</label></Tab>
      <Tab> <input
                                                            type="radio"
                                                            name="packing"
                                                            value="Need Packing"
                                                            id={`need-packing-${index}`}
                                                            {...register(`package.${index}.packing`)}
                                                        />
                                                        <label htmlFor={`need-packing-${index}`}>Need Packing</label> </Tab>
      <Tab>    <input
                                                            type="radio"
                                                            name="packing"
                                                            value="Need Fragile Packing"
                                                            id={`need-fragile-packing-${index}`}
                                                            {...register(`package.${index}.packing`)}
                                                        />
                                                        <label htmlFor={`need-fragile-packing-${index}`}>Need Fragile Packing</label> </Tab>
    </TabList>

    <TabPanel>
    <Noneed/>
    </TabPanel>
    <TabPanel>
  <Need/>
    </TabPanel>
    <TabPanel>
      <NeedFraglink/>
    </TabPanel>
  </Tabs>
                                                    </div>

                                                    <div
                                                        id="box-start"
                                                        className="bg-bg-purple pt-4 md:pt-8 md:mt-0 scroll-mt-[80px]"
                                                    >
                                              
                                                        <hr className="border-border-gray border-t mt-1 mb-0" />
                                                        <div className="w-full px-8 md:px-16 lg:px-24 pb-2">
                                                            <div className="flex flex-col md:flex-row md:justify-between md:pt-8 md:pb-8 mt-4 md:mt-0">
                                                                <div className="flex flex-col mb-3 md:mb-0 relative">
                                                                    <p className="mb-2">Estimate Box Size</p>
                                                                    <div className="relative w-[90%] max-w-[285px] md:max-w-[230px] bg-white rounded-xl">
                                                                        <select
                                                                            id="box-selection-p0"
                                                                            name="box-selection"
                                                                            className="rounded-xl border border-border-gray shadow-border focus:border-light-purple focus:shadow-border-focus focus:outline-none w-full h-[40px] appearance-none bg-transparent pl-3 pr-6"
                                                                            {...register(`package.${index}.box.size`)}
                                                                        >
                                                                            <option value="-1" selected>
                                                                                Own Box
                                                                            </option>
                                                                            <option value="0">
                                                                                Slim 1 kg (23 x 15 x 9)
                                                                            </option>
                                                                            <option value="1">
                                                                                Slim 1.5 kg (26 x 26 x 9)
                                                                            </option>
                                                                            <option value="2">
                                                                                Slim 3.5 kg (44 x 39 x 10)
                                                                            </option>
                                                                            <option value="3">
                                                                                Standard 5 kg (33 x 24 x 31)
                                                                            </option>
                                                                            <option value="4">
                                                                                Standard 7 kg (42 x 26 x 32)
                                                                            </option>
                                                                            <option value="5">
                                                                                Standard 12 kg (49 x 35 x 35)
                                                                            </option>
                                                                            <option value="6">
                                                                                Standard 17 kg (56 x 43 x 35)
                                                                            </option>
                                                                            <option value="7">
                                                                                Standard 22 kg (43 x 40 x 65)
                                                                            </option>
                                                                            <option value="8">
                                                                                Standard 62 kg (61 x 120 x 42)
                                                                            </option>
                                                                        </select>
                                                                        <svg
                                                                            width="16px"
                                                                            height="12px"
                                                                            className="absolute w-[12px] h-[8px] right-3.5 top-[45%]"
                                                                            viewBox="0 0 16 11"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            preserveAspectRatio="none"
                                                                        >
                                                                            <path
                                                                                d="M1 1L8 9L15 1"
                                                                                stroke="#373F41"
                                                                                stroke-width="2"
                                                                                stroke-linecap="round"
                                                                            ></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <p className="md:mb-2">Box Dimensions</p>
                                                                    <div className="flex items-center mb-4 md:mb-0">
                                                                        <input
                                                                            type="text"
                                                                            inputmode="decimal"
                                                                            id="length-p0"
                                                                            className="form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent shadow-none"
                                                                            {...register(`package.${index}.box.length`)}
                                                                        />
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="w-4 mx-3.5 md:mx-0"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            stroke="currentColor"
                                                                            stroke-width="2"
                                                                        >
                                                                            <path
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                d="M6 18L18 6M6 6l12 12"
                                                                            ></path>
                                                                        </svg>
                                                                        <input
                                                                            type="text"
                                                                            inputmode="decimal"
                                                                            id="width-p0"
                                                                            className="form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent"
                                                                            {...register(`package.${index}.box.width`)}
                                                                        />
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="w-4 mx-3.5 md:mx-0"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            stroke="currentColor"
                                                                            stroke-width="2"
                                                                        >
                                                                            <path
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                d="M6 18L18 6M6 6l12 12"
                                                                            ></path>
                                                                        </svg>
                                                                        <input
                                                                            type="text"
                                                                            inputmode="decimal"
                                                                            id="height-p0"
                                                                            className="form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent"
                                                                            {...register(`package.${index}.box.height`)}
                                                                        />
                                                                        <span className="text-light-purple ml-3 md:ml-1">
                                                                            cm
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col mb-6 md:mb-0">
                                                                    <p className="md:mb-2">Weight</p>
                                                                    <div className="flex items-center">
                                                                        <input
                                                                            type="text"
                                                                            inputmode="decimal"
                                                                            id="weight-p0"
                                                                            className="form-input rounded-xl w-full max-w-[285px] md:w-[55px] md:max-w-full h-[40px] text-dark-purple font-semibold text-center mr-2 md:mr-0 border-transparent"
                                                                            {...register(`package.${index}.box.weight`)}
                                                                        />
                                                                        <span className="text-light-purple ml-1">kg</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="text-xs text-subtext-gray">
                                                                For large fragile items like paintings, speakers,
                                                                monitors, and bicycles, please
                                                                <a
                                                                    href="https://wa.me/6591187971"
                                                                    className="text-dark-purple"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    tabindex="-1"
                                                                >
                                                                    WhatsApp us
                                                                </a>
                                                                for a custom quote.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/* <AddBox packageIndex={index}/> */}
                                                    <ItemFields packageIndex={index} />
                                                </div>
                                            )
                                        })
                                    }

                                    <div class="mx-8 md:mx-0">
                                        <button
                                            onClick={() => packageAppend({
                                                packing: '',
                                                box: {
                                                    size: '',
                                                    length: '',
                                                    width: '',
                                                    height: '',
                                                    weight: '',
                                                    items: [{
                                                        quantity: '',
                                                        description: '',
                                                        category: '',
                                                        totalValue: '',
                                                        totalWeight: ''
                                                    }]
                                                },
                                                totalItemsValue: ''
                                            })}
                                            type="button"
                                            class="pill-button group flex justify-center items-center border-transparent hover:bg-disabled-purple font-normal text-sm text-dark-purple w-full h-10 shadow-none rounded-lg  bg-[#c5b3f3] focus:outline-light-purple"
                                        >
                                            <svg
                                                width="19"
                                                height="19"
                                                class="group-hover:stroke-white stroke-[#844FFA] mx-2 "
                                                viewBox="0 0 28 28"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="14"
                                                    cy="14"
                                                    r="13"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                ></circle>
                                                <line
                                                    x1="7.22266"
                                                    y1="13.1353"
                                                    x2="20.44"
                                                    y2="13.1353"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                ></line>
                                                <line
                                                    x1="14.3574"
                                                    y1="7.22217"
                                                    x2="14.3574"
                                                    y2="20.4396"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                ></line>
                                            </svg>{" "}
                                            Add New Package
                                        </button>
                                    </div>
                                    <div className="h-20 mt-2">
                                        <div className="transition-[height] duration-500 ease-in-out pointer-events-none overflow-hidden h-0 invisible">
                                            <svg
                                                width="5"
                                                height="147"
                                                className="mx-auto undefined"
                                                viewBox="0 0 5 147"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <line
                                                    x1="2.5"
                                                    y1="2.5"
                                                    x2="2.49999"
                                                    y2="144.5"
                                                    stroke="#6211CB"
                                                    stroke-width="5"
                                                    stroke-linecap="round"
                                                    stroke-dasharray="3 20"
                                                ></line>
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        id="quote-summary"
                                        className="transition-all duration-300 scroll-mb-[500px] scroll-pb-[500px] opacity-0 -translate-y-[20%] invisible"
                                    >
                                        <div className="bg-white rounded-xl">
                                            <div className="px-8 pt-6">
                                                <p className="px-4 sm:px-8 pb-8 text-center">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        className="w-[24px] inline-block self-center stroke-dark-purple mb-1"
                                                    >
                                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                                        <line x1="12" y1="9" x2="12" y2="13"></line>
                                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                    </svg>
                                                    <br />
                                                    Your package is very heavy/large, please check that
                                                    your stated dimensions are correct or contact our
                                                    customer service by
                                                    <a
                                                        href="https://wa.me/6591187971"
                                                        className="text-dark-purple"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        tabindex="-1"
                                                    >
                                                        WhatsApp
                                                    </a>
                                                    for a custom quote
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PackageForm;
