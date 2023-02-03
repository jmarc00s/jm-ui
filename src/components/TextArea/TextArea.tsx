import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React, { ReactElement, TextareaHTMLAttributes } from 'react';
import { returnColorClasses, returnSizeClasses } from 'src/utils';

const textAreaStyles = cva(['textarea'], {
  variants: {
    color: returnColorClasses('textarea'),
    size: returnSizeClasses('textarea'),
  },
  defaultVariants: {
    size: 'md',
  },
});

export type TextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'color' | 'size'
> &
  VariantProps<typeof textAreaStyles> & {
    label?: string;
    error?: string;
    bordered?: boolean;
    resizable?: boolean;
  };

export const TextArea = ({
  color,
  size,
  bordered = false,
  resizable = true,
  label,
  error,
  id,
  ...rest
}: TextAreaProps): ReactElement => {
  const borderedClass = bordered && 'textarea-bordered';
  const resizeClass = !resizable && 'resize-none';
  const errorClass = error?.length && 'textarea-error';

  const textAreaClasses = [
    textAreaStyles({ color, size }),
    borderedClass,
    resizeClass,
    errorClass,
  ];

  const labelClasses = ['label-text', error && 'text-error'];

  return (
    <div className="form-control">
      <label htmlFor={id} className="label">
        {!!label?.length && (
          <span className={classNames(labelClasses)}>{label}</span>
        )}
      </label>
      <textarea className={classNames(textAreaClasses)} {...rest}></textarea>
      {error?.length && (
        <label htmlFor={id} className="label-text-alt text-error">
          {error}
        </label>
      )}
    </div>
  );
};
