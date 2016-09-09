import React from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { storiesOf, action } from '@kadira/storybook';

import reducerTasks from '../reducers';
import TaskForm from '../components/task-form';
import initialState from '../reducers/initialState';

// is store necessary?
const store = createStore(
  combineReducers({
    ...reducerTasks,
  }),
  compose(
    applyMiddleware(thunk.withExtraArgument({})),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

storiesOf('TaskForm', module)
  .add('first task form', () => {
    const task = {
      _id: '1',
      text: 'Form Validation',
      priority: '5',
      checked: false
    };
    const taskForm = {
      fields: {
        text: {
          valid: true
        }
      }
    };
    const props = {
      key: task._id,
      task: task,
      taskForm: taskForm,
      textChanged: (text) => console.debug('textChanged(): text = ', text),
      priorityChanged: (priority) => console.debug('priorityChanged(): priority = ', priority),
      resetTaskForm: () => console.debug('resetTaskForm()'),
      addTask: (task) => console.debug('addTask(): task = ', task)
    };
    return (
      <Provider store={store}>
        <TaskForm
          {...props}
        />
      </Provider>
    );
  });