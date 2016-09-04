import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import TaskForm from '../components/task-form';
import { addTask } from  '../actions';

const mapState = (state) => ({task: state.task});
const mapDispatch = (dispatch, getState) => {
  return {
  	textChanged: (text) => actions.change('task.text', text),
  	priorityChanged: (priority) => actions.change('task.priority', priority),
    addTask: (taskId) => dispatch(addTask(taskId))
  }
};

export default connect(
  mapState, mapDispatch
)(TaskForm)
