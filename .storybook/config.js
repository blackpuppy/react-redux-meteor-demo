import { configure } from '@kadira/storybook';

function loadStories() {
  require('../imports/modules/tasks/stories/task');
  // require as many stories as you need.
}

configure(loadStories, module);
