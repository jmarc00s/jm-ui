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
    ...rest
  }: SelectProps,
  ref: Ref<HTMLSelectElement>,
): ReactElement => (
  <>
    {!!label?.length && (
      <label className="label" htmlFor={id}>
        <span className="label-text">{label}</span>
      </label>
    )}
    <select
      data-testid="select"
      className={classNames(
        selectStyles({ color, size }),
        bordered && 'select-bordered',
        className,
      )}
      {...rest}
      ref={ref}
    >
      {children}
    </select>
  </>
);

export const Select = forwardRef(SelectComponent);
