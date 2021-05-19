import { HTMLAttributes } from 'react';
import './Main.scss';

export type MainProps = {} & HTMLAttributes<HTMLDivElement>;

/**
 * The Main component is meant to contain the main content for a given page.
 * @param props {MainProps} Component props
 */
function Main(props: MainProps) {
  return <main {...props} />;
}

export default Main;
