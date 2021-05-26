import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import './SVGIcon.scss';

export type SVGIconProps = {
  variant?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2' | 'x3';
} & HTMLAttributes<HTMLSpanElement>;

function SVGIcon({ className, variant = 'md', ...props }: SVGIconProps) {
  const classes = classNames(className, variant, 'svg-icon');
  return <span {...props} className={classes} />;
}

export default SVGIcon;
