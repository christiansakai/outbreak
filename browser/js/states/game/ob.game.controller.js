app.controller("GameCtrl", function($scope, $rootScope, ngToast, GameFactory, lobby) {
  console.log('in the GameCtrl', lobby)

  //pass the resolved lobby to GameFactory to kick things off
  GameFactory.startTheGame(lobby);

  $rootScope.$on('stateChange', function(event, payload) {
    createStateChangeToast(payload.gameState.message, "unimportant");
  });

  $rootScope.$on('badClick', function(event, payload) {
    ngToast.create({
      className: 'danger',
      content: payload.error,
      dismissOnTimeout: true,
      timeout: 4000,
      dismissButton: true,
      animation: 'fade',
      horizontalPostion: 'right',
      verticalPosition: 'top'
    });
  });

  $rootScope.$on('renderDrawEvent', function(event, payload) {
    if (payload.message) {
      createPhaseChangeToast(payload.message, 6000, "unimportant");
    }

  });

  $rootScope.$on('renderDiscardEvent', function(event, payload) {
    if (payload.message) {
      createPhaseChangeToast(payload.message, 5000, "unimportant");
    }
  });

  $rootScope.$on('renderInfectionEvent', function(event, payload) {
    if (payload.message) {
      createPhaseChangeToast(payload.message, 6000, "infection");
    }
  });

  $rootScope.$on('renderEpidemicEvent', function(event, payload) {
    var duration = payload.duration || 5000;
    if (payload.message) {
      createPhaseChangeToast(payload.message, duration, "alert");
    }
  });

  $rootScope.$on('outbreak', function(event, payload) {
    if (payload.message) {
      createPhaseChangeToast(payload.message, 5000, "alert");
    }
  });

  let previousStateMessage = null;

  function createStateChangeToast(message, htmlClass) {
    if (message === previousStateMessage) {
      return;
    }

    previousStateMessage = message;

    ngToast.create({
      className: htmlClass,
      content: message,
      dismissOnTimeout: true,
      timeout: 4000,
      dismissButton: true,
      animation: 'fade',
      horizontalPostion: 'right',
      verticalPosition: 'top'
    });
  };

  let previousPhaseMessage = null;

  function createPhaseChangeToast(message, timeout, htmlClass) {
    if (!htmlClass) {
      htmlClass = "unimportant";
    }
    if (message === previousPhaseMessage) {
      return;
    }

    previousPhaseMessage = message;

    ngToast.create({
      className: htmlClass,
      content: message,
      dismissOnTimeout: true,
      timeout: timeout,
      dismissButton: true,
      animation: 'fade',
      horizontalPostion: 'right',
      verticalPosition: 'top'
    });
  }
})
