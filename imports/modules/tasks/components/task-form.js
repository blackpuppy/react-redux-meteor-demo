import React, { Component, PropTypes } from 'react';
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

    const {
      task,
      taskForm,
      textChanged,
      priorityChanged,
      resetTaskForm,
      addTask
    } = this.props;

    // console.debug('  task = ', task);
    // console.debug('  resetTaskForm = ', resetTaskForm);

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
      resetTaskForm();
      // text.value = '';
      // textChanged('');
      // priority.value = 'normal';

      console.debug('  after resetTask(): this.props.task = ', this.props.task);
    }

    // problem with custom component: lose focus every time onChange is triggered
    // const BSField = createFieldClass({
    //   'FormControl': controls.text
    // }, {
    //   componentMap: {
    //     FormControl: FormControl
    //   }
    // });
    /*
            <BSField model="task.text"
                validators={{
                  required: (val) => val && val.length,
                  minLengh: (val) => val.length >= 5
                }}
                validateOn="blur">
              <FormControl type="text" ref="textInput" onChange={handleTextChanged} />
              <FormControl.Feedback />
            </BSField>

            validationState={taskForm.fields.text.valid ? "success" : "error"}
    */

    return (
      <Form model="task" onSubmit={handleAddTask}>
        <FormGroup controlId="newTaskForm"
            validationState={taskForm.fields.text.valid ? "success" : "error"}>
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
            <Field model="task.text"
                validators={{
                  required: (val) => val && val.length,
                  minLengh: (val) => val.length >= 5
                }}
                validateOn="change">
              <input type="text" className="form-control" ref="textInput"
                placeholder="task description"
                onChange={handleTextChanged} />
            </Field>
            <InputGroup.Button>
              <Button type="submit" bsStyle="info"
                disabled={!taskForm.fields.text.valid}>Add Task</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}

TaskForm.propTypes = {
  task: PropTypes.object.isRequired,
  taskForm: PropTypes.object.isRequired
};

export default TaskForm
