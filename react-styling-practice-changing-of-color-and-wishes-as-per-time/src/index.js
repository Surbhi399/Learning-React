//Create a React app from scratch.

import React from "react";
import ReactDom from "react-dom";
const time = new Date().getHours();
console.log(time);
const CustomStyle = {
  color: "red",
};

if (time < 12) {
  ReactDom.render(
    <h1 className="heading" style={CustomStyle}>
      Good Morning
    </h1>,
    document.getElementById("root")
  );
} else if (time >= 12 && time < 18) {
  CustomStyle.color = "Green";
  ReactDom.render(
    <h1 className="heading" style={CustomStyle}>
      Good Afternoon
    </h1>,
    document.getElementById("root")
  );
} else {
  CustomStyle.color = "blue";
  ReactDom.render(
    <h1 className="heading" style={CustomStyle}>
      Good Evening
    </h1>,
    document.getElementById("root")
  );
}
