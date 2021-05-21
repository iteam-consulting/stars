import { HTMLAttributes, ReactNode, useEffect, useRef } from 'react';

export type ClickoutProps = {
  onClickout: () => void;
  detect?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function Clickout({ onClickout, detect, children, ...props }: ClickoutProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let attached = false;

    const onMouseDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        onClickout();
      }
    };

    const onFocusChange = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && !ref.current?.contains(document.activeElement)) {
        onClickout();
      }
    };

    if (detect) {
      window.addEventListener('keyup', onFocusChange);
      window.addEventListener('mousedown', onMouseDown);

      attached = true;

      return () => {
        window.removeEventListener('keyup', onFocusChange);
        window.removeEventListener('mousedown', onMouseDown);
        attached = false;
      };
    } else if (attached) {
      window.removeEventListener('keyup', onFocusChange);
      window.removeEventListener('mousedown', onMouseDown);
      attached = false;
    }
  }, [onClickout, detect]);

  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
}

export default Clickout;
