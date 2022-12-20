const deg = 6;
const hr = document.querySelector('.hour');
const mn = document.querySelector('.minute');
const sc = document.querySelector('.second');

const setClock = () => {
  const day = new Date();
  const hh = day.getHours() * 30;
  const mm = day.getMinutes() * deg;
  const ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
};

setClock();
setInterval(setClock, 1000);

