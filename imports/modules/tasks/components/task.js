import React, { Component, PropTypes } from 'react';
import {
  Button,
} from 'react-bootstrap';

const Task = (props) => {
  const { removeTask, toggleChecked } = props
  const handleRemoveTask = (taskId, e) => {
    e.preventDefault();
    removeTask(taskId);
  }
  const handleToggleChecked = (taskId, e) => {
    e.preventDefault();
    console.debug('handleToggleChecked(): e.target.value = ', e.target.value);
    console.debug('  set to ', e.target.value === 'on');
    toggleChecked(taskId, e.target.value === 'on');
  }
  const {_id, text, checked} = props.task;

  console.debug('Task Component: checked = ', checked);

  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={handleToggleChecked.bind(this, _id)}
      />

      {text}

      <Button bsStyle="danger" style={{float: "right"}}
        onClick={handleRemoveTask.bind(this, _id)}> Remove Task </Button>
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task
