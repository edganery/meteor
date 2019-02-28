import { Mongo } from 'meteor/mongo';
// first find the imports and create a meteor method for ur link
Meteor.methods({
  'links.insert': function (url) {
    console.log('attempting to save', url);
  }
})

export const Links = new Mongo.Collection('links');

