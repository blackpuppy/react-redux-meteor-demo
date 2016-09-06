import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import TaskForm from '../components/task-form';

storiesOf('TaskForm', module)
  .add('first task form', () => {
    const task = {
      _id: '1',
      text: 'Form Validation',
      priority: '5',
      checked: false
    };
    const props = {
      key: task._id,
      task: task,
      taskForm: {}, // TODO: how to create taskForm?
      textChanged: () => action('textChanged'),
      priorityChanged: () => action('priorityChanged'),
      resetTaskForm: () => action('resetTaskForm'),
      addTask: () => action('addTask')
    };
    return (
      <TaskForm
        {...props}
      />
    );
  });