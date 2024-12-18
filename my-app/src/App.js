//jsx

import React from 'react';

//element

const element = React.createElement(
  'div',
  {id:'login-btn'},
  'Login'
)
 //component

function Greeting({ message }) {
  return <h1>{`Hello, ${message}`}</h1>
}

const Button = ({ onLogin }) => (
<div id={'login-btn'} onClick={onLogin}>
  Login
  </div>
);

class App extends React.Component {
  render() {
      return (
        <>
          <div>
              <h1>{'Welcome to react world'}</h1>
              {element} {Button}
              <Greeting message = "React learner" />
              <h1>{`Hello, ${this.props.message}`}</h1>
          </div>
          
          </>
      );
  }
  
}


export default App;
