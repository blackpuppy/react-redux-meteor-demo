import React, { Component, PropTypes } from 'react';
import {
  Button,
  Checkbox
} from 'react-bootstrap';

const Task = (props) => {
  const { removeTask, toggleChecked } = props
  const handleRemoveTask = (taskId, e) => {
    e.preventDefault();
    removeTask(taskId);
  }
  const handleToggleChecked = (taskId, checked, e) => {
    e.preventDefault();
    toggleChecked(taskId, !checked);
  }
  const {_id, text, checked} = props.task;

  console.debug('Task Component: checked = ', checked);

  return (
    <li>
      <Checkbox inline
        checked={checked}
        onChange={handleToggleChecked.bind(this, _id, checked)}>
        {text}
      </Checkbox>

      <Button bsStyle="danger" style={{float: "right"}}
        onClick={handleRemoveTask.bind(this, _id)}> Remove Task </Button>
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task
