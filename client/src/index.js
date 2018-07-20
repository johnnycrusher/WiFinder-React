import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import registerServiceWorker from "./registerServiceWorker";
import reducers from "./reducers";
import AdvanceSearch from "./components/AdvanceSearch";
import ResultShow from "./components/ResultsShow";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import IndivdualResults from "./components/IndivdualResults";

const store = createStore(
  reducers /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(promise)
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/results" component={ResultShow} />
          <Route path="/location/:id" component={IndivdualResults} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/" component={AdvanceSearch} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
