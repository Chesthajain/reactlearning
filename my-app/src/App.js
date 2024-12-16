//jsx

import React from 'react';

//element

const element = React.createElement(
  'div',
  {id:'login-btn'},
  'Login'
)

class App extends React.Component {
  render() {
      return (
        <>
          <div>
              <h1>{'Welcome to react world'}</h1>
              {element}
          </div>
          
          </>
      );
  }
  
}



export default App;
