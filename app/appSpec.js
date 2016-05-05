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

    it('should set the $scope.currentMonth to current month in written form', function(){
        expect(scope.currentMonth).toBe('May');
    });

    it('should set the $scope.currentYear to current year in numeric form', function(){
        expect(scope.currentYear).toBe(2016);
    });

    it('should create a $scope.yearArray beginning in 1996 and ending in 2036', function(){
        expect(scope.yearArray[0]).toBe(1996);
        expect(scope.yearArray[scope.yearArray.length-1]).toBe(2036);
    })


});