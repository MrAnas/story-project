
import React, { useState } from 'react';

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
    const response = await fetch('/submit-campaign', {
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
    <form onSubmit={handleSubmit}>
      <input
        name="field1"
        value={formValues.field1}
        onChange={handleChange}
        placeholder="Field 1"
      />
      <input
        name="field2"
        value={formValues.field2}
        onChange={handleChange}
        placeholder="Field 2"
      />
      <input
        name="field3"
        value={formValues.field3}
        onChange={handleChange}
        placeholder="Field 3"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CampaignForm;