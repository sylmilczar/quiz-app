import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '@/components/Button';

describe('Button', () => {
  it('powinien renderować button z tekstem', () => {
    render(<Button>Kliknij mnie</Button>);
    expect(screen.getByText('Kliknij mnie')).toBeInTheDocument();
  });

  it('powinien wywołać onClick po kliknięciu', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Kliknij</Button>);

    fireEvent.click(screen.getByText('Kliknij'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('powinien mieć domyślny wariant primary', () => {
    render(<Button>Primary</Button>);
    const button = screen.getByText('Primary');
    expect(button).toHaveClass('bg-primary-600');
  });

  it('powinien stosować wariant secondary', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByText('Secondary');
    expect(button).toHaveClass('bg-yellow-500');
  });

  it('powinien stosować wariant tertiary', () => {
    render(<Button variant="tertiary">Tertiary</Button>);
    const button = screen.getByText('Tertiary');
    expect(button).toHaveClass('bg-tertiary-600');
  });

  it('powinien łączyć custom className z domyślnymi', () => {
    render(<Button className="custom-class">Test</Button>);
    const button = screen.getByText('Test');
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('rounded-sm');
  });

  it('powinien być disabled gdy disabled=true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });

  it('nie powinien wywołać onClick gdy disabled', () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );

    fireEvent.click(screen.getByText('Disabled'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('powinien przekazywać wszystkie HTML button attributes', () => {
    render(
      <Button data-testid="test-button" name="submit-btn" type="submit">
        Submit
      </Button>
    );

    const button = screen.getByTestId('test-button');
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('name', 'submit-btn');
  });

  it('powinien mieć odpowiednie klasy transition i hover', () => {
    render(<Button>Hover me</Button>);
    const button = screen.getByText('Hover me');
    expect(button).toHaveClass('transition');
    expect(button).toHaveClass('active:scale-95');
  });
});
