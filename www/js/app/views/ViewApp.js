define([
  'jquery',
  'jquerymobile',
  'underscore',
  'backbone', 
  'modelcheckbox',
  'text!templatequestioncheckbox'
], function($, jQm, _, Backbone, ModelCheckbox, questionCheckBoxTemplate) {

    // The Application
    // ---------------

    // Our overall **AppView** is the top-level piece of UI.
     var viewApp = Backbone.View.extend({
        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: $('div#content'),
        // Our template for the line of statistics at the bottom of the app.
        // Delegated events for creating new items, and clearing completed ones.
        events: {
            'keypress #new-todo': 'createOnEnter',
            'click #clear-completed': 'clearCompleted',
            'click #toggle-all': 'toggleAllComplete'
        },
        // At initialization we bind to the relevant events on the `Todos`
        // collection, when items are added or changed. Kick things off by
        // loading any preexisting todos that might be saved in *localStorage*.
        initialize: function() {
           this.render(); 
        },
        // Re-rendering the App just means refreshing the statistics -- the rest
        // of the app doesn't change.
        render: function() {
            //this.collection = new ProjectsCollection();
            //this.collection.add({ name: "Ginger Kid"});
            
            //On recupere la question
            this.checkbox =  new ModelCheckbox();
            
            //On recupere les choix de reponses
                                    
            // Compile the template using Underscores micro-templating
            var compiledTemplate = _.template(questionCheckBoxTemplate, {checkbox: this.checkbox} );
            this.$el.html(compiledTemplate);
            
        }
    });
    
    return viewApp;
});