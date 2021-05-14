import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DND from './Dnd';
import VertAndHori from './vertandhori';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.scss';

const Index = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact render={props => (<App />)}/>
        <Route path="/example1" exact render={props => (<DND />)}/>
        <Route path="/example2" exact render={props => (<VertAndHori />)}/>
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);