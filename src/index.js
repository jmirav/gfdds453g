import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router'
import {App, Page1, Page2, NotFound} from './App';
import './index.css';


// Implementa las rutas aca
class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRedirect to="page1" />
            <Route path="page1" component={Page1} />
            <Route path="page2" component={Page2} />
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <Routes />, // Es posible que tengas que hacer un cambio en esta linea.
  document.getElementById('root')
);
