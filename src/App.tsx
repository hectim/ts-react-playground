import * as React from "react";

import * as protoTypes from "./namespace";

class App extends React.Component {
  public render() {

    const ABCollider = new protoTypes.A_B.Collider();
    ABCollider.setName("a/b");
    console.log("test package A.B: ", ABCollider);

    const CDCollider = new protoTypes.C_D.Collider();
    CDCollider.setName("c/d");
    console.log("test package C.D: ", CDCollider);

    return (
      <h3>check the console</h3>
    );
  }
}

export default App;
