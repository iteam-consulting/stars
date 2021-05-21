import classNames from 'classnames';
import { HTMLAttributes, ReactNode, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import './Menu.scss';

type MenuOmitType = 'title';

export type MenuProps = {
  name?: string;
  children?: ReactNode;
  show?: boolean;
  title: string;
} & Omit<HTMLAttributes<HTMLDivElement>, MenuOmitType>;

function Menu({ name, children, show, ...props }: MenuProps) {
  const classes = classNames(name, 'menu');
  const ref = useRef<HTMLDivElement>(null);
  const transition: CSSTransitionProps<HTMLDivElement> = {
    nodeRef: ref,
    in: show,
    appear: true,
    timeout: 125,
  };

  return (
    <CSSTransition {...transition}>
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    </CSSTransition>
  );
}

export default Menu;
