'use strict';

(function() {
  angular
    .module('ci-app')
    .factory('methods', MethodsFactory);

  MethodsFactory.$inject =
    ['$http', 'consts'];

  function MethodsFactory($http, consts) {
    let methods = {};
    const url = `${consts.oapiUrl}/item`;

    methods.get = () => {
      return $http.get(url);
    };
    methods.post = (obj) => {
      return $http.post(url, obj);
    };
    return methods;
  }
})();
