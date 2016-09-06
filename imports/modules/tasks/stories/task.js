import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Task from '../components/task';

storiesOf('Task', module)
  .add('first task', () => {
    const task = {
      _id: '1',
      text: 'Form Validation',
      priority: '5',
      checked: false
    };
    const props = {
      key: task._id,
      task: task,
      removeTask: () => action('removeTask'),
      toggleChecked: () => action('toggleChecked')
    };
    return (
      <Task
        {...props}
      />
    );
  });