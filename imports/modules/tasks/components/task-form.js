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
import { Field, Form, actions } from 'react-redux-form';

const TaskForm = class extends Component {
  render() {
    const { addTask } = this.props
    const handleAddTask = (task) => {
      console.debug('TaskForm.handleAddTask(): task = ', task);
      // e.preventDefault();

      // Have to use findDOMNode with react-bootstrap
      const text = findDOMNode(this.refs.taskInput);
      // const priority = findDOMNode(this.refs.priortyInput);

      // const task = {
      //   text: text.value,
      //   priority: priority.value
      // };
      addTask(task);

      // reset form
      text.value = null;
      // priority.value = 'normal';
    }

    return (
      <Form model="task" onSubmit={(task) => handleAddTask(task)}>
        <FormGroup>
          <InputGroup>
            <Field model="task.priority">
              <InputGroup.Addon>
                <select ref="priortyInput">
                  <option value="5">High</option>
                  <option value="3" selected>Normal</option>
                  <option value="1">Low</option>
                </select>
              </InputGroup.Addon>
            </Field>
            <Field model="task.text">
              <FormControl type="text" ref="taskInput"/>
            </Field>
            <InputGroup.Button>
              <Button type="submit" bsStyle="info">Add Task</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}

export default TaskForm
