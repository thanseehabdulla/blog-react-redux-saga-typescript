import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../../rootReducer";
import rootSagas from "../../rootSagas";
import App from "../App";
import { userTypes } from "../../Entities";

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(routerMiddleware(history), sagaMiddleware);

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(combineReducers({
  router: connectRouter(history),
  ...rootReducer,
}), composeEnhancers(middleware));

sagaMiddleware.run(rootSagas);

it("renders without crashing", () => {
  const user: userTypes.IUser = {
    _id: "5bcc554259e0dbfda6ed1a55",
    name: "string",
    email: "string",
  };
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App
        classes={{}}
        history={history}
        currentUser={user}
        onLogoClick={jest.fn()}
        onLoginClick={jest.fn()}
        onLogoutClick={jest.fn()}
        onRegisterClick={jest.fn()}
      />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
