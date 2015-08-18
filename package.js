Package.describe({
  summary: "A package that provides a blog at /blog",
  version: "0.7.4",
  name: "davidsichau:blog",
  git: "https://github.com/DavidSichau/meteor-blog"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  var both = ['client', 'server'];

  // PACKAGES FOR CLIENT

  api.use([
    'u2622:persistent-session@0.4.1',
    'templating',
    'ui',
    'less',
    'underscore',
    'aslagle:reactive-table@0.5.5',
    'gfk:notifications@1.0.11'
  ], 'client');

  // FILES FOR CLIENT

  api.addFiles([
    'client/stylesheets/lib/side-comments/side-comments.css',
    'client/stylesheets/lib/side-comments/default.css',
    'client/stylesheets/lib/bootstrap-tagsinput.css',
    'client/stylesheets/lib/shariff.min.css',
    'client/boot.coffee',
    'client/compatibility/side-comments.js',
    'client/compatibility/shariff.min.js',
    'client/compatibility/bootstrap-tagsinput.js',
    'client/compatibility/typeahead.jquery.js',
    'client/views/404.html',
    'client/views/custom.html',
    'client/views/custom.coffee',
    'client/views/admin/admin.less',
    'client/views/admin/admin.html',
    'client/views/admin/admin.coffee',
    'client/views/admin/edit.html',
    'client/views/admin/edit.coffee',
    'client/views/blog/blog.less',
    'client/views/blog/blog.html',
    'client/views/blog/show.html',
    'client/views/blog/blog.coffee',
    'client/views/blog/show.js',
    'client/views/widget/latest.html',
    'client/views/widget/latest.coffee'
  ], 'client');

  // STATIC ASSETS FOR CLIENT

  api.addFiles([
    'public/default-user.png',
    'client/stylesheets/images/remove.png',
    'client/stylesheets/images/link.png',
    'client/stylesheets/images/unlink.png',
    'client/stylesheets/images/resize-bigger.png',
    'client/stylesheets/images/resize-smaller.png'
  ], 'client', { isAsset: true });

  // FILES FOR SERVER

  api.addFiles([
    'collections/config.coffee',
    'server/boot.coffee',
    'server/rss.coffee',
    'server/publications.coffee'
  ], 'server');

  // PACKAGES FOR SERVER

  Npm.depends({ rss: '0.0.4' });

  // PACKAGES FOR SERVER AND CLIENT

  api.use([
    'coffeescript',
    'deps',
    'iron:router@1.0.0',
    'iron:location@1.0.0',
    'accounts-base',
    'kaptron:minimongoid@0.9.1',
    'mrt:moment@2.8.1',
    'alanning:roles@1.2.13',
    'meteorhacks:fast-render@2.0.2',
    'summernote:standalone@0.6.0_1',
    'tap:i18n@1.4.1'
  ], both);

  // FILES FOR SERVER AND CLIENT

  api.addFiles([
    'collections/author.coffee',
    'collections/post.coffee',
    'collections/comment.coffee',
    'collections/tag.coffee',
    'router.coffee'
  ], both);
});

Package.onTest(function (api) {
  api.use("ryw:blog", ['client', 'server']);
  api.use('tinytest', ['client', 'server']);
  api.use('test-helpers', ['client', 'server']);
  api.use('coffeescript', ['client', 'server']);

  Npm.depends({ rss: '0.0.4' });

  api.addFiles('test/server/rss.coffee', 'server');
});
