var app = app || {};

app.Message = Backbone.Model.extend({
  url: '/classes/messages',
  defaults: {
    chat: '',
    'created_at': ''
  },

  parse: function (res) {
    res.createdAt = moment(res.createdAt).fromNow();
    return res;
  }
});