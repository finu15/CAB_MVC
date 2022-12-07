const Passengers = require('./passengers');
const Bookings = require('./booking');
const Amounts = require('./amount');
const Cab = require('./mycab');

Passengers.sync({alter: true});
Bookings.sync({alter: true});
Amounts.sync({alter: true});
Cab.sync({alter: true});