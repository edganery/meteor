// Any Js in here is automatically ran for us

// Import the React library
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';

// Create a component
const App = () => {
 return (
   <div>
    <ImageList />
   </div>
 );
};


// render tis component to the screen
Meteor.startup(() => {
ReactDOM.render (<App />, document.querySelector ('.container'));
axios.get(https://www.flickr.com/services/api/tos/)
	.then(response => console.log(response));
});
