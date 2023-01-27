type ColorType = {
  primary: string[];
  secondary: string[];
  success: string[];
  error: string[];
  accent: string[];
  warning: string[];
  info: string[];
};

export const returnColorClasses = (prefix: string): ColorType => ({
  primary: [`${prefix}-primary`],
  secondary: [`${prefix}-secondary`],
  success: [`${prefix}-success`],
  error: [`${prefix}-error`],
  accent: [`${prefix}-accent`],
  warning: [`${prefix}-warning`],
  info: [`${prefix}-info`],
});
