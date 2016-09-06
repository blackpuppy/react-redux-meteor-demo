import { configure } from '@kadira/storybook';

function loadStories() {
  require('../imports/modules/tasks/stories/task');
  require('../imports/modules/tasks/stories/task-form');
  // require as many stories as you need.
}

configure(loadStories, module);
