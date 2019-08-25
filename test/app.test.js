import {
  getByTestId
} from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../testing';

import { app } from '../src/app';

describe('app', function () {
  it('renders without crashing', function () {
    const { element } = app();
    const container = render(element);
    expect(getByTestId(container, 'app')).toBeTruthy();
  });
});