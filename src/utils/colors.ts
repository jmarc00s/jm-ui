export const returnColorClasses = (
  prefix: string
): {
  primary: string[];
  secondary: string[];
  success: string[];
  error: string[];
  accent: string[];
  warning: string[];
  info: string[];
  ghost: string[];
} => ({
  primary: [`${prefix}-primary`],
  secondary: [`${prefix}-secondary`],
  success: [`${prefix}-success`],
  error: [`${prefix}-error`],
  accent: [`${prefix}-accent`],
  warning: [`${prefix}-warning`],
  info: [`${prefix}-info`],
  ghost: [`${prefix}-ghost`],
});
