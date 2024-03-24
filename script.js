function setLocalUserName(key, value) {
  localStorage.setItem(key, value);
}
function getLocalUserName(key) {
  alert(localStorage.getItem(key));
}
function removeLocalUserName(key, value) {
  localStorage.removeItem(key, value);
}
function clearLocalUserName() {
  localStorage.clear();
}
