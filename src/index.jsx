import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DND from './Dnd';
import Grid from './grid';
import VertAndHori from './vertandhori';
import ResponsiveLocalStorageLayout from './responsive-grid';
import RGLDeleteAdd from './rgl';
import ToolboxLayout from './toolbox';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Index = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact render={props => (<App />)}/>
        <Route path="/example1" exact render={props => (<DND />)}/>
        <Route path="/example2" exact render={props => (<VertAndHori />)}/>
        <Route path="/grid" exact render={props => (<Grid />)}/>
        <Route path="/responsiveGrid" exact render={props => (<ResponsiveLocalStorageLayout />)}/>
        <Route path="/remove_add" exact render={props => (<RGLDeleteAdd />)}/>
        <Route path="/toolbox" exact render={props => (<ToolboxLayout />)}/>
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