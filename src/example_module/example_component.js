import css from './example.css'

export function component (handleClick) {

  const element = document.createElement('div');
  element.setAttribute('data-testid', 'list');

  const button = document.createElement('button');

  button.textContent = 'button';

  button.classList.add('addButton');

  button.addEventListener('click', handleClick);

  element.appendChild(button);

  button.setAttribute('data-testid', 'button');

  const setState = (data) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = data.text;
    element.appendChild(li);
  };

  return { element, setState };

}
