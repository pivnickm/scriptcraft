'use strict';
/*global events, echo, isOp, __plugin*/

events.blockBreak( function( event ) {
  echo( event.player, event.player.name + ', you broke a block!');
  var locX = event.block.location.x;
  var locY = event.block.location.y;
  console.log('x: ', locX, 'y: ', locY);
});