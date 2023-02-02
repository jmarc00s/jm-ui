import { cva, VariantProps } from 'class-variance-authority';
import React, { InputHTMLAttributes, ReactElement } from 'react';
import { returnColorClasses, returnSizeClasses } from 'src/utils';

const radioStyles = cva(['radio'], {
  variants: {
    color: returnColorClasses('radio'),
    size: returnSizeClasses('radio'),
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

export type RadioProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'size' | 'type'
> &
  VariantProps<typeof radioStyles> & {
    label?: string;
  };

export const Radio = ({
  color,
  size,
  id,
  label,
  ...rest
}: RadioProps): ReactElement => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer" htmlFor={id}>
        <input
          id={id}
          type="radio"
          {...rest}
          className={`${radioStyles({ color, size })}`}
        />
        {!!label?.length && <span className="label-text ml-4">{label}</span>}
      </label>
    </div>
  );
};
