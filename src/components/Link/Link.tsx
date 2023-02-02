import { cva, VariantProps } from 'class-variance-authority';
import React, { AnchorHTMLAttributes, ReactElement } from 'react';
import { returnColorClasses } from 'src/utils';

const linkStyles = cva(['link'], {
  variants: {
    color: returnColorClasses('link'),
  },
});

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkStyles> & {
    underlineOnHover?: boolean;
  };

export const Link = ({
  children,
  color,
  underlineOnHover,
  ...rest
}: LinkProps): ReactElement => {
  return (
    <a
      role="link"
      className={`${linkStyles({ color })} ${
        underlineOnHover ? 'link-hover' : ''
      }`}
      {...rest}
    >
      {children}
    </a>
  );
};
