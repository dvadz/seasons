import React from "react";
import ReactDOM from "react-dom";
import SeasonDIsplay from "./SeasonDisplay";

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
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("SUCCESS", position);
      },
      (err) => {
        console.log("ERROR", err);
      }
    );
    return <div>Latitude:</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
