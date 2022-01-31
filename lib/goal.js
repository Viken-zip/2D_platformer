export const goals = [];

export function clearGoals(){
    goals.splice(0, goals.length)
}

export function newGoal(x, y, w, h){
    const newGoal = {x, y, w, h, type: 'goal'}
    goals.push(newGoal);
}

export function drawGoals(context, camera){
    for(let i = 0; i < goals.length; i++){
        context.fillStyle = 'lime';
        context.fillRect(goals[i].x - camera.x, goals[i].y, goals[i].w, goals[i].h)
    }
}