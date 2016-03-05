angular.module('Bleeveapp').controller('homeController', homeController);

homeController.$inject = ['$scope', 'GAuth', 'GApi', '$location', '$rootScope', 'GData'];

function homeController($scope, GAuth, GApi, $location, $rootScope, GData){


    console.log($rootScope);
    var ifLogin = function() {
        $rootScope.currentUser = GData.getUserId();
        $rootScope.company = $scope.company;
        $location.path("/meetingRoom");
    };

    $scope.doLogin = function(){
        GAuth.checkAuth().then(
            function(){
                ifLogin();
            },
            function(){
                GAuth.login().then(function(){
                    ifLogin();
                });
            }
        );
    }
}
