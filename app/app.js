var app = angular.module('calendarDemoApp', []);

app.controller('home', function($scope){


    //grabs the values from the drop-down list once the second drop down list has been selected and stores in variables
    $scope.submit = function(){
        console.log('month and year submitted');
        var selectedMonth = $scope.month;
        var selectedYear = $scope.year;
        console.log('Selected month: ', selectedMonth);
        console.log('Selected year: ', selectedYear);

        $scope.debug1 = 'Selected month: ' + selectedMonth + ' Selected Year: ' + selectedYear;
    };

    //get current date, prepare and return monthly range
    var date = new Date();

    var preparedDateObject = CalendarRange.prepareDate(date);
    console.log(preparedDateObject);

    var rangeDateObject = CalendarRange.getMonthlyRange(date);
    console.log(rangeDateObject);



});

