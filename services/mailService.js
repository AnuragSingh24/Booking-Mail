const nodemailer = require('nodemailer');
const { generateBookingEmail } = require('../utils/bookingTemplate');
require('dotenv').config();

// Gmail transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  
  }
});

// Unified function to send booking email
const sendBookingEmail = async (type, toEmail, data) => {
  const htmlContent = generateBookingEmail(type, data);

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: toEmail,
    subject: `${type.charAt(0).toUpperCase() + type.slice(1)} Booking Confirmation - ${data.bookingId}`,
    html: htmlContent
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
  } catch (err) {
    console.error(`Error sending email: ${err.message}`);
    throw new Error('Email sending failed');
  }
};

module.exports = { sendBookingEmail };
