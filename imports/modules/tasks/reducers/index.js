import {
  modelReducer,
  formReducer
} from 'react-redux-form';
import Tasks from './main';

const initialTaskState = {
  text: '',
  priority: '',
  checked: false
};

export default {
  task: modelReducer('task', initialTaskState),
  taskForm: formReducer('task', initialTaskState),
  Tasks
}
