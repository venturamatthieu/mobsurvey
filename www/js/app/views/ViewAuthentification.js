define([
  'jquery',
  'jquerymobile',
  'underscore',
  'backbone', 
  'text!templateglobalauth'
], function($, jQm, _, Backbone, templateglobalauth) {

    // The Application
    // ---------------

    // Our overall **AppView** is the top-level piece of UI.
     var viewAuth = Backbone.View.extend({
        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: $('div#content'),
        // Our template for the line of statistics at the bottom of the app.
        // Delegated events for creating new items, and clearing completed ones.
        events: {
            'submit #auth-form': 'checkAuthOnSubmit',
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
            //this.checkbox =  new ModelCheckbox();
            
            //On recupere les choix de reponses
                                    
            // Compile the template using Underscores micro-templating
            var compiledTemplate = _.template(templateglobalauth);
            this.$el.html(compiledTemplate);
            
        },
        
        //Actions from views
        
        checkAuthOnSubmit: function (e){
            
            //block le traitement par defaut
            e.preventDefault();
            
            //On recupere les valeurs saisie
            //var pet_data = JSON.stringify( this.getFormData(this.$el.find('form#auth-form') ) );
            var formAuthElement = this.$el.find('form#auth-form');
            var formAuthData = this.getFormData(formAuthElement);
            
            if(formAuthData.login != "" && formAuthData.password != ""){
                //router.navigate('survey/4', { trigger:true });
                this.goToSurveyListView();
               
            }
            
        },
        
        //Actions others
        goToSurveyListView:function(){
           //var rout = new Router;
           //console.log(Backbone);
           App.Router.navigate("survey", {trigger: true, replace: true});
           
           //Backbone.history.navigate('survey');

            
        },
        
        //Toosls
        getFormData: function (form){
            var self = this;
            var unindexed_array = form.serializeArray();
            var indexed_array = {};
                        
            $.map(unindexed_array, function(n, i){
               
                 indexed_array[n['name']] = n['value'];
            });
            
            return indexed_array; 
            
        }
        
    });
    
    return viewAuth;
});