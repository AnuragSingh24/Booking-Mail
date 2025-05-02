const express = require('express');
const dotenv = require('dotenv');
const bookingRoutes = require('./routes/bookingRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/book', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
