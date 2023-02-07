import { cva, VariantProps } from 'class-variance-authority';
import React, { InputHTMLAttributes, ReactElement } from 'react';
import { returnColorClasses, returnSizeClasses } from 'src/utils';

const toggleStyles = cva(['toggle'], {
  variants: {
    color: returnColorClasses('toggle'),
    size: returnSizeClasses('toggle'),
  },
  defaultVariants: {
    size: 'md',
  },
});

export type ToggleProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'color'
> &
  VariantProps<typeof toggleStyles> & {
    label?: string;
  };

export const Toggle = ({
  color,
  size,
  label,
  id,
  ...rest
}: ToggleProps): ReactElement => (
  <>
    <label className="label cursor-pointer" htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        className={toggleStyles({ color, size })}
        {...rest}
      />
      {!!label?.length && <span className="label-text ml-4">{label}</span>}
    </label>
  </>
);
