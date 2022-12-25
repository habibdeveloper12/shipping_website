import React, { useEffect } from 'react';
import { GoLocation } from "react-icons/go"
import { FaCarSide } from "react-icons/fa"
import { useSelector } from 'react-redux';
import axios from "axios";
import CryptoJS from "crypto-js";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment/moment';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import "./checkout.css"
import Firstpart from './Firstpart';
const Checkout = () => {
  const [value,setValue]=useState()
  var new_date = moment(moment(), "DD-MM-YYYY").add('days', 1);
  const [startDate, setStartDate] = useState(new Date());
    const [first, setFirst] = useState(new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"}));
  const [second, setSecond] = useState({
    date:new Date().getDate()+1,
 month:moment().add(1, 'days').format('MMMM'),
    week:moment().add(1, 'days').format('dddd')
  });
  const [third, setThird] = useState({
    date:new Date().getDate()+2,
 month:moment().add(2, 'days').format('MMMM'),
    week:moment().add(2, 'days').format('dddd')
  });
  const [date,setDateValue]=useState(false)
console.log(new_date)
 const time=[
  {
    somoy:"9:00-10:00"
  },
  {
    somoy:"11:00am-12:00"
  },
  {
    somoy:"1:00-3:00"
  },
  {
    somoy:"4:00-5:00"
  },
    {
    somoy:"5:00-7:00"
  },
 ]

  const { parcel } = useSelector(state => state);

  const handleCheckout = async ({ _id, sender, recipient }) => {

    const cust_code = "001098";
    const merchant_outlet_id = "01";
    const terminal_id = "001";
    const merchant_return_url = "http://localhost:3000/thanks";
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


  const handlePayment = async () => {
    try {
      const response = await axios.post('https://justship-api-majidsheikh96.vercel.app/api/shippings', parcel);
      if (response.status === 201) {
        handleCheckout(response.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleDate= ()=>{
   setDateValue(!date)
  }

  return (
    <div>
      <div className='bg-background-gray py-16 md:pl-16 md:pr-12 min-h-screen md:min-h-[80vh] '>
        <div className='max-w-5xl mx-auto'>
          <div className='md:grid grid-cols-[68%_32%] gap-x-12 relative'>
           {/* start left copmonent */}
            <div>
              <div className='bg-white rounded-xl py-2'>
             
                <div className='w-[85%] md:w-[75%] lg:w-[65%] mx-auto text-sm '>
               
                  <p class="font-bold text-2xl text-center">How would you like JustShip to <br /> collect your parcel?</p>
            <Tabs>
                     <TabList className='flex flex-wrap my-8 justify-center gap-6 md:gap-8 '>
      <Tab className={"rounded-xl"}><button className='pill-button button-hover flex justify-center items-center group w-[140px] lg:w-[160px] h-[40px]  text-light   border ' >
                      <FaCarSide width={34} height={24} />
                      <span class="ml-1">Pick Up</span>
                    </button></Tab>
      <Tab className={"rounded-xl"}>     <button className='pill-button button-hover flex justify-center items-center group w-[140px] lg:w-[160px] h-[40px]  text-light border '>
                      <GoLocation width={34} height={24} />
                      <span class="ml-1">Drop Up</span>
                    </button></Tab>
    </TabList>
                 {/* final component  */}
                <TabPanel>
    <div>
                      <label class="block font-normal text-subheading-gray text-sm group-focus-within:text-dark-purple" for="contact-person-mobile">Pickup contact's mobile</label>
                      <div className='flex h-10 mt-1 mb-6 relative rounded-xl border focus-within:border-light-purple focus-within:shadow-border-focus border-border-dark-gray shadow-border'>
                        <div className='relative text-gray-4 text-sm'>
                       <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
                        </div>
  
                      </div>
                    </div>
                    <div class="grid auto-rows-fr gap-y-2 md:grid-cols-3"><p class="text-subtext-gray font-medium w-max">Pick Up Date</p></div>
                    <div className=''>
                      <Tabs>
    <TabList className={"grid grid-cols-3 gap-x-5"}>
      <Tab> <button type="button" id="date1" class="form-input h-[50px] leading-snug my-2   hover:text-black border-transparent px-5">{first}</button></Tab>
      <Tab> <button type="button" id="date2" class="form-input h-[50px] leading-snug my-2  hover:text-black hover:border-transparent px-5 ">{second.week} <br /> {second.month}{second.date}   </button></Tab>
      <Tab>  <button type="button" id="date3" class="form-input h-[50px] leading-snug my-2  hover:text-black hover:border-transparent px-5">{third.week} <br /> {third.month}{third.date} </button></Tab>
    </TabList>

 
  </Tabs>
                     
                     
                    
                    </div>  
                   <div onClick={handleDate}>
                    <p id="show-more-dates" class="text-light-purple hover:text-dark-purple cursor-pointer h-8 mt-2">Show more dates <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline mb-1 w-[20px] h-[20px]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></p>
                   </div> <br />
                  {
                    date && <div className='flex justify-center items-center'>
                       <DatePicker className='border border-primary rounded' selected={startDate} onChange={(date) => setStartDate(date)} />  
                    </div> 
                  }
                 
                  <div className='mt-3'>
                    <Firstpart/>
                  </div>
                </TabPanel>
                 
    <TabPanel>
       <Tabs>
            <TabList className={"grid grid-cols-3 gap-x-5"}>
      <Tab> <button type="button" id="date1" class="form-input h-[50px] leading-snug my-2   hover:text-black border-transparent px-5">{first}</button></Tab>
      <Tab> <button type="button" id="date2" class="form-input h-[50px] leading-snug my-2  hover:text-black hover:border-transparent px-5 ">{second.week} <br /> {second.month}{second.date}   </button></Tab>
      <Tab>  <button type="button" id="date3" class="form-input h-[50px] leading-snug my-2  hover:text-black hover:border-transparent px-5">{third.week} <br /> {third.month}{third.date} </button></Tab>
    </TabList>
     <div onClick={handleDate}>
                    <p id="show-more-dates" class="text-light-purple hover:text-dark-purple cursor-pointer h-8 mt-2">Show more dates <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline mb-1 w-[20px] h-[20px]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></p>
                   </div> <br />
                  {
                    date && <div className='flex justify-center items-center'>
                       <DatePicker className='border border-primary rounded' selected={startDate} onChange={(date) => setStartDate(date)} />  
                    </div> 
                  }
                 
       </Tabs>
   <Tabs>
   <TabList className={"grid grid-cols-2 gap-x-4 gap-y-4 "}>
                    {
                      time.map((data=>{
                        return  <Tab className={"rounded-xl"}>
                        <div class="grid grid-cols-2 border rounded ">
                          <button type="button" id="timemorning1" class="col-span-2 sm:col-span-1 form-input h-[50px] leading-snug my-2 px-4  hover:text-black hover:border-transparent ">{data.somoy}</button></div>
                    </Tab>
                      }))
                    }
                   
                      </TabList>
</Tabs>
<p className='mt-4'>The drop-off address is below. We are open from 10am to 4pm. For urgent shipments, we suggest that you come at 10am.

71 Ubi Cres, #04-12,
Singapore 408571</p>
    </TabPanel>
</Tabs>


                </div>
              </div>
                
            </div>
            
            
            
            {/* end of left side  */}
            <div>
              <div className='self-start bg-white rounded-xl md:sticky top-32 py-8 px-6 text-subheading-gray text-sm'>
                <p class="font-semibold text-lg">Your Details</p>
                <p id="sender-name">sdsd sdsd</p>
                <p id="mobile-no">+65 43434343</p>
                <hr class="border-border-gray border-t my-8"></hr>
                <p class="font-semibold text-lg">Collection</p>
                <p id="DOPU"></p>
                <p id="collection-time"></p>
                <hr class="border-border-gray border-t my-8"></hr>
                <p class="font-semibold text-lg">Shipments</p>
                <div class="grid grid-cols-[auto_30%] mt-3"><div class="grid grid-cols-[20px_auto] items-center text-gray-600"><svg width="20" height="20" viewBox="0 0 100 100" class="inline-block w-3 h-3 fill-current transition-transform hover:cursor-pointer rotate-90"><polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon></svg> <p class="flex pr-2">(NZ) dfdf</p></div> <p class="justify-self-end text-right">SGD 851.89</p></div>
                <hr className='border-border-gray border-t my-8' />
                <div class="grid grid-cols-[50%_50%]"><p class="text-subheading-gray font-bold text-lg">Total</p><p class="text-dark-purple font-bold text-lg whitespace-nowrap text-right">SGD 851.89</p></div>
                <hr className='border-border-gray border-t my-8' />
                <div class="flex flex-col text-left md:mx-auto"><label for="addinfo" class="font-semibold text-lg">Additional Information</label><textarea type="text" id="addinfo" class="form-input rounded-md resize-y disabled:resize-none placeholder:text-placeholder-gray h-24 md:h-20 md:mb-8 p-2" placeholder="Additional information about your packages"></textarea></div>
                <button type="button" id="cart-checkout-button" class="pill-button button-hover bg-light-purple hover:bg-dark-purple text-base text-white w-full h-[45px] mx-auto mt-12 md:mt-0 disabled:cursor-not-allowed disabled:bg-disabled-purple disabled:border-transparent" onClick={handlePayment}>Proceed to PayNow</button>
                <button class="my-2 block mx-auto underline text-subtext-gray hover:text-light-purple" onClick={handlePayment}>Pay with Credit Card (+3%)</button>
              </div>
            </div>


          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Checkout;