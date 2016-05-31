const JimmyClient = require('../index');
const data = require('./data')(JimmyClient);
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('Locations', function(){
    describe('#getById(id)', function(){
        
        it('should resolve', function(){
            return expect(JimmyClient.Location.getById(data.location.idSearch)).to.be.fulfilled;    
        });
        
        it('should respond with one location', function(){
            return expect(JimmyClient.Location.getById(data.location.idSearch)).to.eventually.have.property('Locations').with.length(1);
        });
        
    });
    
    describe('#getLocationForPickup(region)', function(){
        
        it('should resolve', function(){
            return expect(JimmyClient.Location.getLocationForPickup(data.location.pickupSearch)).to.be.fulfilled;
        });
       
        it('should return 2 locations', function(){
            return expect(JimmyClient.Location.getLocationForPickup(data.location.pickupSearch)).to.eventually.have.property('Locations').with.length(2);
        });
        
    });
    
    describe('#getLocationForDelivery(address)', function(){
        it('should resolve', function(){
            return expect(JimmyClient.Location.getLocationForDelivery(data.location.deliveryAddress)).to.be.fulfilled;
        });
       
        it('should return 1 locations', function(){
            return expect(JimmyClient.Location.getLocationForDelivery(data.location.deliveryAddress)).to.eventually.have.property('Locations').with.length(1);
        });
    });
});