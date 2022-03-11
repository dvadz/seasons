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

    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        console.log("ERROR", err);
      }
    );
  }

  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
