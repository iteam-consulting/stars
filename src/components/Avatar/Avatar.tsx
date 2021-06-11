import classNames from 'classnames';
import { forwardRef, ImgHTMLAttributes } from 'react';
import './Avatar.scss';

type AvatarSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type AvatarProps = {
  size?: AvatarSizes;
} & ImgHTMLAttributes<HTMLImageElement>;

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(function Avatar(
  props,
  ref
) {
  const { className, size, ...rest } = props;
  const classes = classNames('avatar', size, className);

  return <img {...rest} className={classes} ref={ref} />;
});

export default Avatar;
