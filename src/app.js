import css from './app.css';
import { container } from './example_module/example_container';

export function app () {
  const element = document.createElement('div');
  element.classList.add('app');

  element.setAttribute('data-testid', 'app');

  const p = document.createElement('p');

  p.textContent = 'Webpack Template';

  element.appendChild(p);

  element.appendChild(container().element);

  return { element };
}
