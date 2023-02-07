import React, { ReactElement, ReactNode } from 'react';
import { BreadcrumbsItem } from './components/BreadcrumbsItem';

export type BreadcrumbsProps = {
  children: ReactNode;
};

const Breadcrumbs = ({ children }: BreadcrumbsProps): ReactElement => (
  <div className="text-sm breadcrumbs">
    <ul>{children}</ul>
  </div>
);

Breadcrumbs.Item = BreadcrumbsItem;

export { Breadcrumbs };
