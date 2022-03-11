import React from "react";
import ReactDOM from "react-dom";

// Function Based Component
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log("SUCCESS", position);
//     },
//     (err) => {
//       console.log("ERROR", err);
//     }
//   );
//   return (
//     <div>
//      Latitude:
//     </div>
//   );
// };

// Class Based Component version of the App
class App extends React.Component {
  constructor(props) {
    super(props);

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("SUCCESS", position);
      },
      (err) => {
        console.log("ERROR", err);
      }
    );
  }

  render() {
    return <div>Latitude:</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
