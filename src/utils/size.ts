type SizeType = {
  xs: string[];
  sm: string[];
  md: string[];
  lg: string[];
};

export const returnSizeClasses = (prefix: string): SizeType => ({
  xs: [`${prefix}-xs`],
  sm: [`${prefix}-sm`],
  md: [`${prefix}-md`],
  lg: [`${prefix}-lg`],
});
