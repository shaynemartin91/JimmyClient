require('use-strict');
require('es6-promise').polyfill();

const JimmyClient = require('./src/Client');
const data = require('./data')(JimmyClient);

JimmyClient
    .Location
    .getById(data.location.idSearch)
    .then(location => {
        console.log('Location Search:')
        console.dir(location);
    
        JimmyClient
            .Location
            .getLocationForPickup(data.location.pickupSearch)
            .then(results => {
                console.log('Pickup Search:');
                console.dir(results);
            
                JimmyClient
                    .Location
                    .getLocationForDelivery(data.location.deliveryAddress)
                    .then(results => {
                        console.log('Delivery Search');
                        console.dir(results);
                    })
                    .catch(err => console.error(err));
            });
    });