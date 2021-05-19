import Main, { MainProps } from './Main';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Main',
  component: Main,
} as Meta;

const Template: Story<MainProps> = args => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <React.Fragment>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        non luctus magna. Donec nec lorem vestibulum, fermentum tortor vehicula,
        commodo nisl. Donec efficitur congue scelerisque. Nunc suscipit ante ut
        ligula fermentum lacinia. Ut at ipsum in nisl pulvinar faucibus. Sed a
        nibh venenatis orci aliquam convallis et non sapien. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Aliquam eleifend erat augue. Nullam porta elit risus, ut
        eleifend lorem laoreet sed. Vivamus porta risus eget arcu bibendum, sed
        hendrerit nulla euismod. Nullam fermentum finibus nulla sed imperdiet.
        Sed eget massa et nisi hendrerit dapibus. Suspendisse ultricies aliquam
        sem, nec interdum nunc aliquet sed. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Praesent ante mauris, sodales at mauris
        vitae, interdum consequat nulla. Suspendisse velit mauris, convallis et
        ante a, finibus molestie risus.
      </p>
    </React.Fragment>
  ),
};

export const Typography = Template.bind({});
Typography.args = {
  children: (
    <React.Fragment>
      <h1>h1 - Heading</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus
        vitae dolor in pulvinar. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Etiam efficitur feugiat lacus, quis varius tortor
        porttitor sit amet. Aliquam placerat iaculis imperdiet. Sed congue risus
        ac tristique ultricies. Sed vulputate fringilla libero vel tincidunt.
        Mauris condimentum mollis dignissim. Proin in mauris nec dui ultrices
        iaculis. Donec sagittis et velit ut tincidunt. Fusce pretium tristique
        mollis. Etiam interdum orci est, ac vulputate lacus accumsan a. Duis
        sodales gravida lorem mollis gravida. Vestibulum mollis ante tellus,
        pretium finibus est aliquet eu.
      </p>
      <h2>h2 - Heading</h2>
      <p>
        Ut maximus lectus dapibus purus posuere, at ultrices mi sollicitudin. In
        malesuada elit mauris, sed molestie nisl cursus vel. Morbi est lectus,
        dictum et fringilla ut, dapibus in elit. Nam rutrum erat et pharetra
        elementum. Nulla sed nisi a est hendrerit sagittis. Nam malesuada
        eleifend rutrum. Sed eu lobortis nisl. Suspendisse ut tempus urna. Etiam
        nec luctus nisl. Nulla a arcu lacinia sem eleifend fringilla ac ut
        tellus. Nulla imperdiet elit consectetur facilisis vehicula. In quis ex
        ipsum. Sed eget dolor libero. Donec ultrices diam ut nunc lacinia
        efficitur. Aenean sed turpis sed nunc semper euismod a at ligula.
      </p>
      <h3>h3 - Heading</h3>
      <p>
        Praesent hendrerit nulla erat, non suscipit purus semper eget. Maecenas
        in tempor ex. Praesent vitae iaculis enim. Donec ultricies lacus tellus,
        eget consectetur lacus facilisis vitae. Sed vitae ullamcorper neque.
        Mauris viverra id purus nec gravida. Duis mattis neque ut feugiat
        euismod. Integer eu purus ac elit hendrerit feugiat. Etiam elementum ut
        mi id mollis.
      </p>
      <h4>h4 - Heading</h4>
      <p>
        Nam eget ligula rhoncus, ultrices purus quis, malesuada erat. Mauris
        pellentesque volutpat orci sit amet elementum. Nullam sagittis risus
        efficitur ante lacinia volutpat. Duis iaculis nisl a lectus tempus
        mattis. Cras a urna id quam interdum accumsan. Donec pellentesque vel
        lectus vehicula interdum. Praesent dignissim dui id ipsum scelerisque, a
        vulputate turpis sodales. Etiam a urna justo.
      </p>
      <h5>h5 - Heading</h5>
      <p>
        Phasellus odio velit, blandit ac lacus pulvinar, interdum aliquam ante.
        Mauris eu orci maximus velit gravida dignissim at sit amet eros. Morbi
        ac ultrices felis. Sed facilisis maximus quam non semper. Donec eros
        velit, elementum consectetur sapien quis, elementum hendrerit dui. Donec
        vitae venenatis purus. In eget tortor dapibus, tincidunt felis ac,
        pharetra lacus. Donec laoreet dui at metus blandit, sit amet iaculis
        ante posuere.
      </p>
      <h6>h6 - Heading</h6>
      <p>
        In scelerisque mauris vitae pretium ultrices. Curabitur sit amet
        bibendum libero. Aenean elementum orci a rutrum auctor. Etiam mauris
        leo, pellentesque non vestibulum id, auctor vitae neque. Curabitur
        vestibulum lacus nisl, in fringilla felis iaculis vel. Donec lectus ex,
        hendrerit non lectus vitae, egestas maximus diam. Nulla eget mauris
        lacus. Nullam rhoncus, dui ac finibus egestas, nulla nunc efficitur
        nisl, in venenatis nunc urna id diam. Morbi risus felis, eleifend in
        nisl at, scelerisque viverra ligula. Donec finibus nunc pharetra est
        pharetra, in facilisis arcu volutpat. Morbi tincidunt nunc lacinia
        venenatis placerat. Vestibulum lacinia porttitor diam a consectetur.
        Nullam condimentum metus vitae ipsum rutrum, in scelerisque ex
        imperdiet. Nulla vulputate massa eu scelerisque iaculis. Nunc non turpis
        sit amet augue placerat fringilla. Aliquam a nunc nec metus tincidunt
        iaculis quis venenatis dui.
      </p>
    </React.Fragment>
  ),
};
