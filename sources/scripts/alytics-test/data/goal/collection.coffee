class AlyticsTest.Goal.Collection extends Backbone.Collection

  type: 'AlyticsTest.Goal.Collection'

  model: AlyticsTest.Goal.Model

  initialize: (models, options) ->

  set: ->
    super

    localStorage.setItem('goals',JSON.stringify(@toJSON()))
