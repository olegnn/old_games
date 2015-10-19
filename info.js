// Generated by LiveScript 1.3.1
(function(){
  var this$ = this;
  document.addEventListener('DOMContentLoaded', function(){
    var Info;
    Info = (function(){
      Info.displayName = 'Info';
      var prototype = Info.prototype, constructor = Info;
      Info.stateElement = document.getElementById('state');
      Info.playerElement = document.getElementById('player');
      Info.postStateMessage = function(text){
        return this.stateElement.innerText = text;
      };
      Info.postErrorMessage = function(text){
        return alert(text);
      };
      Info.postAlertMessage = function(text){
        return alert(text);
      };
      Info.postPlayerInfoMessage = function(text){
        return this.playerElement.innerText = text;
      };
      function Info(){}
      return Info;
    }());
    return this$.Info = Info;
  });
}).call(this);