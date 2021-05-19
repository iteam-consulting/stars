import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import { CSSProperties, useCallback, useState } from 'react';
import Main from '../Main/Main';
import Clickout, { ClickoutProps } from './Clickout';

export default {
  component: Clickout,
  title: 'Components/Clickout',
} as Meta;

const kClickoutStyle: CSSProperties = {
  backgroundColor: 'black',
  color: 'white',
  padding: '2rem',
};

const Template: Story<ClickoutProps> = ({ onClickout, children, ...args }) => {
  const [count, setCount] = useState(0);

  const handleClickout = useCallback(() => {
    onClickout();
    setCount(count => count + 1);
  }, [setCount, onClickout]);

  return (
    <Main>
      <Clickout onClickout={handleClickout} {...args}>
        <div style={kClickoutStyle}>{children}</div>
      </Clickout>
      <hr />
      <h4>Clickout</h4>
      <p>
        Count: {count} <br />
        Clickout of the black region above to count a clickout event.
      </p>
    </Main>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Clickout',
  onClickout: action('clickout'),
  detect: true,
};
