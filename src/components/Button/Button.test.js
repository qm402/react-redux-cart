import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button';

describe('<Container />', () => {
  it('checks if button is rendered and can be clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
