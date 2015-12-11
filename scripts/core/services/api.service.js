(function () {
    'use strict';

    angular.module('app')
        .service('ApiService', ['$http', '$q', '$rootScope', ApiService]);

    function ApiService($http, $q, $rootScope) {

        var self = this,
            rs = $rootScope;

        this.get = function (table, data) {
            var deffered = $q.defer();
            var qString = '?table='+ table +'&';
            angular.forEach(data, function(value, key){
                qString += key + '=' + value +'&';
            });
            qString = qString.substring(0, qString.length - 1);
            $http({
                method: 'GET',
                url: 'api/get' + qString
            }).then(function (res) {
                if (res.status == 200) {
                    deffered.resolve(res.data);
                }
            }, function (err_res) {
                console.error(err_res);
            });
            return deffered.promise;
        };

    }

})();
