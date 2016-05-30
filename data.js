module.exports = function(JimmyClient){
    return {
        order: {
            pickup: {
                LocationId: 6078,
                OrderType: JimmyClient.Order.OrderType.PICKUP,
                ScheduleTime:"ASAP"
            },
            delivery: {
                LocationId: 6078,
                OrderType: JimmyClient.Order.OrderType.DELIVERY,
                ScheduleTime:"ASAP"
            } 
        },
        location: {
            deliveryAddress: {
                    FriendlyName:"",
                    Company:"",
                    GateCode:"",
                    DeliveryInstructions:"",
                    SaveInstructions:true,
                    CacheAddress:false,
                    SaveAsDefault:false,
                    Index:null,
                    AddressLine1:"2231 Long Street",
                    AddressLine2:"",
                    City:"Beaumont",
                    State:"TX",
                    Zipcode:"77701",
                    Country:null,
                    DisplayText:null,
                    Longitude:-94.11892,
                    Latitude:30.0905
            },
            pickupSearch: {
                Region:"",
                District:"",
                Zipcode:"77707"
            },
            idSearch: 6078
        }
    };
};