import { History } from 'history';
import React, { HTMLAttributes, ReactNode, useState } from 'react';
import AccordionProvider from '../Accordion/AccordionProvider';
import { NavContext, NavContextRecordType } from './Nav.context';
import './Nav.scss';

export type NavProps = {
  history: History;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function Nav({ history, children, ...props }: NavProps) {
  const [state, setState] = useState(
    NavContextRecordType({
      pathname: history?.location.pathname,
    })
  );

  React.useEffect(() => {
    return history.listen(state => {
      setState(s => s.set('pathname', state.pathname));
    });
  }, [history, setState]);

  return (
    <NavContext.Provider value={state}>
      <AccordionProvider>
        <nav {...props}>{children}</nav>
      </AccordionProvider>
    </NavContext.Provider>
  );
}

export default Nav;
