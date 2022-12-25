import axios from "axios";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./ShipNow.css";
import CryptoJS from "crypto-js";
import SenderForm from "./SenderForm";
import RecipientForm from "./RecipientForm";
import PackageForm from "./PackageForm";
import AddonsForm from "./AddonsForm";
import ReviewForm from "./ReviewForm";
import { useDispatch } from "react-redux";
import { addParcel } from "../../../store/parcelSlice";
import { useNavigate } from 'react-router-dom';

const ShipNow = () => {
    const [form, setForm] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const methods = useForm({
        defaultValues: {
            sender: {
                firstName: "",
                lastName: "",
                email: "",
                shippingFrom: "Pakistan",
                countryCallCode: "",
                mobile: "",
                purpose: "",
            },
            recipient: {
                name: "",
                email: "",
                country: "UAE",
                mobile: "",
                address: "",
                postalCode: "",
                city: "",
                state: "",
            },
            package: [
                {
                    packing: "",
                    box: {
                        size: "",
                        length: "",
                        width: "",
                        height: "",
                        weight: "",
                        items: [
                            {
                                quantity: "",
                                description: "",
                                category: "",
                                totalValue: "",
                                totalWeight: "",
                            },
                        ],
                    },
                    totalPackageValue: "",
                },
            ],
            addons: {
                insurance: "",
                payTax: "",
            },
        },
    });

    const handleCheckout = async ({ _id, sender, recipient }) => {

        const cust_code = "001098";
        const merchant_outlet_id = "01";
        const terminal_id = "001";
        const merchant_return_url = "http://localhost:3001/thanks";
        const description = `Shipment by ${sender.firstName} ${sender.lastName} to ${recipient.name}`;
        const currency = "SGD";
        const amount = 10000;
        const order_id = _id;
        const user_fullname = `${sender.firstName} ${sender.lastName}`

        var hash = CryptoJS.HmacSHA1(`${cust_code}${merchant_outlet_id}${terminal_id}${merchant_return_url}${description}${currency}${amount}${order_id}${user_fullname}`, "OGVQ4KW90AMBRR5YA34YPLDI3ZJJANGU");
        var signature = CryptoJS.enc.Hex.stringify(hash);
        const hashed = signature.toUpperCase();

        try {
            const response = await axios.post('https://portalapi.oisbizcraft.com/api/payments', {
                order_id: order_id,
                merchant_outlet_id: merchant_outlet_id,
                terminal_id: terminal_id,
                cust_code: cust_code,
                merchant_return_url: merchant_return_url,
                amount: amount,
                currency: currency,
                user_fullname: user_fullname,
                description: description,
                hash: hashed
            })

            if (response.status === 200) {
                try {
                    const res = await axios.put(`https://justship-api-majidsheikh96.vercel.app/api/shippings/${_id}`, { link: response.data.data.url });
                    if (res.status === 201) {
                        window.location.href = res.data.paymentLink;
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = async data => {
        dispatch(addParcel(data));
        navigate('/checkout');
        // try {
        //     const response = await axios.post('https://justship-api-majidsheikh96.vercel.app/api/shippings', data);
        //     if (response.status === 201) {
        //         handleCheckout(response.data)
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
    };

    if (form > 5) {
        return setForm(1);
    }

    return (
        <div>
            <div className="bg-background-gray z-0 min-h-screen">
                <div className="max-w-3xl mx-auto pt-8 pb-6 md:pt-10 md:pb-7">
                    <div className="flex items-center justify-between w-[92%] sm:w-[80%] lg:w-[70%] mx-auto relative">
                        <div className="flex flex-col place-items-center w-max">
                            <div className="flex items-center justify-center rounded-full bg-background-gray w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] border border-dark-purple shadow-border-focus">
                                <div
                                    className={`flex items-center justify-center rounded-full  w-[26px] h-[26px] md:w-[30px] md:h-[30px] ${form === 1
                                            ? "bg-dark-purple"
                                            : form >= 2
                                                ? "bg-gray-3"
                                                : "bg-dark-purple"
                                        }`}
                                >
                                    {form === 1 ? (
                                        <span className="text-sm md:text-base font-semibold text-white">
                                            1
                                        </span>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="white"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <p
                                className={`mt-2 text-xs md:text-sm ${form === 1 ? "text-light-purple" : "text-black"
                                    }`}
                            >
                                Sender
                            </p>
                        </div>
                        <div className="flex flex-col place-items-center w-max">
                            <div
                                className={`flex items-center justify-center rounded-full w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] ${form === 2 ? "bg-dark-purple" : " bg-gray-3"
                                    }`}
                            >
                                {form === 2 ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="white"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                ) : (
                                    <span className="text-sm md:text-base font-semibold rounded-lg text-white">
                                        2
                                    </span>
                                )}
                            </div>
                            <p
                                className={`mt-2 text-xs md:text-sm ${form === 2 ? "text-light-purple" : "text-black"
                                    }`}
                            >
                                Recipient
                            </p>
                        </div>
                        <div className="flex flex-col place-items-center w-max">
                            <div
                                className={`flex items-center justify-center rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] ${form === 3 ? "bg-dark-purple" : " bg-gray-3"
                                    }`}
                            >
                                {form === 3 ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="white"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                ) : (
                                    <span className="text-sm md:text-base font-semibold rounded-lg text-white">
                                        3
                                    </span>
                                )}
                            </div>
                            <p
                                className={`mt-2 text-xs md:text-sm ${form === 3 ? "text-light-purple" : "text-black"
                                    }`}
                            >
                                Package
                            </p>
                        </div>
                        <div className="flex flex-col place-items-center w-max">
                            <div
                                className={`flex items-center justify-center rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] ${form === 4 ? "bg-dark-purple" : " bg-gray-3"
                                    }`}
                            >
                                {form === 4 ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="white"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                ) : (
                                    <span className="text-sm md:text-base font-semibold">4</span>
                                )}
                            </div>
                            <p
                                className={`mt-2 text-xs md:text-sm ${form === 4 ? "text-light-purple" : "text-black"
                                    }`}
                            >
                                Add-ons
                            </p>
                        </div>
                        <div className="flex flex-col place-items-center w-max">
                            <div
                                className={`flex items-center justify-center rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] ${form === 5 ? "bg-dark-purple" : " bg-gray-3"
                                    }`}
                            >
                                {form === 5 ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="white"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                ) : (
                                    <span className="text-sm md:text-base font-semibold">5</span>
                                )}
                            </div>
                            <p
                                className={`mt-2 text-xs md:text-sm ${form === 5 ? "text-light-purple" : "text-black"
                                    }`}
                            >
                                Review
                            </p>
                        </div>
                        <hr className="absolute border-gray-3 w-[90%] top-[16px] md:top-[20px] left-0 right-0 mx-auto" />
                    </div>
                </div>
                { }
                <div className="text-center mb-4 md:mb-6">
                    <p id="step-header" className="text-2xl md:text-3xl font-bold">
                        Sender’s Particulars
                    </p>
                    <p className="text-sm">(Point of contact for packing and billing)</p>
                </div>
                <div>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            {form === 1 ? (
                                <SenderForm />
                            ) : form === 2 ? (
                                <RecipientForm />
                            ) : form === 3 ? (
                                <PackageForm />
                            ) : form === 4 ? (
                                <AddonsForm />
                            ) : form === 5 ? (
                                <ReviewForm />
                            ) : undefined}
                            <div className="flex mx-auto py-8 justify-center gap-4 md:gap-10">
                                {form >= 2 ? (
                                    <button
                                        onClick={() => setForm(form - 1)}
                                        type="button"
                                        className="pill-button button-hover border-[#844FFA] border-2   text-[#844FFA] font-bold hover:text-white hover:bg-[#844FFA] w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl"
                                    >
                                        Back
                                    </button>
                                ) : (
                                    ""
                                )}
                                {form === 5 ? (
                                    <div>
                                        {" "}
                                        <button
                                            type="submit"
                                            id="next-button"
                                            className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl"
                                        >
                                            Go To CheckOut
                                        </button>{" "}
                                        <p className="text-center">Add to Cart</p>
                                        <br />
                                    </div>
                                ) : (
                                    <>
                                        {" "}
                                        <button
                                            onClick={() => setForm(form + 1)}
                                            type="button"
                                            id="next-button"
                                            className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl"
                                        >
                                            Next
                                        </button>
                                    </>
                                )}
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    );
};

export default ShipNow;
