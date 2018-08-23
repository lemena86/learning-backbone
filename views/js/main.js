var Vehicle = Backbone.Model.extend({
    idAttribute: 'registrationNumber',
});

var Vehicles = Backbone.Collection.extend({
    model: Vehicle
});

var VehicleView = Backbone.View.extend({
    tagName: 'li',
    className: 'vehicle',
    attributes: {
        'data-color': 'a'
    },
    events: {
        'click button':'onButtonClick'
    },
    render: function () {
        this.$el.html(this.model.get('registrationNumber') + '<button>Delete</button>');
        this.$el.attr("data-color", this.model.get("colour"));
        return this;
    },
    onButtonClick: function(e) {
        this.$el.remove()
    }
});

var VehiclesView = Backbone.View.extend({

    render: function () {
        var self = this;
        this.model.each(function (vehicle) {
            self.$el.append(new VehicleView({model: vehicle}).render().$el);
        })
        return this;
    }
});

var vehicles = new Vehicles([
    new Vehicle({'registrationNumber': 'XLI887', 'colour': 'Blue'}),
    new Vehicle({'registrationNumber': 'ZNP123', 'colour': 'Blue'}),
    new Vehicle({'registrationNumber': 'XUV456', 'colour': 'Gray'})
]);

var vehiclesView = new VehiclesView({el: '#container', model: vehicles});
vehiclesView.render();

