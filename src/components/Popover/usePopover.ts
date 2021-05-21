import { useState, useEffect, useCallback } from 'react';

function usePopover() {
  const [reference, setReference] = useState<HTMLButtonElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setShow(false);
          reference?.blur();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [show, setShow, reference]);

  const onClickout = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const onFocus = useCallback(() => {
    setShow(true);
  }, [setShow]);

  return {
    show,
    activator: {
      ref: setReference,
      onFocus,
      className: 'activator',
    },
    popover: {
      reference,
    },
    clickout: {
      detect: show,
      onClickout,
    },
  };
}

export default usePopover;
