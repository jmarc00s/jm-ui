import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React, {
  forwardRef,
  ReactElement,
  Ref,
  SelectHTMLAttributes,
} from 'react';
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
    errorMessage?: string;
  };

const SelectComponent = (
  {
    label,
    color,
    size,
    id,
    children,
    bordered = false,
    className,
    errorMessage,
    ...rest
  }: SelectProps,
  ref: Ref<HTMLSelectElement>,
): ReactElement => (
  <div className="flex flex-col w-full">
    {!!label?.length && (
      <label className="label" htmlFor={id}>
        <span
          className={classNames(
            'label-text',
            errorMessage?.length && 'text-error',
          )}
        >
          {label}
        </span>
      </label>
    )}
    <select
      data-testid="select"
      className={classNames(
        errorMessage?.length && 'select-error',
        selectStyles({ color, size }),
        bordered && 'select-bordered',
        className,
      )}
      {...rest}
      id={id}
      ref={ref}
    >
      {children}
    </select>
    {!!errorMessage?.length && (
      <label className="label">
        <span className="label-text-alt text-error text-xs">
          {errorMessage}
        </span>
      </label>
    )}
  </div>
);

export const Select = forwardRef(SelectComponent);
