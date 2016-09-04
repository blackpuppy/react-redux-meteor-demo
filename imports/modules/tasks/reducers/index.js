import {
  modelReducer,
  formReducer
} from 'react-redux-form';
import initialState from '../reducers/initialState';
import Tasks from './main';

const initialTaskState = initialState.task;

export default {
  task: modelReducer('task', initialTaskState),
  taskForm: formReducer('task', initialTaskState),
  Tasks
}
