import { cva, VariantProps } from 'class-variance-authority';
import React, { InputHTMLAttributes, ReactElement } from 'react';

const inputStyles = cva(['input w-full'], {
  variants: {
    variant: {
      bordered: ['input-bordered'],
      ghost: ['input-ghost'],
    },
    color: {
      primary: ['input-primary'],
      secondary: ['input-secondary'],
      accent: ['input-accent'],
      info: ['input-info'],
      success: ['input-success'],
      error: ['input-error'],
      warning: ['input-warning'],
    },
    size: {
      xs: ['input-xs'],
      sm: ['input-sm'],
      md: ['input-md'],
      lg: ['input-lg'],
    },
  },
});

export type InputProps = VariantProps<typeof inputStyles> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    label?: string;
    errorMessage?: string;
    htmlSize?: number | undefined;
  };

export const Input = ({
  variant,
  color,
  size = 'md',
  className,
  htmlSize,
  label,
  id,
  errorMessage,
  ...rest
}: InputProps): ReactElement => (
  <>
    {!!label?.length && (
      <label className="label" htmlFor={id}>
        <span className={`label-text ${errorMessage?.length && 'text-error'}`}>
          {label}
        </span>
      </label>
    )}
    <input
      data-testid="input"
      className={`${
        errorMessage?.length && 'input-error placeholder:text-error'
      } ${inputStyles({
        variant,
        color,
        size,
      })}`}
      {...rest}
      size={htmlSize}
    />
    {!!errorMessage?.length && (
      <label className="label">
        <span className="label-text-alt text-error text-xs">
          {errorMessage}
        </span>
      </label>
    )}
  </>
);
