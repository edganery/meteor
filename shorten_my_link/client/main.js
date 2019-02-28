import React from 'react';
import ReactDOM from 'react-dom';
// import componets and meteor methods here
import Haeder from './components/haeder';
import LinkCreate from './components/link_create';
import {Links} from '../imports/collections/links'

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
