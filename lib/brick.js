let brickImage = new Image();
brickImage.src = 'img/Brick.png';

export const bricks = [];

export function clearBricks(){
    bricks.splice(0, bricks.length);
}

export function newBrick(x, y, w, h){
    const newBrick = {x, y, w, h, type: "Brick"}
    bricks.push(newBrick);
}

export function drawBricks(context, camera){
    for(let i = 0; i < bricks.length; i++){
        context.drawImage(brickImage, bricks[i].x - camera.x, bricks[i].y, bricks[i].w, bricks[i].h);
    }
}