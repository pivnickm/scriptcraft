'use strict';
/*global events, echo, isOp, __plugin*/

events.blockBreak( function( event ) {
  echo( event.player, event.player.name + ', you broke a block!');
  var location = event.block.Location;
  console.log(location);
});