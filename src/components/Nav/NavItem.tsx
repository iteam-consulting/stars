import classNames from 'classnames';
import { HTMLAttributes, ReactElement, useContext } from 'react';
import { NavContext } from './Nav.context';

type LinkishProps = {
  to: string;
};

export type NavItemProps = {
  children: ReactElement<LinkishProps>;
} & HTMLAttributes<HTMLDivElement>;

function NavItem({ children, className, ...props }: NavItemProps) {
  const state = useContext(NavContext);
  const classes = classNames('nav-item', className, {
    active: state.pathname?.startsWith(children.props.to),
  });

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export default NavItem;
