const { sendBookingEmail } = require('../services/mailService');

exports.bookHotel = async (req, res) => {
  const {
    email,
    bookingId,
    checkIn,
    checkOut,
    adults,
    children,
    hotelName,
    userName
  } = req.body;

  if (!email || !bookingId || !checkIn || !checkOut || !adults || !children || !hotelName || !userName) {
    return res.status(400).json({ error: 'All fields including email are required for Hotel booking' });
  }

  try {
    await sendBookingEmail('hotel', email, {
      bookingId,
      checkIn,
      checkOut,
      adults,
      children,
      hotelName,
      userName
    });

    res.json({ message: 'Hotel booking email sent successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send hotel email' });
  }
};

exports.bookCab = async (req, res) => {
  const {
    email,
    bookingId,
    pickupLocation,
    customerName,
    carNumber,
    dropLocation
  } = req.body;

  if (!email || !bookingId || !pickupLocation || !dropLocation || !customerName || !carNumber) {
    return res.status(400).json({ error: 'All fields including email are required for Cab booking' });
  }

  try {
    await sendBookingEmail('cab', email, {
      bookingId,
      pickupLocation,
      dropLocation,
      customerName,
      carNumber
    });

    res.json({ message: 'Cab booking email sent successfully' });
  } catch (err) {
    console.error('Error sending cab email:', err);
    res.status(500).json({ error: 'Failed to send cab email' });
  }
};
