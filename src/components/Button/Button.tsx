import classNames from 'classnames';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import './Button.scss';

export type ButtonProps = {
  children?: ReactNode;
  /**
   * Variant determines how the button will be rendered.
   */
  variant?: 'primary' | 'secondary';
} & HTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref
) {
  const { variant, className, ...rest } = props;
  const classes = classNames(className, {
    primary: variant === 'primary',
    secondary: variant === 'secondary',
  });

  return <button ref={ref} className={classes} {...rest} />;
});

export default Button;
