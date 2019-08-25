import {
  fireEvent,
  getByTestId
} from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../testing';

import { component } from '../src/example_module/example_component';

describe('app', function () {
  it('calls click handler', () => {
    expect.assertions(1);
    const handleClick = jest.fn();
    const { element } = component(handleClick);
    const container = render(element);
    fireEvent.click(getByTestId(container, 'button'));

    expect(handleClick).toHaveBeenCalled()

  });
});