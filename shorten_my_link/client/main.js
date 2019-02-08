import React from 'react';
import ReactDOM from 'react-dom';

import Haeder from './components/haeder';
import LinkCreate from './components/link_create';

const App = () => {
  return (
    <div>
      <Haeder />
      <LinkCreate />
    </div>
  );
};

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.render-target'));
});
