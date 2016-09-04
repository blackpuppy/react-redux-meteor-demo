import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import initialState from '../reducers/initialState';
import TaskForm from '../components/task-form';
import { addTask } from  '../actions';

const mapState = (state) => ({task: state.task});
const mapDispatch = (dispatch, getState) => {
  return {
    textChanged: (text) => actions.change('task.text', text),
    priorityChanged: (priority) => actions.change('task.priority', priority),
    resetTask: () => {
      // const initialTaskState = initialState.task;
      // actions.change('task.text', initialTaskState.text);

      // console.debug('resetTask(): initialTaskState.text = ', initialTaskState.text);

      // const newTask = Object.assign({}, task);
      // newTask.text = initialTaskState.text;
      // console.debug('  return newTask = ', newTask);
      // return newTask;

      actions.reset('task.text');
    },
    addTask: (task) => dispatch(addTask(task))
  }
};

export default connect(
  mapState, mapDispatch
)(TaskForm)
