import React from 'react';
import Postlist from './Postlist';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/"  component={Postlist} />
      
      </Router>
    </div>
  );
}

// function postlist({ match }) {
//   return (
//     <div>
//          <Route path={`${match.path}/:id`} component={} />
//     </div>
//   );
// }

export default App;
