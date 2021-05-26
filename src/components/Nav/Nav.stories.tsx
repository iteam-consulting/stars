/**
 * Proposed markup:
 * The Link component used should be Link from some client side router package like react-*, reach-* or next.
 * <Nav>
 *  <NavItem>
 *    <Link to="...">Item 1</Link>
 *  </NavItem>
 *  <NavItem>
 *    <Link to="...">Item 2</Link>
 *  </NavItem>
 *  <NavItem>
 *    <Link to="...">Item 3</Link>
 *  </NavItem>
 *  <NavItemList title="List" [icon={...} | path="..."]>
 *    <NavItem>
 *      <Link to="...">Item 1</Link>
 *    </NavItem>
 *    <NavItem>
 *      <Link to="...">Item 2</Link>
 *    </NavItem>
 *    <NavItem>
 *      <Link to="...">Item 3</Link>
 *    </NavItem>
 *  </NavItemList>
 * </Nav>
 *
 * The nav component should implement/use a nav context to keep track of which sublist may be active.
 * Similarly, the NavItemList should implement/use the same nav context and keep track of its own inner
 * lists.
 *
 * The entire nav tree also needs to know where the application is currently located. NavItemLists should
 * expand on mount when the location includes the path provided to the list. NavItems should mount in an
 * :active state if the current location matches where the item points.
 */

import { Meta, Story } from '@storybook/react';
import Nav, { NavProps } from './Nav';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NavItem from './NavItem';
import NavItemList from './NavItemList';

export default {
  title: 'Components/Nav',
  component: Nav,
} as Meta;

type StoryProps = Omit<NavProps, 'history' | 'children'>;
const history = createMemoryHistory();

const Template: Story<StoryProps> = args => {
  return (
    <Router history={history}>
      <Nav {...args} history={history}>
        <NavItem>
          <Link to="/page-1">Page 1</Link>
        </NavItem>
        <NavItem>
          <Link to="/page-2">Page 2</Link>
        </NavItem>
        <NavItemList title="More stuff" path="/more">
          <NavItem>
            <Link to="/more/page-1">Page 1</Link>
          </NavItem>
          <NavItem>
            <Link to="/more/page-2">Page 2</Link>
          </NavItem>
        </NavItemList>
      </Nav>
      <Switch>
        <Route path="/page-1">
          <span>Hello from Page 1</span>
        </Route>
        <Route path="/page-2">
          <span>Hello from Page 2</span>
        </Route>
        <Route path="/more/page-1">
          <span>Hello from more Page 1</span>
        </Route>
        <Route path="/more/page-2">
          <span>Hello from more Page 2</span>
        </Route>
        <Route>
          <span>Not found</span>
        </Route>
      </Switch>
    </Router>
  );
};

export const Default = Template.bind({});
