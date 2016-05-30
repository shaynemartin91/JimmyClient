"use strict";

const RequestHelper = require('./RequestHelper'); 

class Location {
    static getLocationForDelivery(address) {
        return RequestHelper.post('/Location/ForDeliveryAddress/', address);
    }
    
    static getLocationForPickup(region) {
        return RequestHelper.put('/Location/GeoCoordinateSearch/', region);
    }
    
    static getById(locationId) {
        return RequestHelper.get('/Location/?locationId=' + locationId);
    }
}

module.exports = Location;