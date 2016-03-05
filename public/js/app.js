angular.module('Bleeveapp', ['angular-google-gapi', 'ngRoute'])
    .run(googleAuth);
googleAuth.$inject= ['GAuth', 'GApi', 'GData','$rootScope', '$window', '$location'];

function googleAuth(GAuth, GApi, GData, $rootScope, $window, $location) {
    $rootScope.gdata = GData;
    var CLIENT = '446295244320-46f84na6k5ba6lkkaav7mgahq4lfkarl.apps.googleusercontent.com';
    var BASE;
    if($window.location.hostname == 'localhost') {
        BASE = '//localhost:8080/_ah/api';
    } else {
        BASE = 'https://cloud-endpoints-gae.appspot.com/_ah/api';
    }

    BASE = 'https://cloud-endpoints-gae.appspot.com/_ah/api';

    GApi.load('myContactApi', 'v1', BASE);
    GApi.load('calendar', 'v3');
    GAuth.setClient(CLIENT);
    GAuth.setScope('https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar');

}
