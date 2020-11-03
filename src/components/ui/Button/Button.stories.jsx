import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './';

storiesOf('ui/Button', module)
  .add('primary', () => (
    <Button
      onClick={action('onClick')}
    >
      Lorem ipsum
    </Button>
  ))
  .add('secondary', () => (
    <Button
      onClick={action('onClick')}
      secondary
    >
      Lorem ipsum
    </Button>
  ))
  .add('long text', () => (
    <Button
      onClick={action('onClick')}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </Button>
  ));
