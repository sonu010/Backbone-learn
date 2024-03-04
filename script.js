// // // Define the Person model
// // var Person = Backbone.RelationalModel.extend({
// //     relations: [{
// //         type: 'HasMany',
// //         key: 'jobs',
// //         relatedModel: 'Job',
// //         reverseRelation: {
// //             key: 'person'
// //         },
        
// //     }]
// // });

// // // Define the Job model
// // var Job = Backbone.RelationalModel.extend({
// //     defaults: {
// //         'startDate': null,
// //         'endDate': null
// //     }
// // });

// // // Define the Company model
// // var Company = Backbone.RelationalModel.extend({
// //     relations: [{
// //         type: 'HasMany',
// //         key: 'employees',
// //         relatedModel: 'Job',
// //         reverseRelation: {
// //             key: 'company'
// //         }
// //     }]
// // });

// // // Create an instance of the Person model
// // var person = new Person({
// //     id: 101,
// //     name: 'Vignesh',
// //     age: 21
// // });

// // // Create instances of the Job model and associate them with the person
// // var job1 = new Job({ id: 1, title: 'Software Engineer', startDate: '2024-01-01', endDate: '2024-12-31' });
// // var job2 = new Job({ id: 2, title: 'Product Manager', startDate: '2025-01-01', endDate: '2025-12-31' });

// // person.get('jobs').add(job1);
// // person.get('jobs').add(job2);

// // // Create an instance of the Company model
// // var company = new Company({
// //     id: 1,
// //     name: 'TechSophy',
// //     location: 'Hyderabad'
// // });

// // // Associate the jobs with the company
// // company.get('employees').add(job1);
// // company.get('employees').add(job2);

// // // Log the models and their attributes to the console
// // console.log('Person:');
// // console.log(person.toJSON());
// // console.log('Jobs:');
// // person.get('jobs').each(function(job) {
// //     console.log(job.toJSON());
// // });
// // console.log('Company:');
// // console.log(company.toJSON());

// // ---------------------------------------------------------------------------------------------------

// Zoo = Backbone.RelationalModel.extend({
// 	relations: [{
// 		type: Backbone.HasMany,
// 		key: 'animals',
// 		relatedModel: 'Animal',
// 		collectionType: 'AnimalCollection',
// 		reverseRelation: {
// 			key: 'livesIn',
// 			includeInJSON: 'id'
// 			// 'relatedModel' is automatically set to 'Zoo'; the 'relationType' to 'HasOne'.
// 		}
// 	}]
// });

// Animal = Backbone.RelationalModel.extend({
// 	urlRoot: '/animal/'
// });

// AnimalCollection = Backbone.Collection.extend({
// 	model: Animal
// });

// // We've now created a fully managed relation. When you add or remove model from `zoo.animals`,
// // or update `animal.livesIn`, the other side of the relation will automatically be updated.
// var artis = new Zoo( { name: 'Artis' } );
// var lion = new Animal( { species: 'Lion', livesIn: artis } );

// // `animals` in `artis` now contains `lion`
// console.log( artis.get( 'animals' ).pluck( 'species' ) );


// Mammal=Animal.extend({
//     subModelTypes:{
//         'primate':'Primate',
//         'carnivore':'Carnivore'
//     }
// });
// Primate = Mammal.extend();
// Carnivore = Mammal.extend();

// MammalCollection = AnimalCollection.extend({
// 	model: Mammal
// });

// // Create a collection that contains a 'Primate' and a 'Carnivore'.
// var mammals = new MammalCollection([
// 	{ id: 3, species: 'chimp', type: 'primate' },
// 	{ id: 5, species: 'panther', type: 'carnivore' }
// ]);

// var chimp = mammals.get( 3 );

// console.log( 'chimp is an animal? ' + ( chimp instanceof Animal ) + '\n' +
// 	'chimp is a carnivore? ' + ( chimp instanceof Carnivore ) + '\n' +
// 	'chimp is a primate? ' + ( chimp instanceof Primate ) );


//     Zoo.findModel = function(attributes) {
//         // Try to find an instance of 'this' model type in the store
//         var model = Backbone.Relational.store.find(this, attributes);
    
//         // If no model is found and attributes is an object
//         if (!model && _.isObject(attributes)) {
//             // Retrieve the collection of Zoo models from the store
//             var coll = Backbone.Relational.store.getCollection(this);
    
//             // Find a model in the collection where the species attribute matches attributes.species
//             model = coll.find(function(m) {
//                 return m.species === attributes.species;
//             });
//         }
    
//         // Return the found model or null if not found
//         return model;
//     };
    



// var Song = Backbone.Model.extend({
//     initialize: function(){
//         console.log("New Song is created")
//     },
//     validate: function(attribute){
//         if (!attribute.title){
//             return "Title is required";
//         }
//     }
// });

// var song = new Song({
//     title:"THis is Title",
//     name:"ABcd",
//     date:"12-12-2024",
//     text:"New Text",
//     default:{
//         genre:"Jazz",
//     }
// });
// song.isValid();
// console.log(song.toJSON())
// var lastError= song.validationError;
// console.log(lastError)

// var Animal=Backbone.Model.extend({
//     walk: function(){
//         console.log("Animal walking");
//     }
// });

// var Dog=Animal.extend({
//     walk:function(){
//         Animal.prototype.walk.apply(this);
//         console.log("Dog walking")
//     }
// });
// var dog=new Dog();
// dog.walk();


// var Song=Backbone.Model.extend();

// var Songs= Backbone.Collection.extend({
//     model:Song
// })

// var songs=new Songs([
//     new Song({title : "AB"}),
//     new Song({title:"BC"}),
//     new Song({title:"CD"})
// ]) ;

// var songs= new Songs();

// songs.add(new Song({title:"DE", genre:"Jazz",time:123}),{at:0});
// songs.push(new Song({title:"EF", genre:"Jazz",time:234}));
// var jazzSongs = songs.where({genre:"Jazz"})
// var firstJazzSong = songs.findWhere({genre:"Jazz"})
// var filtered = songs.where({title:"EF", genre:"Jazz"})
// console.log(jazzSongs+"  "+firstJazzSong);
// console.log()
// console.log(filtered)
// var timebased = songs.filter(function(){
//     return songs.get("time")>0;
// });
// console.log(timebased)


// var SongView = Backbone.View.extend({
//     tagName:"span",
//     className:"song",
//     id:1234,
//     attributes:{
//         "data-genre":"Jazz"
//     },
//     render: function(){
//         this.$el.html("Rendered");
//         return this;
//     }
// });
// var songview=new SongView()
// songview.render();
// $("#container").html(songview.$el);




// // This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
// function AppViewModel() {
//     this.firstName = ko.observable("Bert");
//     this.lastName = ko.observable("Bertington");

//     this.fullName = ko.computed(function() {
//         return this.firstName() + " " + this.lastName();    
//     }, this);

//     this.capitalizeLastName = function() {
//         var currentVal = this.lastName();        // Read the current value
//         this.lastName(currentVal.toUpperCase()); // Write back a modified value
//     };    
// }

// document.addEventListener("DOMContentLoaded",function(){
//     ko.applyBindings(AppViewModel())
// }
// )

//Class to represent a row in the seat reservations grid
function SeatReservation(name, initialMeal) {
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);
}       

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    self.availableMeals = [
        { mealName: "Standard (sandwich)", price: 0 },
        { mealName: "Premium (lobster)", price: 34.95 },
        { mealName: "Ultimate (whole zebra)", price: 290 }
    ];    

    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation("Steve", self.availableMeals[1]),
        new SeatReservation("Bert", self.availableMeals[2])
    ]);
    self.addSeat=function(){
        self.seats.push(new SeatReservation(" ",self.availableMeals[1]))
    }
    
}

document.addEventListener("DOMContentLoaded", function() {
    var viewModel = new ReservationsViewModel();
    ko.applyBindings(viewModel);
});
