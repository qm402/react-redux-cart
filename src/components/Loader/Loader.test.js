import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

describe('<Container />', () => {
  it('checks if loader renders with text', () => {
    const { getByText } = render(<Loader />);
    const loadingText = getByText('Loading...');
    expect(loadingText).toBeTruthy();
  });
});
