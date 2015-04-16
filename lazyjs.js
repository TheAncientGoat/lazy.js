// Use NPM for server side functionality
if (Meteor.isServer) {
    Lazy = Npm.require('lazy.js');
}
