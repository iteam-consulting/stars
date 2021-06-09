import { render } from '@testing-library/react';
import Layout from './Layout';
import { LayoutStrings } from './Layout.strings';

const warn = console.warn;

describe('Layout', () => {
  const warnMock = jest.fn();

  afterEach(() => {
    console.warn = warn;
    warnMock.mockReset();
  });

  beforeEach(() => {
    console.warn = warnMock;
  });

  test('Layout should render properly', () => {
    const { container } = render(<Layout />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('Layout should render classes based on props', () => {
    const { getByTestId } = render(
      <Layout data-testid="layout" mode="flex" left={50} spacing="xs" />
    );
    const element = getByTestId('layout');

    expect(element.classList).toContain('flex');
    expect(element.classList).toContain('spacing-xs');
    expectPositionStyle(element, 'left', 50);
  });

  test('Layout pinning should validate props', () => {
    const { getByTestId } = render(
      <Layout data-testid="layout" pinned mode="absolute" left={10} />
    );
    expect(warnMock).toHaveBeenCalledWith(LayoutStrings.InvalidPinningProps);

    const element = getByTestId('layout');

    expectPositionStyle(element, 'top', 0);
    expectPositionStyle(element, 'right', 0);
    expectPositionStyle(element, 'bottom', 0);
    expectPositionStyle(element, 'left', 0);
  });
});

function expectPositionStyle(
  element: HTMLElement,
  pos: 'top' | 'right' | 'bottom' | 'left',
  value: number
) {
  expect(element.style[pos]).toBe(`${value}px`);
}
