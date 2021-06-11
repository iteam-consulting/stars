import { forwardRef, InputHTMLAttributes } from 'react';
import './Checkbox.scss';

type NativeOmit = 'type';
export type CheckboxProps = {} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  NativeOmit
>;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  props,
  ref
) {
  return <input {...props} ref={ref} type="checkbox" />;
});

export default Checkbox;
