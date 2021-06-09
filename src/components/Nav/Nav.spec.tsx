import { render, act, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Link, Router } from 'react-router-dom';
import Nav from './Nav';
import NavItem from './NavItem';
import NavItemList from './NavItemList';

describe('Nav', () => {
  test('Nav renders properly', () => {
    const { container } = render(<Nav history={createMemoryHistory()} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Nav is location aware', async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Nav history={history}>
          <NavItemList path="/test" title="Test">
            <NavItem>
              <Link to="/test/hello">Hello</Link>
            </NavItem>
          </NavItemList>
        </Nav>
      </Router>
    );
    const link = screen.getByText(/Hello/i);
    const section = screen.getByTitle(/Test/i);

    expect(link.parentElement!.classList).not.toContain('active');
    expect(section.classList).not.toContain('active');

    act(() => {
      history.push('/test/hello');
    });

    expect(link.parentElement!.classList).toContain('active');
    expect(section.classList).toContain('active');
  });

  test('Nav renders a complex tree properly', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Nav history={history}>
          <NavItem>
            <Link to="/test/link1">Link 1</Link>
          </NavItem>
          <NavItemList path="/test" title="Test">
            <NavItem>
              <Link to="/test/hello">Hello</Link>
            </NavItem>
          </NavItemList>
        </Nav>
      </Router>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
