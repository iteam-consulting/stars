import classNames from 'classnames';
import { CSSProperties, forwardRef, ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import { LayoutStrings } from './Layout.strings';
import './Layout.scss';

type LayoutModes = 'flex' | 'sticky' | 'fixed' | 'absolute';
type LayoutSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type LayoutOrientation = 'x' | 'y' | '-x' | '-y';
type LayoutAlignment = 'start' | 'center' | 'end';

export type LayoutProps = {
  children?: ReactNode;
  mode?: LayoutModes;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  spacing?: LayoutSpacing;
  fill?: boolean;
  pinned?: boolean;
  orientation?: LayoutOrientation;
  alignment?: LayoutAlignment;
} & HTMLAttributes<HTMLDivElement>;

const Layout = forwardRef<HTMLDivElement, LayoutProps>(function Layout(
  props,
  ref
) {
  const {
    className,
    mode,
    pinned,
    fill,
    spacing,
    top,
    right,
    bottom,
    left,
    style,
    orientation,
    alignment,
    ...rest
  } = props;
  const classes = classNames(className, mode, {
    fill,
    pinned,
    [`${orientation}`]: orientation,
    [`${alignment}`]: alignment,
    [`spacing-${spacing}`]: spacing,
  });

  const styles: CSSProperties = {
    ...style,
    top: pinned ? 0 : top,
    right: pinned ? 0 : right,
    bottom: pinned ? 0 : bottom,
    left: pinned ? 0 : left,
  };

  if (pinned && (top || right || bottom || left)) {
    console.warn(LayoutStrings.InvalidPinningProps);
  }

  return <div ref={ref} {...rest} style={styles} className={classes} />;
});

export default Layout;
