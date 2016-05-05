var app = angular.module('calendarDemoApp', []);

app.factory('dropdown', function(){
    return {

        'populate': function(){

            monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            yearArray = [];

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

    //$scope.currentMonth is the variable used to default the dropdown to the current month
    $scope.currentMonth = dropdown.populate().currentMonth;
    //$scope.currentYear is the variable used to default the dropdown to the current year
    $scope.currentYear = dropdown.populate().currentYear;
    //$scope.month is the model data that takes the value from dropdown list and submits it to the getMonthlyRange method - set to current month on initialisation
    $scope.month = $scope.currentMonth;
    //$scope.year is the model data that takes the value from the dropdown list and submits it to the getMonthlyRange method - set to current year on initialisation
    $scope.year = $scope.currentYear;

    //grab the current date from the factory method
    var date = dropdown.populate().date;

    //get the getMonthlyRange object based on the current date to initially populate the calendar and set the $scope.range variable to its value
    $scope.range = CalendarRange.getMonthlyRange(new Date(date));

    //get the index of the current month from the monthArray in the factory method and set $scope.month index to its value
    $scope.monthIndex = dropdown.populate().monthArray.indexOf($scope.currentMonth);

    //grabs the values from the drop-down once the submit button is pressed and refreshes the getMonthlyRange object
    $scope.submit = function(){
        //set selected month and year variables based on the model data bindings to $scope.month and $scope.year
        var selectedMonth = $scope.month;
        var selectedYear = $scope.year;

        //get the index of the selected month
        $scope.monthIndex = dropdown.populate().monthArray.indexOf(selectedMonth);

        //console.log('$scope.monthIndex: ', $scope.monthIndex);

        //create a new Date object based on the selection, for submission to the getMonthlyRange() method
        var newDate = new Date(selectedYear, $scope.monthIndex);
        //refresh $scope.range object
        $scope.range = CalendarRange.getMonthlyRange(new Date(newDate));

        //console.log('$scope.range ', $scope.range);

        //$scope.debug1 = 'Selected month: ' + selectedMonth + ' Selected Year: ' + selectedYear;
    };

}]);

app.directive('calendarDay', ['dropdown', function(){
    return{
        restrict: 'E',
        replace: false,
        templateUrl: 'template.html',
        scope: true
    }
}]);



