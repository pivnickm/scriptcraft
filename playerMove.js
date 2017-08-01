'use strict';
/*global events, echo, isOp, __plugin*/

events.blockBreak( function( event ) {
  echo( event.player, event.player.name + ', you broke a block!');
  var playername = event.player;
  console.log(playername);
});