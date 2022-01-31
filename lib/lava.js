let LavaImg = new Image();
LavaImg.src = "img/Lava.png";

export const Lavas = [];

export function clearLavas(){
    Lavas.splice(0, Lavas.length);
}

export function newLava(x, y, w, h){
    const newLava = {x, y, w, h, type: "Lava"}
    Lavas.push(newLava);
}

export function drawLava(context, camera){
    for(let i = 0; i < Lavas.length; i++){
        context.drawImage(LavaImg, Lavas[i].x - camera.x, Lavas[i].y, Lavas[i].w, Lavas[i].h)
        /*
        context.fillStyle = 'red';
        context.fillRect(
            Lavas[i].x, 
            Lavas[i].y, 
            Lavas[i].w, 
            Lavas[i].h
        );*/
    }
}