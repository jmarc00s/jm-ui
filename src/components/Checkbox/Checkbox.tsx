import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React, { forwardRef, InputHTMLAttributes, Ref } from 'react';

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

const CheckboxComponent = (
  // eslint-disable-next-line object-curly-newline
  { label, id, color, size, className, ...rest }: CheckboxProps,
  ref: Ref<HTMLInputElement>,
) => (
  <div className="form-control">
    <label className="label cursor-pointer justify-start p-0" htmlFor={id}>
      <input
        data-testid="checkbox"
        id={id}
        type="checkbox"
        className={classNames(checkboxStyles({ color, size }), className)}
        ref={ref}
        {...rest}
      />
      <span className="label-text ml-4">{label}</span>
    </label>
  </div>
);

export const Checkbox = forwardRef(CheckboxComponent);
