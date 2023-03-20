import { PureComponent } from "react";
import img from "./error.gif";
import "./errorMessage.scss";

class ErrorMessage extends PureComponent {
  render() {
    return <img className="error" alt="error" src={img} />;
  }
}

export default ErrorMessage;
