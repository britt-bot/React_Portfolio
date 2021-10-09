import React from "react";
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
// import "./App.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


export default function Skills() {
  return (
    <>
      <MDBProgress height="40">
        <MDBProgressBar bgColor='success' striped animated width='95' valuemin={0} valuemax={100}>
        HTML
        </MDBProgressBar>
      </MDBProgress>

      <br />

      <MDBProgress height="40">
        <MDBProgressBar bgColor='info' striped animated width='90' valuemin={0} valuemax={100}>
        CSS
        </MDBProgressBar>
      </MDBProgress>

      <br />

      <MDBProgress height="40">
        <MDBProgressBar bgColor='warning' striped animated width='85' valuemin={0} valuemax={100}>
        React
        </MDBProgressBar>
      </MDBProgress>
      
      <br />

      <MDBProgress height="40">
        <MDBProgressBar bgColor='danger' striped animated width='80' valuemin={0} valuemax={100}>
        JavaScript
        </MDBProgressBar>
      </MDBProgress>
            
      <br />

      <MDBProgress height="40">
        <MDBProgressBar bgColor='info' striped animated width='90' valuemin={0} valuemax={100}>
        Graphic Design
        </MDBProgressBar>
      </MDBProgress>
            
      <br />

      <MDBProgress height="40">
        <MDBProgressBar bgColor='warning' striped animated width='85' valuemin={0} valuemax={100}>
        Photography
        </MDBProgressBar>
      </MDBProgress>
    </>
  );
}
