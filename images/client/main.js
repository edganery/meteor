// Any Js in here is automatically ran for us

// Import the React library
import React, {component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';


// Create a component
class App extends component {
 componentWillMount(){
   console.log ('bug sobre o render fazendo o crash');
 }

 render() {
  return (
   <div>
    <ImageList />
   </div>
  );
 }
};

// render tis component to the screen
Meteor.startup(() => {
  ReactDOM.render (<App />, document.querySelector ('.container'));
  axios.get('https://api.imgur.com/3/gallery/hot/viral/0', {
    headers: {
      Authorization: 'Bearer e85fa4b2470d724ce19af392bf3bd34fdef8a781'
    }
  }).then(response => console.log(response));
});
