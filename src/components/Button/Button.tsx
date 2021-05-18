import classNames from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';
import './Button.scss';

export type ButtonProps = {
  children?: ReactNode;
  /**
   * Variant determines how the button will be rendered.
   */
  variant?: 'primary' | 'secondary';
} & HTMLAttributes<HTMLButtonElement>;

function Button({ variant, className, ...props }: ButtonProps) {
  const classes = classNames(className, {
    primary: variant === 'primary',
    secondary: variant === 'secondary',
  });

  return <button className={classes} {...props} />;
}

export default Button;
