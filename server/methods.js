import { Meteor } from 'meteor/meteor';
import { Todos } from '../imports/lib/collection';

export default function () {
  Meteor.methods({
    'addTask': (task) => {
      Todos.insert(task)
    }
  })
  Meteor.methods({
    'removeTask': (taskId) => {
      Todos.remove({_id: taskId})
    }
  })
  Meteor.methods({
    'setChecked': (taskId, checked) => {
      // const todo = Todos.findOne(taskId);
      // console.debug('Meteor method setChecked: todo = ', todo);
      Todos.update(taskId, { $set: { checked: checked } });
    }
  })
}
