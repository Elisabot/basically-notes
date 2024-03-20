// on the Window and Worker
const showAlert = () => {
  setInterval(() => {
    alert('We are intervals. This happens every three seconds')
  }, 3000);
}

showAlert();

const showTimeout = () => {
  setTimeout(() => {
  alert("I am a timeout. You'll only see me once after three seconds");
}, 3000);
}

showTimeout();

// this code is not functional in a node environment because neither Window or Worker instances are available