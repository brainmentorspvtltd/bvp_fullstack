// App is a Component
// Top Level Component
import React from 'react';
import Search from './containers/Search';
 export function App(props){
  return (
    <div className="container">
      <Search title='Image Search App' name='Amit'/>
    </div>
  )
}
//export default App;
export const x = 100;