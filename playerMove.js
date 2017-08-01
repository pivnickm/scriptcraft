'use strict';
/*global events, echo, isOp, __plugin*/

events.blockBreak( function( event ) {
  echo( event.player, event.player.name + ', you broke a block!');
  var locX = event.block.location;
  var locY = event.block.location.y;
  console.log(locX);
});