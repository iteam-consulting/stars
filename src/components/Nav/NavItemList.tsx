import classNames from 'classnames';
import React, {
  ComponentType,
  HTMLAttributes,
  SVGProps,
  useContext,
} from 'react';
import Accordion from '../Accordion/Accordion';
import { NavContext } from './Nav.context';
import { ReactComponent as AngleIcon } from './AngleRight.svg';
import './NavItemList.scss';
import SVGIcon from '../SVGIcon/SVGIcon';
import AccordionProvider from '../Accordion/AccordionProvider';

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

  const classes = classNames('nav-item-list', className, {
    active: state.pathname.startsWith(path),
  });

  return (
    <Accordion {...props} id={path} className={classes}>
      <div className="nav-item-list--title">
        <span>{title}</span>
        <SVGIcon className="arrow-icon" variant="xs">
          <AngleIcon />
        </SVGIcon>
      </div>
      <div className="nav-item-list--items">
        <AccordionProvider>{children}</AccordionProvider>
      </div>
    </Accordion>
  );
}

export default NavItemList;
