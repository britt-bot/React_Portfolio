import React from "react";

export default function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className={size}>{props.children}</div>;
};
