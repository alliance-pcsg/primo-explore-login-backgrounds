describe('loginBackgrounds service', function() {

  var service
  var $document

  beforeEach(module('loginBackgrounds'))

  beforeEach(module(function($provide) {
    $provide.constant('loginImages', ['one.jpg', 'two.jpg'])
    $provide.factory('$stateParams', function() {
      return {
        vid: 'MY_VIEW'
      }
    })
  }))

  beforeEach(inject(function(_loginBackgrounds_, _$document_) {
    service = _loginBackgrounds_
    $document = _$document_
  }))

  describe('.bodyElement', function() {

    it('should return the <body> element', function() {
      expect(service.bodyElement).toEqual(angular.element(document.getElementsByTagName('body')[0]))
    })
  })

  describe('.setBackground()', function() {

    it('should return a string matching custom/[VID]/img/login/[filename]', function() {
      expect(service.setBackground()).toMatch(/^custom\/\w+\/img\/login\/.+/)
    })

    it('should set the body element background to the chosen image', function() {
      var bg = service.setBackground()
      expect(service.bodyElement.css('background')).toContain(bg)
      expect(service.bodyElement.css('background-position')).toBe('50% 50%')
      expect(service.bodyElement.css('background-size')).toBe('cover')
      expect(service.bodyElement.css('background-repeat')).toBe('no-repeat')
    })
  })

  describe('.clearBackground()', function() {

    it('should remove the body element background', function () {
      service.setBackground()
      service.clearBackground()
      expect(service.bodyElement.css('background')).toBe('')
    })
  })


})
