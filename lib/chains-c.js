export const Chains = [];

export function clearChains(){
    Chains.splice(0, Chains.length);
}

const RoofChainImg = new Image(); RoofChainImg.src = "img/RoofChain.png"
export function newRoofChain(x, y, w, h){
    const newChain = {x, y, w, h, type: "chain", img: RoofChainImg}
    Chains.push(newChain)
}

const FloorChainImg = new Image(); FloorChainImg.src = "img/FloorChain.png";
export function newFloorChain(x, y, w, h){
    const newChain = {x, y, w, h, type: "chain", img: FloorChainImg}
    Chains.push(newChain)
}

const RoofChainFadeImg = new Image(); RoofChainFadeImg.src = "img/RoofChainFade.png";
export function newRoofChainFade(x, y, w, h){
    const newChain = {x, y, w, h, type: "chain", img: RoofChainFadeImg}
    Chains.push(newChain)
}

const FloorChainFadeImg = new Image(); FloorChainFadeImg.src = "img/FloorChainFade.png";
export function newFloorChainFade(x, y, w, h){
    const newChain = {x, y, w, h, type: "chain", img: FloorChainFadeImg}
    Chains.push(newChain)
}

const ChainImg = new Image(); ChainImg.src = "img/Chain.png";
export function newChain(x, y, w, h){
    const newChain = {x, y, w, h, type: "chain", img: ChainImg}
    Chains.push(newChain)
}

const ChainFadeInImg = new Image(); ChainFadeInImg.src = "img/ChainFadein.png";
export function newChainFadeIn(x, y, w, h){
    const newChain = {x, y, w, h, type: "chain", img: ChainFadeInImg}
    Chains.push(newChain)
}

const ChainFadeOutImg = new Image(); ChainFadeOutImg.src = "img/ChainFadeOut.png";
export function newChainFadeOut(x, y, w, h){
    const newChain = {x, y, w, h, type: "chain", img: ChainFadeOutImg}
    Chains.push(newChain)
}

export function drawChains(context, camera){
    for(let i = 0; i < Chains.length; i++){
        /*let ChainImg = new Image();
        ChainImg.src = Chains[i].img;*/
        context.drawImage(Chains[i].img, Chains[i].x - camera.x, Chains[i].y, Chains[i].w, Chains[i].h)
        /*
        context.fillStyle = 'grey';
        context.fillRect(
            Chains[i].x,
            Chains[i].y, 
            Chains[i].w,
            Chains[i].h
        )
        */
    }
}