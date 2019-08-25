import { component } from './example_component';

const example_container = function () {
  const data = [];
  const handleClick = () => {
    data.push({ text: 'Hey There! You Clicked on a button' });
    setState(data)
  };
  const { element, setState } = component(handleClick);

  return element;
};