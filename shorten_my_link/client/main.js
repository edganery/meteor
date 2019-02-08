import React from 'react';
import ReactDOM from 'react-dom';

import Haeder from './components/haeder';

const App = () => {
  return (
    <div>
      <Haeder />
    </div>
  );
};

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.render-target'));
});
