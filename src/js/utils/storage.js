

function set(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function get(key) {
  return JSON.parse(localStorage.getItem(key)) || {};
}

function reset(key) {
  localStorage.removeItem(key);
}

export const storage = {
  set,
  get,
  reset,
}