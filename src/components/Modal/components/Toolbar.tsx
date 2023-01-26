import React, { ReactElement } from 'react';
import { Button } from 'src/components/Button';

export type ModalToolbarProps = {
  title: string;
  onClose: () => void;
};

export const Toolbar = ({
  title,
  onClose,
}: ModalToolbarProps): ReactElement => {
  return (
    <div className="w-full flex items-center justify-between">
      <h1 className="text-xl font-semibold">{title}</h1>
      <Button onClick={onClose}>X</Button>
    </div>
  );
};
