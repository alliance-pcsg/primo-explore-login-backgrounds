describe('prmStandAloneLoginAfter component', function () {

  var $componentController
  var mock

  beforeEach(module('loginBackgrounds'))

  beforeEach(module(function($provide) {
    $provide.factory('loginBackgrounds', function () {
      mock = {
        clearBackground: jasmine.createSpy(),
        setBackground: jasmine.createSpy()
      }
      return mock
    })
  }))

  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_
  }))

  it('should call setBackground() on init hook', function () {
    var ctrl = $componentController('prmStandAloneLoginAfter')
    ctrl.$onInit()
    expect(mock.setBackground).toHaveBeenCalled()
  })

  it('should call clearBackground() on destroy hook', function () {
    var ctrl = $componentController('prmStandAloneLoginAfter')
    ctrl.$onDestroy()
    expect(mock.clearBackground).toHaveBeenCalled()
  })


})
