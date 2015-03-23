if (Meteor.isClient) {

  // subscribe the counter
  Meteor.subscribe('counter');

  Template.hello.helpers({
    counter: function () {
      // retrieve the count from db collection
      var c = ClicksCounter.findOne({name: 'total'});
      return c === undefined ? 0 : c.count;
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      var _docId = ClicksCounter.findOne({name: 'total'})._id;
      ClicksCounter.update({_id: _docId}, {$inc: {count: 1}});
    }
  });
}
