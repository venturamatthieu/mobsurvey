// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
    urlArgs: "bust=" + (new Date()).getTime(), //Remove for prod
    enforceDefine: false,
    waitSeconds: 0,
    paths: {
        
        jquery: '../vendor/jquery/1.11.0/jquery-min',
        jquerymobile: '../vendor/jquery-mobile/1.4.2/jquery.mobile-1.4.2.min',
        underscore: '../vendor/underscore/1.6.0/underscore',
        backbone: '../vendor/backbone/1.1.2/backbone',
        backbonelocalstorage: '../vendor/backbone-localstorage/1.1.7/backbone-localstorage',
        //Routes
        routerapp: './router',
        
        //Templates
        templates: './../../templates',
        templateglobalauth: './../../templates/app-tmpl-global-auth.html',
        templatesurveylist: './../../templates/app-tmpl-survey-list.html',
        templatequestioncheckbox: './../../templates/app-tmpl-question-checkbox.html',
        
        //Models
        models: './models',
        modelcheckbox: './models/ModelCheckbox',
        modelcheckboxChoice: './models/ModelCheckboxChoice',
        modelquestion: './models/ModelQuestion',
        
        //Collections
        collections: './collections',
        
        //Views
        views: './views',
        viewapp: './views/ViewApp',
        viewauthentification: './views/ViewAuthentification',
        viewsurveylist: './views/ViewSurveyList'
    }

});

require([
    // Load our app module and pass it to our definition function
    'app', //charge le fichier app.js

], function(App) {
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
});