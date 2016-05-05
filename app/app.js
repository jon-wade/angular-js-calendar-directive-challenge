var app = angular.module('calendarDemoApp', []);

app.factory('dropdown', function(){
    return {
        'populate': function(){
            var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var yearArray = [];

            //get current date
            var date = new Date();
            //clean up the date format using supplied prepareDate() method
            var preparedDateObject = CalendarRange.prepareDate(date);

            //set the current month into $scope variables that can be used to default the dropdown list.
            var currentMonth = monthArray[preparedDateObject.month];
            //set the current year into $scope variables that can be used to default the dropdown list.
            var currentYear = preparedDateObject.year;

            //populate yearArray with previous 20, and future 20 years for creating options for dropdown list
            for (var i=preparedDateObject.year-20; i<=preparedDateObject.year+20; i++){
                yearArray.push(i);
            }

            return {
                date: date,
                monthArray: monthArray,
                yearArray: yearArray,
                currentMonth: currentMonth,
                currentYear: currentYear
            };
        }
    }
});

app.controller('home', ['$scope', 'dropdown', function($scope, dropdown){

    //populate the dropdown lists with the month and year data, and set to current month and year
    $scope.monthArray = dropdown.populate().monthArray;
    $scope.yearArray = dropdown.populate().yearArray;
    $scope.currentMonth = dropdown.populate().currentMonth;
    $scope.currentYear = dropdown.populate().currentYear;

    //grab the current date
    var date = dropdown.populate().date;

    //get the range object based on the current date
    $scope.range = CalendarRange.getMonthlyRange(new Date(date));

    console.log($scope.range);

    //$scope.dateArray = [];
    //for(var i=1; i<=$scope.range.days.length; i++){
    //    $scope.dateArray.push(i);
    //}

    //grabs the values from the drop-down list once the second drop down list has been selected and stores in variables
    $scope.submit = function(){
        console.log('month and year submitted');
        var selectedMonth = $scope.month;
        var selectedYear = $scope.year;
        console.log('Selected month: ', selectedMonth);
        console.log('Selected year: ', selectedYear);

        $scope.debug1 = 'Selected month: ' + selectedMonth + ' Selected Year: ' + selectedYear;
    };

}]);

app.directive('calendarDay', ['dropdown', function(dropdown){
    return{
        restrict: 'E',
        replace: true,
        templateUrl: 'template.html',
        scope: true,
        link: function(scope, element, attrs){

        }
    }
}]);



