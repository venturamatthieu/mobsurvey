// Filename: models/project
define([
  'underscore',
  'backbone', 
  'modelquestion',
], function(_, Backbone, ModelQuestion){

    // Our basic **Todo** model has `title`, `order`, and `completed` attributes.
    var ModelCheckbox = ModelQuestion.extend({
        // Default attributes for the todo
        // and ensure that each todo created has `title` and `completed` keys.
        defaults:{ 
            
        },
        initialize : function() {
            
            _.extend(ModelCheckbox.prototype.defaults, ModelQuestion.prototype.defaults);
            
            this.set("title_question", "Mon titre 22");
            //this.checkboxChoices =  new CheckboxChoices;
        }
        
    });
    
    return ModelCheckbox;
    
});