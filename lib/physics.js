export function collisionX(xDistance, pawn, collisionObjects, collisionCallback) {
    pawn.x += xDistance;
    for(let k = 0; k < collisionObjects.length; k++) {
      for(let i = 0; i < collisionObjects[k].length; i++) {
        const other = collisionObjects[k][i];
  
        if(rectOverlaps(pawn, other)) {
          
          if(collisionCallback) {
            if(collisionCallback(pawn, other) === false) {
              continue;
            }
          }
  
          const collisionOffset = pawn.x + pawn.w / 2 < other.x + other.w / 2
            ? pawn.x + pawn.w - other.x
            : pawn.x - (other.x + other.w)
          pawn.x -= collisionOffset;
        }
      }
    }
  }
  
  export function collisionY(yDistance, pawn, collisionObjects, collisionCallback) {
    pawn.y += yDistance;
    for(let k = 0; k < collisionObjects.length; k++) {
      for(let i = 0; i < collisionObjects[k].length; i++) {
        const other = collisionObjects[k][i];
        
        if(rectOverlaps(pawn, other)) {
            
          if(collisionCallback) {
            if(collisionCallback(pawn, other) === false) {
              continue;
            }
          }
  
          const collisionOffset = pawn.y + pawn.h / 2 < other.y + other.h / 2
            ? pawn.y + pawn.h - other.y
            : pawn.y - (other.y + other.h)
          pawn.y -= collisionOffset;
        }
      }
    }
  }
  
  function rectOverlaps(rect1, rect2) {
    return (
      rect1.x < rect2.x + rect2.w &&
      rect1.x + rect1.w > rect2.x &&
      rect1.y < rect2.y + rect2.h &&
      rect1.y + rect1.h > rect2.y
    );
  }