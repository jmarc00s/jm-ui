import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React, { HTMLAttributes, ReactElement, useState } from 'react';
import { Button } from '../Button';
import { DropdownItem } from './components/DropdownItem';

const dropdownStyles = cva(['dropdown'], {
  variants: {
    direction: {
      top: ['dropdown-top'],
      right: ['dropdown-right'],
      bottom: ['dropdown-bottom'],
      left: ['dropdown-left'],
    },
  },
});

export type DropdownProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dropdownStyles> & {
    label: string;
    alignEnd?: boolean;
  };

const Dropdown = ({
  label,
  children,
  direction,
  alignEnd = false,
}: DropdownProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLabelClick = (): void => setIsOpen((prevState) => !prevState);

  return (
    <div
      role="listbox"
      className={classNames(
        dropdownStyles({ direction }),
        alignEnd && 'dropdown-end',
      )}
    >
      <Button onClick={handleLabelClick}>{label}</Button>
      {isOpen && (
        <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          {children}
        </ul>
      )}
    </div>
  );
};

Dropdown.Item = DropdownItem;

export { Dropdown };
