import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';
import { ReactNode, useState } from 'react';

export type PopoverProps = {
  children?: ReactNode;
  reference: HTMLElement | null;
  placement?: Placement;
};

function Popover({ children, reference, placement }: PopoverProps) {
  const [content, setContent] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(reference, content, {
    strategy: 'absolute',
    placement: placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 20],
        },
      },
    ],
  });

  return (
    <div {...attributes.popper} ref={setContent} style={styles.popper}>
      {children}
    </div>
  );
}

export default Popover;
