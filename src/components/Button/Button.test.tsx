import { render, screen, fireEvent } from '@testing-library/react';
import Button, { ButtonType, ButtonSize } from './Button';

describe('Button Component', () => {
  test('renders with default props', () => {
    render(<Button label="Click Me" />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn', 'btn-primary', 'btn-medium');
    expect(button).not.toBeDisabled();
  });

  test('renders with custom type and size', () => {
    render(<Button label="Submit" type={ButtonType.Danger} size={ButtonSize.Large} />);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toHaveClass('btn-danger', 'btn-large');
  });

  test('disables the button when disabled prop is true', () => {
    render(<Button label="Disabled" disabled />);
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('btn-disabled');
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click" onClick={handleClick} />);
    const button = screen.getByRole('button', { name: /click/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
