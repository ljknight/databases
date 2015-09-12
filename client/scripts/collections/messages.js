var app = app || {};

app.Messages = Backbone.Collection.extend({

  model: app.Message,
  url: '/classes/messages',
  comparator: function (m) {
    return -m.get('createdAt');
  },

  initialize: function () {
    this.fetch();
  }

});