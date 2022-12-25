import React from "react";
import { useFormContext } from "react-hook-form";

const AddonsForm = () => {
  const { register } = useFormContext();

  return (
    <div className="md:w-[80%] mx-auto flex justify-center">
      <div className="flex w-full max-w-3xl justify-center text-gray-4 text-sm">
        <div className="flex flex-col text-center w-full md:rounded-xl">
          <div className="flex flex-col bg-white md:rounded-xl pb-6 px-2">
            <p class="text-dark-purple font-semibold text-xl my-4">
              Would you like to insure this shipment?
            </p>
            <p class="text-center text-error-red mb-4 hidden">
              Please select an option
            </p>
            <div class="w-full sm:w-4/5 lg:w-3/4 px-8 mx-auto">
              <div class="flex flex-col md:flex-row gap-y-4 md:space-x-12 justify-between">
                <div class="basis-1/2">
                  <input
                    type="radio"
                    name="packing"
                    value="No Need Packing"
                    id="noInsurance"
                    {...register('addons.insurance')}
                  />
                  <label htmlFor="noInsurance">No insurance</label> <br />
                </div>
                <div class="basis-1/2">
                  <input
                    type="radio"
                    name="packing"
                    value="Need Packing"
                    id="addInsurance"
                    {...register('addons.insurance')}
                  />
                  <label htmlFor="addInsurance">Add insurance</label>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col bg-white md:rounded-xl mt-6 pb-6 px-2">
            <p class="text-dark-purple font-semibold text-xl my-4">
              Who will pay for taxes and duties?
            </p>
            <p class="text-center text-error-red mb-4 hidden">
              Please select an option
            </p>
            <div class="w-full sm:w-4/5 lg:w-3/4 px-8 mx-auto">
              <div class="flex flex-col md:flex-row gap-y-4 md:space-x-12 justify-between">
                <div class="flex flex-col justify-center basis-1/2">
                  <input
                    type="radio"
                    name="packing"
                    value="No Need Packing"
                    id="receiverPayTax"
                    {...register('addons.payTax')}
                  />
                  <label htmlFor="receiverPayTax">Post-paid, Receiver</label>
                </div>
                <div class="basis-1/2">
                  <input
                    type="radio"
                    name="packing"
                    value="Need Packing"
                    id="senderPayTax"
                    {...register('addons.payTax')}
                  />
                  <label htmlFor="senderPayTax">Pre-paid, Sender</label>
                </div>
              </div>
              <p class="mt-6 text-center text-xs font-semibold text-subtext-gray">
                Amount will be determined by the Customs and charged to the
                recipient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddonsForm;
