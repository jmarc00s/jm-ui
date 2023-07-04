import React, { Ref, forwardRef } from 'react';
import { PatternFormat } from 'react-number-format';
import { Input, InputProps } from '../Input';

export type DateInputProps = Omit<
  InputProps,
  'type' | 'defaultValue' | 'value'
>;

const DateInputComponent = (
  props: DateInputProps,
  ref: Ref<HTMLInputElement>,
) => (
  <PatternFormat
    format="##/##/####"
    {...props}
    getInputRef={ref}
    customInput={Input}
  />
);

export const DateInput = forwardRef(DateInputComponent);
