// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Vehicle = Backbone.Model.extend({
    idAttribute: 'registrationNumber',
    urlRoot: '/api/vehicles',
    validate: function (attrs) {
        if (attrs.registrationNumber === undefined || attrs.registrationNumber === null) {
            return 'Id is mandatory';
        }
    },
    start: function () {
        console.log('Vehicle started.')
    }
});


var Vehicles = Backbone.Collection.extend({
    model: Vehicle
})

var vehicles = new Vehicles([
    new Vehicle({'registrationNumber': 'XLI887', 'colour': 'Blue'}),
    new Vehicle({'registrationNumber': 'ZNP123', 'colour': 'Blue'}),
    new Vehicle({'registrationNumber': 'XUV456', 'colour': 'Gray'})
]);
console.log(vehicles);

var blues = vehicles.where({'colour': 'Blue'})
console.log(blues);

var car = vehicles.findWhere({'registrationNumber': 'XLI887'});
console.log(car);
console.log("Car as JSON", car.toJSON());


vehicles.remove(car);
console.log(vehicles);


console.log("Vehicles as JSON", vehicles.toJSON());


console.log('each');
vehicles.each(function (vehicle) {
    console.log(vehicle);
})