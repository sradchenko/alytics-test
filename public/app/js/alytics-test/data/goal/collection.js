(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AlyticsTest.Goal.Collection = (function(_super) {
    __extends(Collection, _super);

    function Collection() {
      _ref = Collection.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Collection.prototype.type = 'AlyticsTest.Goal.Collection';

    Collection.prototype.model = AlyticsTest.Goal.Model;

    Collection.prototype.initialize = function(models, options) {};

    Collection.prototype.set = function() {
      Collection.__super__.set.apply(this, arguments);
      return localStorage.setItem('goals', JSON.stringify(this.toJSON()));
    };

    return Collection;

  })(Backbone.Collection);

}).call(this);
