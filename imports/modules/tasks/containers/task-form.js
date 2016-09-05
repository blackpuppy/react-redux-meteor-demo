import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import initialState from '../reducers/initialState';
import TaskForm from '../components/task-form';
import {
  addTask,
  changeTaskText,
  changeTaskPriority,
  resetTask
} from  '../actions';

const mapState = (state) => ({task: state.task, taskForm: state.taskForm});
const mapDispatch = (dispatch, getState) => {
  return {
    textChanged: (text) => dispatch(changeTaskText( text)),
    priorityChanged: (priority) => dispatch(changeTaskPriority(priority)),
    resetTask: () => dispatch(resetTask()),
    addTask: (task) => dispatch(addTask(task))
  }
};

export default connect(
  mapState, mapDispatch
)(TaskForm)
