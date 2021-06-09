import classNames from 'classnames';
import { CSSProperties, forwardRef, ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import { LayoutStrings } from './Layout.strings';

type LayoutModes = 'flex' | 'sticky' | 'fixed' | 'absolute';
type LayoutSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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
    ...rest
  } = props;
  const classes = classNames(className, mode, {
    fill,
    pinned,
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
