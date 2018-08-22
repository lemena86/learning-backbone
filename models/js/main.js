// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Vehicule = Backbone.Model.extend({
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

var Car = Vehicule.extend({
    start: function () {
        console.log('Car with registration number ' + this.get('registrationNumber') + ' started');
    }
});

var toyota = new Car({
    registrationNumber: 'XLI887',
    color: 'Blue'
});

console.log(toyota);

console.log('isValid ' + toyota.isValid());

toyota.unset('registrationNumber');

console.log('isValid ' + toyota.isValid());
console.log(toyota.validationError);

toyota.set('registrationNumber', 'XLI887');
console.log('isValid ' + toyota.isValid());

toyota.start();