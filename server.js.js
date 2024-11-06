const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password', // Use an app password if using Gmail
  },
});

// Email sending endpoint
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'anupyadavgzp0890@gmail.com',
    subject: `Contact form submission from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email: ' + error.message);
    }
    res.status(200).send('Email sent successfully: ' + info.response);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
