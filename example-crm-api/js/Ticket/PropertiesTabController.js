define(function() {
    return function($scope, $ticket, $person, $http, $el, $app) {

        // Setting a loading indicator like this means we
        // can show a loading message in our HTML template
        $scope.is_loading = true;

        var params = {
            url: "http://api.example.com/lookup-orders",

            // Any other parameters will be sent as-is
            // to your remote web service.
            // For example, here we are sending an 'email' parameter:
            email: $person.primary_email.email
        };

        $http.get('DP_URL/agent/misc/proxy', {params: params}).success(function(data) {
            $scope.is_loading = false;
            $scope.orders = data.orders;
        });
    };
});