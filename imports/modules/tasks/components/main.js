import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import {
  Button,
  ButtonToolbar,
  FormGroup,
  InputGroup,
  FormControl,
  ListGroup
} from 'react-bootstrap';
import TaskForm from '../containers/task-form';
import Task from '../containers/task';

const App = class extends Component {
  render() {
    const { tasks, addTask } = this.props
    const handleAddTask = (e) => {
      e.preventDefault();

      // Have to use findDOMNode with react-bootstrap
      const text = findDOMNode(this.refs.taskInput);
      const priority = findDOMNode(this.refs.priortyInput);
      const task = {
        text: text.value,
        priority: priority.value
      };
      addTask(task);

      // reset form
      text.value = null;
      // priority.value = 'normal';
    }
    const renderTasks = () => {
      return (tasks||[]).map((task) => (
        <Task key={task._id} task={task} />
      ));
    }

    return (
      <div className="container">
        <header>
          <h1>Todo List ({(tasks || []).length})</h1>
        </header>
        <TaskForm />
        <ListGroup>
          {renderTasks()}
        </ListGroup>
      </div>
    );
  }
}

export default App
