import { PureComponent } from "react";
import "./checkout.scss";

class Checkout extends PureComponent {
  render() {
    return (
      <div className="checkout" onClick={this.props.closeCheckoutModal}>
        <div className="checkout__content">
          <div className="checkout__header">
            Thank you for trying out the demo of this marketplace.
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
