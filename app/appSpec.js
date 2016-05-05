describe('test calendar components', function(){

    var scope, controller;

    beforeEach(module('calendarDemoApp'));

    //beforeEach(module('template.html'));

    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        controller = $controller('home', {
            $scope: scope});

    }));

    it('should submit the month and year when the second drop down is selected', function(){
        scope.month = 1;
        scope.year = 2016;

        scope.submit();

        expect(scope.debug1).toBe('Selected month: ' + scope.month + ' Selected Year: ' + scope.year);

    });


});