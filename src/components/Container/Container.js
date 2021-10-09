import React from "react";

export default function Container(props) {
  return(
  <div className='container-fluid'>
    {props.children}
  </div>
  );
};
