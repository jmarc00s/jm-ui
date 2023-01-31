import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { AvatarGroup } from './AvatarGroup';

const props = {
  avatars: [
    {
      imgSrc: 'https://randomuser.me/api/portraits/women/78.jpg',
      title: 'Samanthe lee',
    },
  ],
};

describe('<AvatarGroup />', () => {
  it('should render AvatarGroup component', () => {
    render(<AvatarGroup {...props} />);
    expect(screen.getAllByRole('img')).toHaveLength(props.avatars.length);
  });

  it('should render counterAvatar component when counter is passed', () => {
    render(<AvatarGroup {...props} counter={10} />);
    expect(screen.getByTestId('counter-avatar')).toBeVisible();
  });

  it('should not render counterAvatar component when counter isnt passed', () => {
    render(<AvatarGroup {...props} />);
    expect(screen.queryByTestId('counter-avatar')).not.toBeInTheDocument();
  });
});
