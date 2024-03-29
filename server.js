// File: server.js (Node.js/Express)

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const OpenAIApi = require("openai");
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submit-campaign', async (req, res) => {
  const { field1, field2, field3 } = req.body;
  // Call ChatGPT API with form data
  const openai = new OpenAIApi({apiKey: process.env.OPENAI_API_KEY});
  
  try {
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{role:"user", content:`Ge: ${field1}, ${field2}, ${field3}`}],
      max_tokens: 100, 
      stream: true
      
    });
    console.log("sent, response:")

    for await (const chunk of chatResponse) {
      console.log(chunk.choices[0]?.delta?.content || '');
    }
    // Create a Google Docs file with the response
    // const auth = new google.auth.GoogleAuth({
    //   // Specify your Google API credentials
    // });
    // const docs = google.docs({ version: 'v1', auth });
    // Create and write to Google Doc (omitted for brevity)

    // Send the Google Docs link via email (using Nodemailer or another service)

    res.json({ success: true, message: 'Campaign submitted successfully.' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'An error occurred.' });
  }
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
