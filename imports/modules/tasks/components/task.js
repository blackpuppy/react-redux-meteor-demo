import React, { Component, PropTypes } from 'react';
import {
  Button,
  Checkbox,
  ListGroupItem
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
  const {_id, text, checked, priority} = props.task;

  let priorityStyle = '';
  switch (priority) {
  case '5':
    priorityStyle = 'danger';
    break;
  case '3':
  default:
    priorityStyle = 'success';
    break;
  case '1':
    priorityStyle = 'info';
    break;
  }

  // console.debug('Task Component: priority = ', priority, ', priorityStyle = ', priorityStyle);

  return (
    <ListGroupItem bsStyle={priorityStyle}>
      <Checkbox inline
        checked={checked}
        onChange={handleToggleChecked.bind(this, _id, checked)}>
        {text}
      </Checkbox>

      <Button bsStyle="danger" style={{float: "right"}}
        onClick={handleRemoveTask.bind(this, _id)}> Remove Task </Button>
    </ListGroupItem>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task
