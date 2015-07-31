displayApp.config(['$routeProvider',function($routeProvider){
    
    // $routeProvider.when(
    //     '/dashboard',{
    //         templateUrl: 'views/pages/dashboard.html',
    //         controller: 'dashboardCtrl'
    //     }
    // );

    $routeProvider.otherwise({
        templateUrl: 'main.html',
        controller: 'mainCtrl'
    });
    /*
    $routeProvider.otherwise({
        templateUrl: 'views/pages/dashboard.html',
        controller: 'dashboardCtrl'
    });
    */
}]);