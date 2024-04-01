
import React, { useState } from 'react';
import Container from './components/container';

function CampaignForm() {
  const [formValues, setFormValues] = useState({ field1: '', field2: '', field3: '' });

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(process.env.BACKEND_PRODUCTION+'/submit-campaign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    });
    const data = await response.json();
    console.log(data); // Handle the response as needed
  };

  return (
    <Container>
    <form onSubmit={handleSubmit}>
    <div className="mb-5 ">
      <p className='text-left'>Your Name</p>
      <input type='text' className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"></input>
    </div>
    <div className="mb-5 ">
      <p className='text-left'>Mobile Number</p>
      <input type='phone' className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"></input>
    </div>
    <div className="mb-5 ">
      <p className='text-left'>Email</p>
      <input type='email' className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"></input>
    </div>
      <div className="mb-5 ">
      <h5 className='text-left'>Press Release Topic</h5>
      <textarea
        name="field1"
        className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
        value={formValues.field1}
        onChange={handleChange}
        placeholder="Field 1"
      />
      </div>
      <h5 className='text-left'>Product Features</h5>
      <textarea
        name="field2"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
        value={formValues.field2}
        onChange={handleChange}
        placeholder="Field 2"
      />
      <h5 className='text-left'>Unique Selling Proposition</h5>
      <textarea
        name="field3"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
        value={formValues.field3}
        onChange={handleChange}
        placeholder="Field 3"
      />
      <button type="submit" className='w-full px-6 py-2 mt-3 text-center text-white bg-cyan-700 rounded-md lg:ml-5'>Submit</button>
    </form>
    </Container>
  );
}

export default CampaignForm;