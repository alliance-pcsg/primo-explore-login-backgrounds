module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: ['spec'],
    browsers: ['PhantomJS'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'js/login-backgrounds.module.js',
      'test/*.spec.js'
    ]
  })
}
