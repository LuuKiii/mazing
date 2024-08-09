import './styles/main.scss'

document.querySelector<HTMLButtonElement>('#resBtn')?.addEventListener('click', () => {
  console.log('resBtn clicked')
  fetch('./src/main.html')
    .then(response => response.text())
    .then(data => {
      const app = document.getElementById('app');
      if (app) {
        app.innerHTML = data;
      }
    });
})
