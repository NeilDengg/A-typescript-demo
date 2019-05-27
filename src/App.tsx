import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import Timer from './Component/Timer/';
import RecordList from './Component/RecordList';
import MyList from './Component/MyList';
const App: React.FC = () => {
  return (
    <Switch>
      <Route path = '/' exact component={Timer} />
      <Route path = '/MyList' component={MyList} />
    </Switch>
  );
}

export default App;
