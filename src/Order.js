"use strict";

const RequestHelper = require('./RequestHelper'); 

class Order {
    static start(orderDetails) {
        return RequestHelper.post('/Order', orderDetails);
    }
    
    static setDeliveryAddress(address) {
        return RequestHelper.put('/Order/DeliveryAddress', address)
    }
}

Order.OrderType = {
    DELIVERY: 'Delivery',
    PICKUP: 'PICKUP'
}

module.exports = Order;