import React from 'react';
import {Route, Routes} from 'react-router-dom';
import SingUp from './account/signUp';

const App = () => {
  return (
    <Routes>
      <Route path="/"></Route>
      <Route path="/signUp" Component={SingUp}></Route>
    </Routes>
  );
};
export default App;
