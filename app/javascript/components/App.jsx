import React from "react";

import MainNav from "./MainNav";
import MainContent from "./MainContent";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainNav />
        <MainContent />
      </React.Fragment>
    );
  }
}

export default App;
