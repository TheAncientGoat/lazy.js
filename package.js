Package.describe({
    name: 'ryanswrt:lazyjs',
    version: '0.0.1',
    summary: 'Isomorphic wrapping of Lazy.js (Underscore replacement) for client and server side use',
    git: 'https://github.com/TheAncientGoat/lazy.js',
    documentation: 'README.md'
});

Npm.depends({
    'lazy.js': '0.4.0'
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.export('Lazy', 'server');
  api.addFiles('lazyjs.js');
  api.addFiles('olazy.js', 'client');
});

Package.onTest(function(api) {
  api.use('sanjo:jasmine');
  api.use('ryanswrt:lazyjs');
    //Lots of specs from the old lib
    //TODO: Tests when new code is added?
});
