const { Resend } = require("resend");
const openAIApi = require("openai");

// Initialize Resend and OpenAI API clients
const resend = new Resend("re_ghm2qEPX_8MhXhU37okttxpAnZMQH56Sx");
const openai = new openAIApi({ apiKey: process.env.OPENAI_API_KEY });

async function submitCampaignHandler(req, res) {
  const { name,email, field1, field2, field3, field4, lang } = req.body;

  try {
    // First: This function to collect Form Inputs to the prompt of GPT (All Fields)
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Create Marketing Campaing for these topics:  ${field1}, ${field2}, ${field3}, ${field4}`,
        },
      ],
      max_tokens: 2048,
      stream: true,
      
    });
    
    let data = "";
    for await (const chunk of chatResponse) {
      data += chunk.choices[0]?.delta?.content || "";
    }

    console.log(data);
    res.json({ success: true, message: "Campaign submitted successfully." });
    

    //Second: We Create Word Doc based on the Data generated Above
    //Third: We send the mail to the customer with our Content
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "olatunjitemitayo444@gmail.com",
      subject: "PR Mail",
      html: "<p>" + data + "</p>",
    });
    // Fourth: We use GoogleSheet/any alternative as our backend so we register the form
  } catch (error) {
    console.log("Error submitting campaign:", error);
    res.status(500).json({ success: false, message: "An error occurred." });
  }
}

module.exports = submitCampaignHandler;
