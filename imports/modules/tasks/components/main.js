import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import {
  Button,
  ButtonToolbar,
  FormGroup,
  InputGroup,
  FormControl
} from 'react-bootstrap';
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
      priority.value = 'normal';
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
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>
              <select ref="priortyInput">
                <option value="high">High</option>
                <option value="normal" selected>Normal</option>
                <option value="low">Low</option>
              </select>
            </InputGroup.Addon>
            <FormControl type="text" ref="taskInput"/>
            <InputGroup.Button>
              <Button bsStyle="info" onClick={handleAddTask.bind(this)}> Add Task </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        <ul>
          {renderTasks()}
        </ul>
      </div>
    );
  }
}

export default App
