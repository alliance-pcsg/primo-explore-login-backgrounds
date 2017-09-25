angular
  .module('loginBackgrounds', [])
  .component('prmStandAloneLoginAfter', {
    controller: ['loginBackgrounds', function (loginBackgrounds) {
      this.$onInit = function () { loginBackgrounds.setBackground() }
      this.$onDestroy = function () { loginBackgrounds.clearBackground() }
    }]
  })
  .factory('loginBackgrounds', ['$document', '$stateParams', 'loginImages',
    function ($document, $stateParams, loginImages) {
      return {
        get bodyElement() {
          return angular.element($document.find('body')[0])
        },
        setBackground: function () {
          var background = 'custom/' + $stateParams.vid + '/img/login/' + loginImages[Math.floor(Math.random() * loginImages.length)]
          this.bodyElement.css('background', 'url("' + background + '")')
          this.bodyElement.css('background-position', 'center')
          this.bodyElement.css('background-size', 'cover')
          this.bodyElement.css('background-repeat', 'no-repeat')
          return background
        },
        clearBackground: function () {
          this.bodyElement.css('background', '')
        }
      }
    }]
  )
