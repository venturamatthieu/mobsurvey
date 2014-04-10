// Filename: models/project
define([
  'underscore',
  'backbone'
], function(_, Backbone){
    
    // Our basic **Todo** model has `title`, `order`, and `completed` attributes.
    var ModelCheckboxChoice = Backbone.Model.extend({
        // Default attributes for the todo
        // and ensure that each todo created has `title` and `completed` keys.
        defaults: {
            title: '',
            description : 'ici sera la description pour le choix',
        }
    });
    
    // Return the model for the module
    return ModelCheckboxChoice;
  
});