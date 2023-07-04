import { Ref, forwardRef } from 'react';
import { NumericFormat } from 'react-number-format';
import { Input, InputProps } from '../Input';

export type CurrencyInputProps = Omit<
  InputProps,
  'value' | 'defaultValue' | 'type'
>;

const CurrencyInputComponent = (
  props: CurrencyInputProps,
  ref: Ref<HTMLInputElement>,
) => (
  <NumericFormat
    prefix="R$ "
    thousandSeparator="."
    decimalSeparator=","
    getInputRef={ref}
    {...props}
    decimalScale={2}
    customInput={Input}
  />
);

export const CurrencyInput = forwardRef(CurrencyInputComponent);
