import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    if (lat > 0) {
      return "Summer";
    } else return "Winter";
  } else {
    if (lat > 0) {
      return "Winter";
    } else return "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === "Summer" ? "Let's hit the beach" : "Brrr, it's so cold!";

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;

// Simplified Season Calendar

// Northern Hemisphere: Positive Latitude
// Winter: Jan, Feb, Mar, Oct, Nov, Dec
// Summer: Apr, May, Jun, Jul, Aug, Sep

// Southern Hemisphere: Negative Latitude
// Winter: Apr, May, Jun, Jul, Aug, Sep
// Summer: Jan, Feb, Mar, Oct, Nov, Dec
