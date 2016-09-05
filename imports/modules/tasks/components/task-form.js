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
import {
  Field,
  Form,
  actions,
  createFieldClass,
  controls
} from 'react-redux-form';
import initialState from '../reducers/initialState';

const TaskForm = class extends Component {
  render() {
    // console.debug('TaskForm.render():');

    const { task, textChanged, priorityChanged, resetTask, addTask } = this.props

    // console.debug('  task = ', task);

    const handleTextChanged = (e) => {
      // console.debug('handleTextChanged(): e.target.value = ', e.target.value);
      textChanged(e.target.value);
    }

    const handlePriorityChanged = (e) => {
      // console.debug('handlePriorityChanged(): e.target.value = ', e.target.value);
      priorityChanged(e.target.value);
    }

    const handleAddTask = (task) => {
      console.debug('TaskForm.handleAddTask(): task = ', task);
      // e.preventDefault();

      const initialTaskState = initialState.task;

      // Have to use findDOMNode with react-bootstrap
      const text = findDOMNode(this.refs.textInput);
      // const priority = findDOMNode(this.refs.priortyInput);

      addTask(task);

      // reset form
      resetTask();

      text.value = '';
      textChanged('');

      console.debug('  after resetTask(): task = ', task);
      console.debug('  this.props.task = ', this.props.task);
      // priority.value = 'normal';
    }

    // problem with custom component: lose focus every time onChange is triggered
    // const BSField = createFieldClass({
    //   'FormControl': controls.text
    // }, {
    //   componentMap: {
    //     FormControl: FormControl
    //   }
    // });

            //<BSField model="task.text">
            //  <FormControl componentClass="input" type="text" ref="textInput"
            //   onChange={handleTextChanged} />
            //</BSField>

    return (
      <Form model="task" onSubmit={handleAddTask}>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>
              <Field model="task.priority">
                <select ref="priortyInput" onChange={handlePriorityChanged}>
                  <option value="5">High</option>
                  <option value="3">Normal</option>
                  <option value="1">Low</option>
                </select>
              </Field>
            </InputGroup.Addon>
            <Field model="task.text">
              <input type="text" className="form-control" ref="textInput"
                onChange={handleTextChanged} />
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
