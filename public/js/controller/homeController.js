angular.module('Bleeveapp').controller('homeController', homeController);

homeController.$inject = ['$scope', 'GAuth', 'GApi', '$location', '$rootScope', 'GData'];

function homeController($scope, GAuth, GApi, $location, $rootScope, GData){

    var ifLogin = function() {
        $rootScope.currentUser = GData.getUserId();
        console.log($rootScope);
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
