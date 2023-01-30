import { cva, VariantProps } from 'class-variance-authority';
import React, { ProgressHTMLAttributes, ReactElement } from 'react';
import { returnColorClasses } from 'src/utils';

const progressStyles = cva(['progress'], {
  variants: {
    color: returnColorClasses('progress'),
  },
});

export type ProgressBarProps = ProgressHTMLAttributes<HTMLProgressElement> &
  VariantProps<typeof progressStyles> & {
    value?: number;
  };

export const ProgressBar = ({
  color,
  value,
  ...rest
}: ProgressBarProps): ReactElement | null => (
  <progress
    value={value}
    max="100"
    className={progressStyles({ color })}
    {...rest}
  >
    ProgressBar
  </progress>
);
