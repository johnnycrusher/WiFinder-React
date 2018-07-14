import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "react-redux";

import registerServiceWorker from "./registerServiceWorker";
import reducers from "./reducers";
import Header from "./components/Header";
import AdvanceSearch from "./components/AdvanceSearch";
import ResultShow from "./components/ResultsShow";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import IndivdualResults from "./components/IndivdualResults";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Header /> */}
          <Route path="/results/:post" component={ResultShow} />
          <Route path="/location/:id" component={IndivdualResults} />
          <Route path="/login/" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/" component={AdvanceSearch} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
