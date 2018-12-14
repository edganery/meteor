
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '..imports/collections/employees';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  // code to run on server at startup
  // Great place to generate data

  // Chech to see if data exists in the collection
   // See if the collection has any records
  const numberRecords = Employees.find({}).cont();
  if (!numberRecords) {
    // Generate some daa...
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();

      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    });
  };
});
