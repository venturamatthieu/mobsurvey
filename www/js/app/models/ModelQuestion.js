// Filename: models/ModelQuestion
define([
  'underscore',
  'backbone'
], function(_, Backbone){
    
    // Our basic **Todo** model has `title`, `order`, and `completed` attributes.
    var ModelQuestion = Backbone.Model.extend({
        // Default attributes for the todo
        // and ensure that each todo created has `title` and `completed` keys.
        defaults: {
            title: 'No name Question',
            title_question: '',
            qid : '',
            language:'fr'
        }
    });
    
    // Return the model for the module
    return ModelQuestion;
  
});