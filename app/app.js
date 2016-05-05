var app = angular.module('calendarDemoApp', []);

app.controller('home', function($scope){

    $scope.monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    $scope.yearArray = [];

    //get current date
    var date = new Date();
    //clean up the date format using supplied prepareDate() method
    var preparedDateObject = CalendarRange.prepareDate(date);
    console.log(preparedDateObject);

    //set the current month into $scope variables that can be used to default the dropdown list.
    $scope.currentMonth = $scope.monthArray[preparedDateObject.month];
    //set the current year into $scope variables that can be used to default the dropdown list.
    $scope.currentYear = preparedDateObject.year;

    //populate yearArray with previous 20, and future 20 years for creating options for dropdown list
    for (var i=preparedDateObject.year-20; i<=preparedDateObject.year+20; i++){
        $scope.yearArray.push(i);
    }

    //test date creation
    console.log(new Date(2016, 0));
    $scope.range = CalendarRange.getMonthlyRange(new Date(2016,0));
    console.log($scope.range);


    //create an array to hold the number of day boxes for each month and populate
    $scope.dateArray = [];
    for(var i=1; i<=$scope.range.days.length; i++){
        $scope.dateArray.push(i);
    }

    //grabs the values from the drop-down list once the second drop down list has been selected and stores in variables
    $scope.submit = function(){
        console.log('month and year submitted');
        var selectedMonth = $scope.month;
        var selectedYear = $scope.year;
        console.log('Selected month: ', selectedMonth);
        console.log('Selected year: ', selectedYear);

        $scope.debug1 = 'Selected month: ' + selectedMonth + ' Selected Year: ' + selectedYear;
    };

});

app.directive('calendarDay', function(){
    return{
        restrict: 'E',
        transclude: false,
        templateUrl: 'template.html',
        scope: true,
        link: function(scope, element, attrs){

        }
    }
});

