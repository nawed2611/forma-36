import React from 'react';

import { SkeletonBodyText } from '../src/SkeletonBodyText/SkeletonBodyText';
import { SkeletonDisplayText } from '../src/SkeletonDisplayText/SkeletonDisplayText';
import {
  SkeletonContainer,
  SkeletonContainerProps,
} from '../src/SkeletonContainer/SkeletonContainer';

export default {
  title: 'Components/Skeleton/SkeletonContainer',
  component: SkeletonContainer,
  parameters: {
    propTypes: [SkeletonContainer['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

export const Basic = (args: SkeletonContainerProps) => (
  <SkeletonContainer {...args}>
    <SkeletonDisplayText numberOfLines={1} />
    <SkeletonBodyText numberOfLines={3} offsetTop={35} />
  </SkeletonContainer>
);

Basic.args = {
  width: '100%',
  height: '100',
  backgroundColor: '#e5ebed',
  foregroundColor: '#f7f9fa',
  speed: 2,
};
