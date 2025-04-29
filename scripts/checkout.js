import {renderCheckoutHeader} from './checkout/checkoutHeader.js'
import {renderOrderSummary} from './checkout/orderSummary.js'
import {renderPaymentSummary} from './checkout/paymentSummary.js'

import {Cart} from'../data/cart-class.js'
// import '../data/backendPract.js'
import {loadProducts} from '../data/products.js'
 loadProducts(()=>
{renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();

});

