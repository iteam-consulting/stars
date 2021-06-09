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
