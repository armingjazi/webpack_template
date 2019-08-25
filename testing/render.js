export function render (element) {
  const parent = document.createElement('div');
  parent.appendChild(element);
  return parent;
}