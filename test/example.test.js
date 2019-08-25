import {
  fireEvent,
  getByTestId, prettyDOM
} from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../testing';

import { component } from '../src/example_module/example_component';
import { container } from '../src/example_module/example_container';

describe('app', function () {
  it('calls click handler', () => {
    expect.assertions(1);
    const handleClick = jest.fn();
    const { element } = component(handleClick);
    const node_container = render(element);
    fireEvent.click(getByTestId(node_container, 'button'));

    expect(handleClick).toHaveBeenCalled();
  });

  it('shows text after clicking button', () => {
    expect.assertions(1);
    const { element } = container();
    const node_container = render(element);
    fireEvent.click(getByTestId(node_container, 'button'));

    expect(getByTestId(node_container, 'list')).toHaveTextContent('Hey There! You Clicked on a button!');
  });
});