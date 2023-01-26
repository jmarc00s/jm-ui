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
    <div className="w-full flex items-center justify-between bg-base-300 px-4 py-2">
      <h1 className="text-xl font-semibold">{title}</h1>
      <Button variant="ghost" className="rounded" onClick={onClose}>
        x
      </Button>
    </div>
  );
};
