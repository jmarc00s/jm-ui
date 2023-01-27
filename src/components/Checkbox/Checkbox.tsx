import { cva, VariantProps } from 'class-variance-authority';
import React, { InputHTMLAttributes } from 'react';

const checkboxStyles = cva(['checkbox'], {
  variants: {
    color: {
      primary: ['checkbox-primary'],
      secondary: ['checkbox-secondary'],
      success: ['checkbox-success'],
      error: ['checkbox-error'],
      accent: ['checkbox-accent'],
      warning: ['checkbox-warning'],
      info: ['checkbox-info'],
    },
    size: {
      xs: ['checkbox-xs'],
      sm: ['checkbox-sm'],
      md: ['checkbox-md'],
      lg: ['checkbox-lg'],
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

export type CheckboxProps = VariantProps<typeof checkboxStyles> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'size'> & {
    label: string;
  };

export const Checkbox = ({
  label,
  id,
  color,
  size,
  ...rest
}: CheckboxProps) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer" htmlFor={id}>
        <input
          data-testid="checkbox"
          id={id}
          type="checkbox"
          className={checkboxStyles({ color, size })}
          {...rest}
        />
        <span className="label-text ml-4">{label}</span>
      </label>
    </div>
  );
};
