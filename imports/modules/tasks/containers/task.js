import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Task from '../components/task';
import { removeTask, toggleChecked } from  '../actions';

const mapState = () => ({});
const mapDispatch = (dispatch, getState) => {
  return {
    removeTask: (taskId) => dispatch(removeTask(taskId)),
    toggleChecked: (taskId, checked) => dispatch(toggleChecked(taskId, checked))
  }
};

export default connect(
  mapState, mapDispatch
)(Task)
