const Passengers = require('./passengers');
const Bookings = require('./booking');
const Username = require('./username');

Passengers.sync({alter: true});
Bookings.sync({alter: true});
Username.sync({alter: true});