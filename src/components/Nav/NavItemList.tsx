import classNames from 'classnames';
import React, {
  ComponentType,
  HTMLAttributes,
  SVGProps,
  useContext,
} from 'react';
import Accordion from '../Accordion/Accordion';
import AccordionContext from '../Accordion/Accordion.context';
import { NavContext } from './Nav.context';

export type NavItemListProps = {
  icon?: ComponentType<SVGProps<SVGElement>>;
  path: string;
  title: string;
  children?: React.ReactNodeArray;
} & HTMLAttributes<HTMLDivElement>;

function NavItemList({
  children,
  className,
  path,
  title,
  ...props
}: NavItemListProps) {
  const state = useContext(NavContext);
  const accordion = useContext(AccordionContext);

  const classes = classNames('nav-item-list', className, {
    active: state.pathname.startsWith(path),
  });

  return (
    <Accordion {...props} id={path} className={classes}>
      <div>{title}</div>
      <div>{children}</div>
    </Accordion>
  );
}

export default NavItemList;
