import classNames from 'classnames';
import { forwardRef, InputHTMLAttributes } from 'react';
import './Checkbox.scss';

type NativeOmit = 'type';
export type CheckboxProps = {
  indeterminate?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, NativeOmit>;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  props,
  ref
) {
  const { indeterminate, className, ...rest } = props;
  const classes = classNames(className, { indeterminate });
  return <input {...rest} ref={ref} type="checkbox" className={classes} />;
});

export default Checkbox;
