'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Schema
var WishSchema = new Schema({
  name: String,
  email: String,
  title: String,
  moreFocus: String,
  lessFocus: String,
  created: Date
});

mongoose.model('Wish', WishSchema);
