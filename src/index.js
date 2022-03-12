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
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    if (this.state && this.state.errorMessage) {
      return (
        <div>
          Latitude: {this.state.lat}
          <br />
          Error: {this.state.errorMessage}
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
