import { Record, RecordOf } from 'immutable';
import { createContext } from 'react';

export type NavState = {
  pathname: string;
};

export const NavContextRecordType = Record<NavState>({
  pathname: '/',
});

export const NavContext = createContext<RecordOf<NavState>>(
  NavContextRecordType()
);
