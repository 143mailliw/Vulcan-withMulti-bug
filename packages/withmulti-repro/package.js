// packages.js #tutorial-step-2 - Decribes the contents of the package as well as the dependencies. 

Package.describe({
  name: 'withmulti-repro',
});

Package.onUse(function (api) {

  api.use([

    // Here are our dependencies:

    // vulcan core
    'promise',
    'vulcan:core@=1.13.4',

    // vulcan packages
    'vulcan:forms@=1.13.4',
    'vulcan:accounts@=1.13.4',
    'vulcan:ui-bootstrap@=1.13.4',

  ]);

  api.addFiles('lib/stylesheets/style.css');

  // Here is the entry point for client & server:
  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});
