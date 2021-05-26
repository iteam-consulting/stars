import { Meta, Story } from '@storybook/react';
import Accordion from './Accordion';
import AccordionProvider from './AccordionProvider';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

const Template: Story = _ => (
  <AccordionProvider>
    <Accordion id="first">
      <a>First</a>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </Accordion>
    <Accordion id="second">
      <a>Second</a>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>
    </Accordion>
  </AccordionProvider>
);

export const Default = Template.bind({});
