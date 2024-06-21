ComprasApp.controller('comprasController', function($scope) {
    $scope.vacinas = [];
    $scope.novaVacina = {};

    $scope.adicionaVacina = function() {
        if ($scope.novaVacina !== '') {
            $scope.vacinas.push($scope.novaVacina);
            $scope.novaVacina = {};
        }
    };

    $scope.removeVacina = function(index) {
        $scope.vacinas.splice(index, 1);
    };
});