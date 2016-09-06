import { actions } from 'react-redux-form';
import * as types from '../constants/tasks';

export const subscribe = () => {
  return (dispatch, getState, { Meteor, Tracker, Collections }) => {
    let subs = Meteor.subscribe('allTodos');
    let computation = Tracker.autorun(() => {
      if (subs.ready()) {
        dispatch({
          type: types.UPDATE_TASK,
          tasks: Collections.Todos.find(
            {},
            {sort: {priority: -1, timestamp: -1}}
          ).fetch()
        })
      }
    })
    return computation
  }
}

export const addTask = (task) => {
  return (dispatch, getState, { Meteor }) => {
    Meteor.call("addTask", task, (err, res) => {
      if (err) return console.error(err)
      resetTask();
    });
  }
}

export const removeTask = (taskId) => {
  return (dispatch, getState, { Meteor }) => {
    Meteor.call("removeTask", taskId, (err, res) => {
      if (err) return console.error(err)
    });
  }
}

export const toggleChecked = (taskId, checked) => {
  return (dispatch, getState, { Meteor }) => {
    Meteor.call("setChecked", taskId, checked, (err, res) => {
      if (err) return console.error(err)
    });
  }
}

export const changeTaskText = (text) => {
  return (dispatch) => actions.change('task.text', text);
}

export const changeTaskPriority = (priority) => {
  return (dispatch) => actions.change('task.priority', priority);
}

export const resetTask = () => {
  return (dispatch) => actions.reset('task.text');
}
