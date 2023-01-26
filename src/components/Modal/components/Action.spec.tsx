import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Action } from './Action';

describe('<Action />', () => {
  it('should render modal action component', () => {
    render(<Action>Teste</Action>);

    expect(screen.getByTestId('modal-action')).toBeVisible();
  });
});
