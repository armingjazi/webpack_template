export function component (handleClick) {

  const element = document.createElement('div');

  const button = document.createElement('button');

  button.textContent = 'button';

  button.addEventListener('click', handleClick);

  element.appendChild(button);

  button.setAttribute('data-testid', 'button');

  return { element };

}
