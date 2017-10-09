import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import promise from 'redux-promise-bluebird';

import reducers from './reducers';
import UsersIndex from './components/users_index';
import UserNew from './components/user_new';
import UserUpdate from './components/user_update';
import './styles/styles.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/user/new" component={UserNew} />
          <Route path="/user/:id" component={UserUpdate} />
          <Route path="/" component={UsersIndex} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
