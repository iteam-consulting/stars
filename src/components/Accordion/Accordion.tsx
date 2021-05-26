import classNames from 'classnames';
import React, { HTMLAttributes, ReactNode } from 'react';
import AccordionContext from './Accordion.context';
import './Accordion.scss';

type OmitProps = 'id';

export type AccordionProps = {
  children: [ReactNode, ReactNode];
  id: string;
} & Omit<HTMLAttributes<HTMLDivElement>, OmitProps>;

function Accordion({ children, className, id, ...props }: AccordionProps) {
  const [activator, content] = children;
  const { toggle, state } = React.useContext(AccordionContext);
  const [maxHeight, setMaxHeight] = React.useState(0);
  const activatorRef = React.useRef<HTMLElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const activator = activatorRef.current;
    const content = contentRef.current;
    let activatorMounted = false;

    const onClick = (_: MouseEvent) => {
      toggle(id);
    };

    if (activator) {
      activator.addEventListener('click', onClick);
      activatorMounted = true;
    }

    if (content) {
      const height = Array.from(content.children).reduce((acc, el) => {
        acc += el.clientHeight;
        return acc;
      }, 0);

      setMaxHeight(height);
    }

    return function cleanup() {
      if (activatorMounted) {
        activator?.removeEventListener('click', onClick);
      }
    };
  }, [toggle, setMaxHeight, id]);

  const show = state.current === id;
  const classes = classNames('accordion', className, {
    show,
  });

  return (
    <div {...props} className={classes}>
      {React.isValidElement(activator)
        ? React.cloneElement(
            activator,
            { ref: activatorRef, id },
            activator.props.children
          )
        : null}
      {React.isValidElement(content)
        ? React.cloneElement(
            content,
            {
              ref: contentRef,
              style: { maxHeight: show ? maxHeight : 0 },
              className: classNames('content', content.props.className),
            },
            content.props.children
          )
        : null}
    </div>
  );
}

export default Accordion;
