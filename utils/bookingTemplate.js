exports.generateBookingEmail = (type, data) => {
    let detailsHtml = '';
  
    if (type === 'hotel') {
        detailsHtml = `
    <p>Hi ${data.userName},</p>
    <p>Thank you for booking with us!</p>
    <p>We are pleased to confirm your Hotel booking.</p>
    <p><strong>Booking ID:</strong> ${data.bookingId}</p>
    <p><strong>Check-In:</strong> ${data.checkIn}</p>
    <p><strong>Check-Out:</strong> ${data.checkOut}</p>
    <p><strong>No. of Adults:</strong> ${data.adults}</p>
    <p><strong>No. of Children:</strong> ${data.children}</p>
    <p><strong>Hotel Name:</strong> ${data.hotelName}</p>
  `;

    } else {
      detailsHtml = `
      <p>Hi ${data.customerName},</p>
      <p>Thank you for booking with us!</p>
      <p>We are pleased to confirm your cab booking.</p>
      <p><strong>Booking ID:</strong> ${data.bookingId}</p>
      <p><strong>Pickup Location:</strong> ${data.pickupLocation}</p>
      <p><strong>Drop Location:</strong> ${data.dropLocation}</p>
      <p><strong>Car number:</strong> ${data.carNumber}</p>
    `;
    
    }
  
    return `<!DOCTYPE html>
   <html>
  <head>
    <meta charset="UTF-8">
    <title>${type.charAt(0).toUpperCase() + type.slice(1)} Booking Confirmation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f8f8f8;
        padding: 20px;
        color: #333;
      }
      .container {
        background: #fff;
        max-width: 600px;
        margin: auto;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      h2 {
        text-align: center;
        color: #2c3e50;
      }
      .details {
        margin-top: 20px;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>${type.charAt(0).toUpperCase() + type.slice(1)} Booking Confirmation</h2>
      <div class="details">
        ${detailsHtml}
      </div>
      <p>If you have any questions, please contact our support team.</p>
    </div>
  </body>
</html>
`;
  };