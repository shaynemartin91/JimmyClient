const RequestHelper = require('./RequestHelper'); 
const Order = require('./Order');
const Location = require('./Location');

class Client {
    static Menu() {
        return RequestHelper.get('/Menu');
    }
};

Client.Order = Order;
Client.Location = Location;

module.exports = Client;