import React, { ReactElement, ReactNode } from 'react';

type RangeStepsProps = {
  step: number;
};

export const RangeSteps = ({ step }: RangeStepsProps): ReactElement => {
  const steps: ReactNode[] = [];

  const numberOfSteps = Math.floor(100 / step) + 1;

  for (let index = 0; index < numberOfSteps; index++) {
    steps.push(<span key={index}> | </span>);
  }

  return (
    <div
      data-testid="ranger-steps-bar"
      className="w-full flex justify-between text-xs px-2"
    >
      {steps}
    </div>
  );
};
