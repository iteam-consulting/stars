import { ReactElement, ReactNode, useCallback, useState } from 'react';
import { AccordionProps } from './Accordion';
import AccordionContext, { AccordionStateRecord } from './Accordion.context';

export type AccordionProviderProps = {
  children?: ReactNode;
};

function AccordionProvider({ children }: AccordionProviderProps) {
  const [state, setState] = useState(AccordionStateRecord());

  const toggle = useCallback(
    (id: string) =>
      setState(state =>
        state.current === id ? state.clear() : state.set('current', id)
      ),
    [setState]
  );

  var context = { state, toggle };

  return (
    <AccordionContext.Provider value={context}>
      {children}
    </AccordionContext.Provider>
  );
}

export default AccordionProvider;
