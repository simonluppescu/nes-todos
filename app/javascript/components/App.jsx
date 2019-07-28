import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

import MainNav from "./MainNav";
import MainContentContainer from "../containers/MainContentContainer";

const store = createStore(
  rootReducer,
  { todoLists: {} },
  composeWithDevTools()
);

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <MainNav />
        <MainContentContainer />
      </React.Fragment>
    </Provider>
  );
};

export default App;
