import React from "react";
import ReactDOM from "react-dom";
import Person from "./Person/Person";
const name = "Parth";

class App extends React.Component {
  /* defineName = (props) => {
    'What\'s your full name';
  };
  */
  render() {
    return (
      <div>
        <h1>Hello World!!</h1>
        <h2>
          Start editing to see {Math.round(Math.random() * 5)} magic happen{" "}
          {name.toUpperCase()}!
        </h2>
        <h2>{this.defineName}</h2>
        <Person name="Parth" age="26" />
        <Person name="Sagar" age="28">
          cricket
        </Person>
        {/*Only double quotes to be used while passing props */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
