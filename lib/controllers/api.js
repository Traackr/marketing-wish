'use strict';

var mongoose = require('mongoose'),
    Wish = mongoose.model('Wish');
    // async = require('async');
var fields = 'name twitter title lessFocus moreFocus';


exports.randomWish = function(req, res) {
   var r = Math.random();
   Wish.count({ }, function (err, n) {
      if ( n != 0 ) {
         // Force no cache to fool IE
         res.header("Cache-Control", "no-cache, no-store, must-revalidate");
         res.header("Pragma", "no-cache");
         res.header("Expires",0);
         Wish.findOne({}).skip(Math.floor(Math.random() * n)).select(fields).exec(function(err, wish) {
            if ( !err ) {
               return res.json(wish);
            }
         });
      } else {
         Wish.findOne({}).select(fields).exec(function(err, wish) {
            if ( !err ) {
               return res.json(wish);
            }
         });
      }
   });

};

exports.loadWish = function(req, res) {
   console.log(req.params.id);
   Wish.findById(req.params.id, fields, function(err, wish) {
      console.log(wish);
      if ( !err ) {
         return res.json(wish)
      }
      else {
         res.send(err);
      }
   });
};

exports.addWish = function(req, res) {

   var w = new Wish(req.body);
   w.created = new Date();
   w.save(function (err, data) {
      if (err) {
         return res.send(err);
      }
      else {
         return res.json(data);
      }
   });
};

exports.updateWish = function(req, res) {

   var w = new Wish(req.body);
   if ( w._id ) {
      Wish.update(
         { _id: w._id },
         { $set: { email: w.email }},
         function (err, data) {
            if (err) {
               return res.send(err);
            }
            else {
               return res.json(data);
            }
         }
      );
   }

};

exports.allWishes = function(req, res) {

   Wish.find({}, fields, function(err, wishes) {
      if ( !err ) {
         return res.json(wishes);
      }
      else {
         res.sed(err);
      }
   });
};
