const container = document.getElementById('container');
const text = document.getElementById('text');

const Seconds = 19000;
const breatheSeconds = (Seconds / 5) + 200;
const holdSeconds = (Seconds / 5) + 4200;

breatheAction();

function breatheAction() {
  text.innerText = 'Breathe in';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Good, now hold it';

    setTimeout(() => {
      text.innerText = 'Slowly breathe out';
      container.className = 'container shrink';
    }, holdSeconds);
  }, breatheSeconds);
}

setInterval(breatheAction, Seconds);