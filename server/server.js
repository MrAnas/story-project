// File: server.js (Node.js/Express)
require('dotenv').config();

const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const { Resend } = require('resend');
const OpenAIApi = require("openai");
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors(),bodyParser.json());

app.post('/submit-campaign', async (req, res) => {
  const { field1, field2, field3 } = req.body;
  // Call ChatGPT API with form data
  const openai = new OpenAIApi({apiKey: process.env.OPENAI_API_KEY});
  const resend = new Resend('re_f9XPt2oA_7nMDfJzoYd5VMb43k3CGo1fn');

  try {
    // First: This function to collect Form Inputs to the prompt of GPT (All Fields)
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{role:"user", content:`Create Marketing Campaing for these topics: ${field1}, ${field2}, ${field3}`}],
      max_tokens: 2048, 
      stream: true
      
    });

    let data = '';
        for await (const chunk of chatResponse) {
         data+= chunk.choices[0]?.delta?.content || '';
        }

        console.log(data);
    res.json({ success: true, message: 'Campaign submitted successfully.' });

  //Second: We Create Word Doc based on the Data generated Above
  //Third: We send the mail to the customer with our Content
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'olatunjitemitayo444@gmail.com',
      subject: 'PR Mail',
      html: '<p>'+data+'</p>'
    });
  // Fourth: We use GoogleSheet/any alternative as our backend so we register the form 

} catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'An error occurred.' });
  }
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
