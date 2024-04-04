import React, { useState } from "react";


function CampaignForm() {
  const [formValues, setFormValues] = useState({
    field1: "",
    field2: "",
    field3: "",
  });

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(process.env.REACT_APP_BACKEND_PRODUCTION);
    const response = await fetch(process.env.REACT_APP_BACKEND_PRODUCTION+'/submit-campaign', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    const data = await response.json();
    console.log(data); // Handle the response as needed
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-6 md:gap-12 mx-auto py-12 lg:py-24  px-4 md:px-8"
      >
        <h2 className="font-bold text-[#002738]   text-3xl lg:text-5xl py-4">
          Press Release Form
        </h2>
        <div className="flex flex-col gap-4 md:gap-10">
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">Your Name</label>
            <input
              type="text"
              className="rounded-md border border-[#344054] p-3 placeholder-[#667085]"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">Email Address</label>
            <input
              type="text"
              className="rounded-md border border-[#344054] p-3 placeholder-[#667085]"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">Phone Number</label>
            <input
              type="text"
              className="rounded-md border border-[#344054] p-3 placeholder-[#667085]"
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
              Press Release Topic
            </label>
            <textarea
              name="field1"
              value={formValues.field1}
              onChange={handleChange}
              className="rounded-md border min-h-[128px] border-[#344054] p-3 placeholder-[#667085]"
              placeholder="E.g New Product Launch"
            />
            <p className="text-start text-[#475467] text-sm">
              The main topic of the press release
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
              Companies to be mentioned in the press release
            </label>
            <input
              className="rounded-md border border-[#344054] p-3 placeholder-[#667085]"
              placeholder="E.g Instagram, Facebook"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
              Companies Industry
            </label>
            <input
              className="rounded-md border border-[#344054] p-3 placeholder-[#667085]"
              placeholder="E.g Tech, Fintech, Saas"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=" font-medium text-base text-start text-[#344054]">
              Companies Industry
            </label>
            <input
              className="rounded-md border border-[#344054] p-3 placeholder-[#667085]"
              placeholder="E.g CEO, Marketing lead"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-8 ">
            <label className=" font-medium text-base text-start text-[#344054]">Language</label>
            <div>
              <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2  w-max">
                  <input
                    type="radio"
                    id="option1"
                    name="radioGroup"
                    className="focus:ring-[#4F46E5] h-4 w-4 cursor-pointer text-[#4F46E5] border-gray-300 rounded"
                  />
                  <label htmlFor="option1" className=" text-[#344054] cursor-pointer
">
                    English
                  </label>
                </div>
                <div className="flex items-center gap-2 ">
                  <input
                    type="radio"
                    id="option2"
                    name="radioGroup"
                    className="focus:ring-[#4F46E5] h-4 w-4 cursor-pointer  text-[#4F46E5] border-gray-300 rounded"
                  />
                  <label htmlFor="option2" className="text-[#344054] 
cursor-pointer">
                   Arabic
                  </label>
                </div>
              </div>
              <p className="text-start text-[#475467] text-sm">
              The language in which the press release should be generated
            </p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full bg-[#00263A]/90 text-lg hover:bg-[#00263A] py-4 md:py-7 rounded-xl text-white">Submit</button>
        {/* <div className="mb-5 ">
          <h5 className="text-left"></h5>
          <textarea
            name="field1"
            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
            value={formValues.field1}
            onChange={handleChange}
            placeholder="Field 1"
          />
        </div>
        <h5 className="text-left">Product Features</h5>
        <textarea
          name="field2"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
          value={formValues.field2}
          onChange={handleChange}
          placeholder="Field 2"
        />
        <h5 className="text-left">Unique Selling Proposition</h5>
        <textarea
          name="field3"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
          value={formValues.field3}
          onChange={handleChange}
          placeholder="Field 3"
        />
        <button
          type="submit"
          className="w-full px-6 py-2 mt-3 text-center text-white bg-cyan-700 rounded-md lg:ml-5"
        >
          Submit
        </button> */}
      </form>
    </div>
  );
}

export default CampaignForm;
