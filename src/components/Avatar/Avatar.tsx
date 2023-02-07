import { cva, VariantProps } from 'class-variance-authority';
import React, { ReactElement } from 'react';

export const avatarStyles = cva([], {
  variants: {
    size: {
      xs: ['w-8'],
      sm: ['w-16'],
      md: ['w-24'],
      lg: ['w-32'],
    },
  },
});

export type AvatarProps = VariantProps<typeof avatarStyles> & {
  title: string;
  imgSrc: string;
  rounded?: boolean;
};

export const Avatar = ({
  imgSrc,
  size,
  title,
  rounded = true,
}: AvatarProps): ReactElement => (
  <div className="avatar">
    <div
      data-testid="image-container"
      className={`${avatarStyles({ size })} ${rounded ? 'rounded-full' : ''}`}
    >
      <img alt={title} src={imgSrc} title={title} />
    </div>
  </div>
);
