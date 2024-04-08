require('dotenv').config();

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const submitRoute = require("./routes/route")
const path = require('path')
const app = express();
const port = process.env.PORT || 3000;
const i18n = require('i18n')


// Initialize Resend and OpenAI API clients
i18n.configure({
  locales: ['de', 'en'],
  directory: path.join(__dirname, 'locales'),
  cookie: 'yourcookiename',
})

// console.log(i18n.__l('hello world'))


// Middleware
app.use(cors())
app.use(bodyParser.json());
app.use(i18n.init);


// Route to submit campaign
app.use('/', submitRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
