import { bricks } from "./brick.js";
import { collisionY, collisionX } from "./physics.js";
import { getKey, keyCodes } from "./inputs.js";
import { Lavas } from "./lava.js"
import { nextLevel } from "./levels.js";
import { goals } from "./goal.js";

let tile = innerHeight / 16;
const objects = [bricks, Lavas, goals]

let start = {
    x: 0,
    y: 0
}

export const player = {
    x: tile * 1,
    y: tile * 1,
    w: tile,
    h: tile
}

let playerImg;

const playerUpp = new Image(); playerUpp.src = "./img/Upp.png"
const playerUppRight = new Image(); playerUppRight.src = "./img/UppRight.png"
const playerRight = new Image(); playerRight.src = "./img/Right.png"
const playerDownRight = new Image(); playerDownRight.src = "./img/DownRight.png"
const playerDown = new Image(); playerDown.src = "./img/Down.png"
const playerDownLeft = new Image(); playerDownLeft.src = "./img/DownLeft.png"
const playerLeft = new Image(); playerLeft.src = "./img/Left.png"
const playerUppLeft = new Image(); playerUppLeft.src = "./img/UppLeft.png"
const playerIdle = new Image(); playerIdle.src = "./img/idle.jpg"

//const gravity = 300;
//const speed = 840 * 4.5;

const speed = tile * 15;

let vy = 1;
let grounded = false;

export function playerUpdate(deltaTime){

    playerImg = playerIdle;

    //vy += gravity * deltaTime;
    vy += tile / 40;

    if( grounded && getKey(keyCodes.w) ){ 
        //console.log('jump');
        grounded = false;
        vy -= tile / 2;
    }

    let vx = 0;
    vx += getKey(keyCodes.d) ? speed * deltaTime : 0;
    vx += getKey(keyCodes.a) ? -speed * deltaTime : 0;

    collisionX(vx, player, objects, onCollideX);
    collisionY(vy, player, objects, onCollideY);

    if(vy < 0){playerImg = playerUpp}
    if(vy > 0){playerImg = playerDown}

    if(getKey(keyCodes.a)){playerImg = playerLeft}
    if(getKey(keyCodes.d)){playerImg = playerRight}

    if( vy < 0 && getKey(keyCodes.a) ){playerImg = playerUppLeft}
    if( vy < 0 && getKey(keyCodes.d) ){playerImg = playerUppRight}
    if( vy > 0 && getKey(keyCodes.a) ){playerImg = playerDownLeft}
    if( vy > 0 && getKey(keyCodes.d) ){playerImg = playerDownRight}

}

export function newStart(x, y){
    player.x = x;
    player.y = y;
    start.x = x;
    start.y = y;

    console.log('player started at: x:' + x + ', y:' + y)
}

export function drawPlayer(context, camera){
    context.drawImage(playerImg, player.x - camera.x, player.y, player.w, player.h)
    //context.fillStyle = 'red';
    //context.fillRect(player.x, player.y, player.w, player.h);
}

function onCollideX(pawn, collisionObject) {

    if(collisionObject.type == 'goal'){
        nextLevel();
    }

    if(collisionObject.type == 'Lava'){
        //console.log('ded')
        player.x = 75;
        player.y = 500;
        return false
    }

    return true
}

function onCollideY(pawn, collisionObject) {
    console.log('yeee')
    grounded = true;
    vy = 0;

    if(collisionObject.type == 'goal'){
        nextLevel();
    }

    if(collisionObject.type == 'Lava'){
        //console.log('ded')
        player.x = start.x;
        player.y = start.y;
        return false
    }

    return true
}