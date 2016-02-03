app.directive("cures", function($rootScope) {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/cures/ob.cures.html',
    scope: {},
    link: function(scope, element) {
      scope.diseases = {
        red: {
          cured: false,
          eradicated: false,
          curedIcon: 'https://i.imgur.com/vq81JJ0.png',
          eradicatedIcon: 'https://i.imgur.com/BoK9iaO.png'
        },
        yellow: {
          cured: false,
          eradicated: false,
          curedIcon: 'https://i.imgur.com/rkz0Y6X.png',
          eradicatedIcon: 'https://i.imgur.com/KlgntTZ.png'
        },
        blue: {
          cured: false,
          eradicated: false,
          curedIcon: 'https://i.imgur.com/uaacKCG.png',
          eradicatedIcon: 'http://i.imgur.com/xfnB2Bt.png'
        },
        black: {
          cured: false,
          eradicated: false,
          curedIcon: 'https://i.imgur.com/4tGcZvP.png',
          eradicatedIcon: 'https://i.imgur.com/PNkokQN.png'
        }
      };


      let notCured = 'https://i.imgur.com/RobelMv.png';
      // test data
      // let payload = {
      //   isCured: {
      //     blue: true
      //   },
      //   isEradicated:{
      //     red: true
      //   }

      // }
      scope.cureTheDisease = function(gameState) {
        for (let key in gameState.isCured) {
          if (gameState.isCured[key] !== scope.diseases[key].cured) {
            scope.diseases[key].cured = gameState.isCured[key];
            var elem = $(element).find("#" + key)
            elem.attr("src", scope.diseases[key].curedIcon)
          }
        }
      }

      // scope.cureTheDisease(gameState);

      scope.eradicateTheDisease = function(gameState) {
        for (let key in gameState.isEradicated) {
          if (gameState.isEradicated[key] !== scope.diseases[key].eradicated) {
            if (gameState.isEradicated[key]) {
              scope.diseases[key].isCured = false;
            }
            scope.diseases[key].eradicated = gameState.isEradicated[key];
            var elem = $(element).find("#" + key)
            elem.attr("src", scope.diseases[key].eradicatedIcon)
          }
        }
      }
      // scope.eradicateTheDisease(gameState);


      $rootScope.$on('stateChange', function(event, payload) {
        let gameState = payload.gameState;
        for (let key in gameState.isCured) {
          if (gameState.isCured[key] !== scope.diseases[key].cured) {
            cureTheDisease(gameState)
          }
        }
        for (let key in gameState.isEradicated) {
          if (gameState.isEradicated[key] !== scope.diseases[key].eradicated) {
            eradicateTheDisease(gameState)
          }
        }
      })

    }
  };
});
