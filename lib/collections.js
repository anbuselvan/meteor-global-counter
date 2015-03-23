ClicksCounter = new Meteor.Collection("counter");

// Initiaize the counter collection
if (Meteor.isServer && ClicksCounter.find().count() === 0) {
  ClicksCounter.insert({name: 'total', count: 0});
}
