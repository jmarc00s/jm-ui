export const returnSizeClasses = (
  prefix: string
): {
  xs: string[];
  sm: string[];
  md: string[];
  lg: string[];
} => ({
  xs: [`${prefix}-xs`],
  sm: [`${prefix}-sm`],
  md: [`${prefix}-md`],
  lg: [`${prefix}-lg`],
});
