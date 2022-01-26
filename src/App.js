import { useState } from "react";
import { evaluate } from "mathjs";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import './index.css';

const App = () => {
  const buttons = [
    "c",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "/",
    "=",
  ];
  const [display, setDisplay] = useState("0");

  const handler = (button) => {
    if (button === "=") {
      setDisplay(evaluate(display));
    } else if (button === "c") {
      setDisplay("0");
    } else {
      setDisplay(display + button);
    }


  };
  return (
    <div className="modal-dialog border border-warning">

      <h1 className="display-2 text-center text-warning ">{display}</h1>
      <div className="container">
          <div className="row">
            {buttons.slice(0,1).map((button, index) => {
                return <Button handler={handler} key={index} button={button} extraClass="col-12"  />;
            })}
          </div>

          <div className="row">
            {buttons.slice(1,5).map((button, index) => {
                return <Button handler={handler} key={index} button={button} extraClass="col-3"/>;
            })}
          </div>
          
          <div className="row">
            {buttons.slice(5,9).map((button, index) => {
                return <Button handler={handler} key={index} button={button} extraClass="col-3" />;
            })}
          </div>

          <div className="row">
            {buttons.slice(9,13).map((button, index) => {
                return <Button handler={handler} key={index} button={button} extraClass="col-3" />;
            })}
          </div>

          <div className="row">
            {buttons.slice(13,17).map((button, index) => {
                return <Button handler={handler} key={index} button={button} extraClass="col-3" />;
            })}
          </div>
      </div>
    </div>
  );
};

const Button = (props) => {
  return (
      <div className={"d-grid " + props.extraClass}>
          <button className="btn btn-outline-warning btn-lg" onClick={() => props.handler(props.button)}>{props.button}</button>
      </div>
  );
};
export default App;
