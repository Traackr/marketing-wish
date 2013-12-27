'use strict';

var mongoose = require('mongoose'),
    // Thing = mongoose.model('Thing');
    Wish = mongoose.model('Wish');

//Clear old things, then add things in
// Thing.find({}).remove(function() {
// 	Thing.create({
// 		name : 'HTML5 Boilerplate',
// 		info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
// 		awesomeness: 10
// 	}, {
// 		name : 'AngularJS',
// 		info : 'AngularJS is a toolset for building the framework most suited to your application development.',
// 		awesomeness: 10
// 	}, {
// 		name : 'Karma',
// 		info : 'Spectacular Test Runner for JavaScript.',
// 		awesomeness: 10
// 	}, {
// 		name : 'Express',
// 		info : 'Flexible and minimalist web application framework for node.js.',
// 		awesomeness: 10
// 	}, {
// 		name : 'MongoDB + Mongoose',
// 		info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
// 		awesomeness: 10
// 	}, function(err) {
// 			console.log('finished populating things');
// 		}
// 	);
// });

Wish.find({}).remove(function() {
	Wish.create({
		name: 'David Chancogne',
		title: 'CTO, Traackr',
		emaiL: 'dchancogne@traackr.com',
		lessFocus: 'earned content',
		moreFocus: 'paid content',
		created: new Date()
	}, {
		name: 'Pierre-Loic Assayag',
		title: 'CEO, Traackr',
		emaiL: 'passayag@traackr.com',
		lessFocus: 'social',
		moreFocus: 'engagement',
		created: new Date()
	}, {
		name: 'Robbie Van-Addibe',
		title: 'Director, Traackr',
		emaiL: 'robbie@traackr.com',
		lessFocus: 'advertising',
		moreFocus: 'human relationships',
		created: new Date()
	},
	function(err) {
			console.log('Finished populating wishes');
			if ( err ) {
				console.log(err);
			}
		}
	);
});
