import { cva, VariantProps } from 'class-variance-authority';
import React, { InputHTMLAttributes, ReactElement } from 'react';
import { returnColorClasses, returnSizeClasses } from 'src/utils';
import { RangeSteps } from './components/RangeSteps';

const rangeStyles = cva(['range'], {
  variants: {
    color: returnColorClasses('range'),
    size: returnSizeClasses('range'),
  },
  defaultVariants: {
    color: 'secondary',
    size: 'md',
  },
});

export type RangeProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'size' | 'type'
> &
  VariantProps<typeof rangeStyles> & {
    showStepBar?: boolean;
  };

export const Range = ({
  color,
  size,
  step,
  showStepBar = false,
  ...rest
}: RangeProps): ReactElement => {
  const shouldShowStepBar = !!step && showStepBar;

  return (
    <>
      <input
        type="range"
        step={step}
        className={rangeStyles({ color, size })}
        {...rest}
      />
      {shouldShowStepBar && <RangeSteps step={Number(step)} />}
    </>
  );
};
