angular
  .module('loginBackgrounds', [])
  .component('prmStandAloneLoginAfter', {
    controller: ['loginBackgroundsService', function (loginBackgroundsService) {
      this.$onInit = function () { loginBackgroundsService.setBackground() }
      this.$onDestroy = function () { loginBackgroundsService.clearBackground() }
    }]
  })
  .factory('loginBackgroundsService', ['$document', '$stateParams', 'loginImages',
    function ($document, $stateParams, loginImages) {
      return {
        get bodyElement() {
          return angular.element($document.find('body')[0])
        },
        chooseBackground: function() {
          return 'custom/' + $stateParams.vid + '/img/login/' + loginImages[Math.floor(Math.random() * loginImages.length)]
        },
        setBackground: function () {
          let background = this.chooseBackground()
          this.bodyElement.css('background', `url("${background}")`)
          this.bodyElement.css('background-position', 'center')
          this.bodyElement.css('background-size', 'cover')
          this.bodyElement.css('background-repeat', 'no-repeat')
        },
        clearBackground: function () {
          this.bodyElement.css('background', '')
        }
      }
    }]
  )
