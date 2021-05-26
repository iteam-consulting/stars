import { Record, RecordOf } from 'immutable';
import { createContext } from 'react';

type AccordionState = {
  current: string | null;
};

type AccordionActions = {
  toggle(id: string | null): void;
};

export const AccordionStateRecord = Record<AccordionState>({
  current: null,
});

type AccordionContextType = {
  state: RecordOf<AccordionState>;
} & AccordionActions;

const AccordionContext = createContext<AccordionContextType>({
  state: AccordionStateRecord(),
  toggle: () => {},
});

export default AccordionContext;
