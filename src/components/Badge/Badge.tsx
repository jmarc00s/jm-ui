import { cva, VariantProps } from 'class-variance-authority';
import React, { HTMLAttributes, ReactNode } from 'react';
import { returnColorClasses, returnSizeClasses } from 'src/utils';

const BADGE_PREFIX = 'badge';

const badgeStyles = cva([BADGE_PREFIX], {
  variants: {
    color: returnColorClasses(BADGE_PREFIX),
    size: returnSizeClasses(BADGE_PREFIX),
    variant: {
      outline: ['badge-outline'],
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

export type BadgeProps = Omit<
  HTMLAttributes<HTMLSpanElement>,
  'size' | 'color'
> &
  VariantProps<typeof badgeStyles> & {
    children: ReactNode;
    title?: string;
  };

export const Badge = ({
  children,
  color,
  size,
  variant,
  className,
  ...rest
}: BadgeProps) => (
  <span
    data-testid="badge"
    className={badgeStyles({ color, size, variant })}
    {...rest}
  >
    {children}
  </span>
);
