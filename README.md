# JimmyClient
A node client for placing an order at your nearest Jimmy Johns!

***DISCLAIMER***: This client was built by inspecting web traffic while ordering Jimmy John's online. This is not endorsed by Jimmy Johns nor is their API publicly documented - this means the client could potentially malfunction based on changes made to the Jimmy John's API. Please use carefully and be respectful of Jimmy John's site - don't issue large numbers of requests!

# Installation

```
npm install --save jimmy-client
```

In your project, you can the access the client.

```js
const JimmyClient = require('jimmy-client');
const orderDetails = {
    locationId: 0000,
    OrderType: JimmyClient.Order.OrderType.DELIVERY,
    ScheduleTime: 'ASAP'
};

//You must do this before you can access certain endpoints like menus and menu items.
JimmyClient.Order.start().then(order => {
    //Order is now available
});
```

# Usage

Orders are session based so you don't need to track an order object. Changes made or to your session's current order.

## Locations

There are two types of orders - pickup and delivery. You can find which locations are available to you based on your needs. For a delivery order, the location needs to actually service the delivery address. Alternatively, for pickup orders, you just need to know that there is a location nearby. The `Location` resource on the client provides both of these lookup types as well as the ability to look up a location by id. Below are examples of each. 

**Responses**

Responses to location endpoints appear to be the same format - even if the search is by id or only returns a single locations. Currently, only the Locations property contains data needed to order.

```json
{
    "Regions": [],
    "Districts": [],
    "Locations": [
        {
            "Id":6078,
            "Name":"#3006 475 South 11th Street",
            "Abbreviation":"#3006",
            "DistrictId":1798,
            "Phone":"409-239-7205",
            "DeliveryLeadTime":30,
            "PickupLeadTime":30,
            "LocationLocalTime":"2016-05-30T21:43:45.1668622Z",
            "LocationGMTTimeString":null,
            "LocationTimeZone":0,
            "AddressLine1":"475 South 11th Street",
            "AddressLine2":"",
            "City":"Beaumont",
            "State":"TX",
            "Zipcode":"77701",
            "StoreHours":"10:30 AM - 10:00 AM",
            "PickupMinOrderValue":"3.50",
            "DeliveryMinOrderValue":"3.00",
            "Distance":2.1218952842544239,
            "Latitude":30.073963165283203,
            "Longitude":-94.12957763671875,
            "MapUrl":"https://maps.googleapis.com/maps/api/staticmap?markers=color:red...",
            "IsOffline":false,
            "IsClosed":false,
            "PaymentTypes":[],
            "CardTypes":[],
            "ScheduleTimes":[],
            "LocationMessages":[]
        },
    ],
    "DeliveryStates": [],
    "LocationGeoCoordinates": null,
    "Pricing": null,
    "InfoItems": [],
    "UserMessages": []
}
```

---

**Location search for delivery**

You will need to provide the actual address of the delivery to the method. The example below shows all of the address properties you can supply, but at this time it is unclear which properties are required for the system to accurately lookup a location (e.g. are Lat/Long actually required?):

```js
const deliveryAddress = {
    FriendlyName:"",
    Company:"",
    GateCode:"",
    DeliveryInstructions:"",
    SaveInstructions:true,
    CacheAddress:false,
    SaveAsDefault:false,
    Index:null,
    AddressLine1:"650 Pine St.",
    AddressLine2:"",
    City:"Beaumont",
    State:"TX",
    Zipcode:"77701",
    Country:null,
    DisplayText:null,
    Latitude: 30.08802,
    Longitude: -94.0981074
};

JimmyClient.Location.getLocationForDelivery(deliveryAddress).then(response => {
    //response.Locations is an array of locations that can be used
});
```

---

**Location search for pickup**

Pickup location searches are much more lenient - all you need is a rough area to find locations.

```js
const area = {
    Region:"",
    District:"",
    Zipcode:"77707"
};

JimmyClient.Location.getLocationForPickup(area).then(response => {
    //response.Locations is an array and usually contains more results than deliveryAddress
});
```

In theory you can also search by region and district, but I can't find any examples of identifying either to even be able.

---

**Location search by id**

If you already have a location id but want the full location details you can search by id (e.g. a saved location in your system but want to show the details of the location).

```js
const locationId = 6078;

JimmyClient.Location.getById(locationId).then(response => {
    //Once again, response.Location is an array, and should either have 1 or 0 entries.
});
```

