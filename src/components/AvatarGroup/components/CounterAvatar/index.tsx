import { VariantProps } from 'class-variance-authority';
import React, { ReactElement } from 'react';
import { avatarStyles } from 'src/components/Avatar/Avatar';

type CounterAvatarProps = VariantProps<typeof avatarStyles> & {
  counter: number;
};

export const CounterAvatar = ({
  counter,
  size,
}: CounterAvatarProps): ReactElement => {
  return (
    <div data-testid="counter-avatar" className="avatar placeholder">
      <div
        className={`bg-neutral-focus text-neutral-content ${avatarStyles({
          size,
        })}`}
      >
        <span>+{counter}</span>
      </div>
    </div>
  );
};
