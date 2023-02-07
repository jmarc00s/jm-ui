import { cva, VariantProps } from 'class-variance-authority';
import React, { ReactElement, SelectHTMLAttributes } from 'react';
import { returnColorClasses, returnSizeClasses } from 'src/utils';

const selectStyles = cva(['select', 'w-full'], {
  variants: {
    color: { ...returnColorClasses('select'), ghost: ['select-ghost'] },
    size: returnSizeClasses('select'),
  },
  defaultVariants: {
    size: 'sm',
  },
});

export type SelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'size' | 'color'
> &
  VariantProps<typeof selectStyles> & {
    label?: string;
    bordered?: boolean;
  };

export const Select = ({
  label,
  color,
  size,
  id,
  children,
  bordered = false,
  ...rest
}: SelectProps): ReactElement => (
  <>
    {!!label?.length && (
      <label className="label" htmlFor={id}>
        <span className="label-text">{label}</span>
      </label>
    )}
    <select
      data-testid="select"
      className={`${selectStyles({ color, size })} ${
        bordered ? 'select-bordered' : ''
      }`}
      {...rest}
    >
      {children}
    </select>
  </>
);
