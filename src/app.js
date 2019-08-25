import css from './app.css';

export function app () {
  const element = document.createElement('div');
  element.classList.add('app');

  element.setAttribute('data-testid', 'app');

  const p = document.createElement('p');

  p.textContent = 'Webpack Template';

  element.appendChild(p);

  return { element };
}
