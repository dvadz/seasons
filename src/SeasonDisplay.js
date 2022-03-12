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
  console.log(getSeason(props.lat, new Date().getMonth()));

  return <div>Season Display</div>;
};

export default SeasonDisplay;

// Simplified Season Calendar

// Northern Hemisphere: Positive Latitude
// Winter: Jan, Feb, Mar, Oct, Nov, Dec
// Summer: Apr, May, Jun, Jul, Aug, Sep

// Southern Hemisphere: Negative Latitude
// Winter: Apr, May, Jun, Jul, Aug, Sep
// Summer: Jan, Feb, Mar, Oct, Nov, Dec
