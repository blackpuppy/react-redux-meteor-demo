import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TaskForm from '../components/task-form';
import { addTask } from  '../actions';

const mapState = () => ({});
const mapDispatch = (dispatch, getState) => {
  return {
    addTask: (taskId) => dispatch(addTask(taskId))
  }
};

export default connect(
  mapState, mapDispatch
)(TaskForm)
