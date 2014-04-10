// Filename: router.js
define([
    'jquery',
    'underscore',
    'jquerymobile',
    'backbone',
    'viewapp',
    'viewauthentification', 
    'viewsurveylist'
], function($, jQm, _, Backbone, ViewApp, ViewAuthentification, ViewSurveyList) {

    AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'survey': 'showSurvey',
            'auth': 'showAuth',
            // Default
            '*actions': 'defaultAction'
        }
    });

    var initialize = function() {

        var app_router = new AppRouter;

        //Authentification
        app_router.on('route:showAuth', function() {

            // Call render on the module we loaded in via the dependency array
            var authView = new ViewAuthentification();
            authView.render();

        });

        //Questionnaire
        app_router.on('route:showSurvey', function(id) {

            if(id){
                
            }else{
                // Call render on the module we loaded in via the dependency array
                var viewSurveyList  = new ViewSurveyList();
                viewSurveyList.render();
            }
        });



        app_router.on('route:defaultAction', function(actions) {

            // We have no matching route, lets display the home page
            var home = new ViewApp();
            home.render();

        });

        // Unlike the above, we don't call render on this view as it will handle
        // the render call internally after it loads data. Further more we load it
        // outside of an on-route function to have it loaded no matter which page is
        // loaded initially.
        //var footerView = new FooterView();

        Backbone.history.start({pushState: true, hashChange: false});

    };

    return {
        initialize: initialize
    };
});