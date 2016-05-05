describe('test calendar components', function(){

    var scope, controller;

    beforeEach(module('calendarDemoApp'));

    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        controller = $controller('home', {
            $scope: scope});
    }));

    it('$scope.submit() should submit January and 2016 to the getDateRange() method and get number of days returned as 49', function(){
        scope.month = 7; //array index rather than actual month number
        scope.year = 2016;
        scope.submit();
        expect(scope.range.days.length).toBe(35);
    });

    it('on app initiation, should set the $scope.currentMonth to current month in written form', function(){
        expect(scope.currentMonth).toBe('May');
    });

    it('on app initiation, should set the $scope.currentYear to current year in numeric form', function(){
        expect(scope.currentYear).toBe(2016);
    });

    it('factory method on app initiation, should create a $scope.yearArray beginning in 1996 and ending in 2036', function(){
        expect(scope.yearArray[0]).toBe(1996);
        expect(scope.yearArray[scope.yearArray.length-1]).toBe(2036);
    })


});

describe('test custom directive', function(){
    var scope,
        element,
        compiled,
        html;

    beforeEach(module('calendarDemoApp'));

    beforeEach(module('template.html'));

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        html = "<calendar-day></calendar-day>";
        compiled = $compile(html);
        element = compiled(scope);
        scope.range = {};
        scope.range.days = [{day:1, month:3},{day:2, month:3},{day:3, month:3}];
        scope.$digest();
    }));

    it('custom directive should create 3 divs, with innerHTML or 1, 2, 3', function(){
        console.log(element);
        expect(element.text()).toContain('1');
        expect(element.text()).toContain('3');
        expect(element.find('div').length).toBe(3);
    });

});