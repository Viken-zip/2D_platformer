const levels = [];
let levelIndex = 0;

export function createLevel(createCallback) {
    levels.push(createCallback);
}

export function startLevel(index) {
    levelIndex = index;
    levels[levelIndex]();
}

export function nextLevel() {
    levelIndex++;
    levels[levelIndex]();
}

export function maxCameraDistance(){
    for(let i = 1000; i > 0; i--){
        if( levels[levelIndex].toString().includes('tile * ' + i) ){
            return i;
        }
    }
}