import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { Breadcrumbs } from './Breadcrumbs';

describe('<Breadcrumbs />', () => {
  it('should render Breadcrumbs component', () => {
    render(
      <Breadcrumbs>
        <Breadcrumbs.Item>Item 1</Breadcrumbs.Item>
      </Breadcrumbs>,
    );

    expect(screen.getByText('Item 1')).toBeVisible();
  });
});
