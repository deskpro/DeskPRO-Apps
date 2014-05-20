define(function() {
    return function($scope, $ticket, $person, $http, $el, $app) {
        $scope.user_email = $person.primary_email.email;
    };
});