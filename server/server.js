Meteor.startup(function () {
  // code to run on server at startup
});

// publish the counter
Meteor.publish('counter', function() {
  return ClicksCounter.find();
});
