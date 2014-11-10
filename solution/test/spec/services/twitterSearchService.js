'use strict';

describe('Service: twitterSearchService', function () {

  // load the service's module
  beforeEach(module('solutionApp'));

  // instantiate service
  var twitterSearchService;
  beforeEach(inject(function (_twitterSearchService_) {
    twitterSearchService = _twitterSearchService_;
  }));

  it('should do something', function () {
    expect(!!twitterSearchService).toBe(true);
  });

});
