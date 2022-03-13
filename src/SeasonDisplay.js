import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr it's so cold",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    if (lat > 0) {
      return "summer";
    } else return "winter";
  } else {
    if (lat > 0) {
      return "winter";
    } else return "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1 className='text-center'>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
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
