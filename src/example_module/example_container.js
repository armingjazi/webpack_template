import { component } from './example_component';

export function container () {
  const handleClick = () => {
    setState({ text: 'Hey There! You Clicked on a button!' });
  };
  const { element, setState } = component(handleClick);

  return { element };
}