const keys = [];

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

function onKeyDown(event) {
  keys[event.keyCode] = true;
}

function onKeyUp(event) {
  keys[event.keyCode] = false;
}

export function getKey(keyCode) {
  return keys[keyCode];
}

export const keyCodes = {
  a: 65,
  w: 87,
  d: 68,
  s: 83
};