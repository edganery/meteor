// Any Js in here is automatically ran for us

// Import the React library
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';


// Create a component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { images: []};
    // here brah! rem -
  }

 componentWillMount() {
   // THIS IS MAGIC! NOW I HAVE OVERPOWERS!! TO LOAD ALL DATA TOGHETER BULHATCHAKA!
   axios.get('https://api.imgur.com/3/gallery/hot/viral/0', {
     headers: {
       Authorization: 'Bearer e85fa4b2470d724ce19af392bf3bd34fdef8a781'
     }
   }).then(response => this.setState({ images: response.data.data }));
// rem never do this-
// this.state.images = [ {}, {} ];
   console.log ('AQUI EM BAIXO APARECE A MAGIA');
 }

 render() {
   console.log(this.state.images);
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

});
