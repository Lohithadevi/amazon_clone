import {renderCheckoutHeader} from './checkout/checkoutHeader.js'
import {renderOrderSummary} from './checkout/orderSummary.js'
import {renderPaymentSummary} from './checkout/paymentSummary.js'

import {Cart} from'../data/cart-class.js'
// import '../data/backendPract.js'
import {loadProductFetch} from '../data/products.js'
import {loadCart} from '../data/cart.js'

Promise.all(
  [

  loadProductFetch(),
  new Promise((resolve)=>
  {
    loadCart(()=>
    {resolve();});
  })
  ]).then(()=>
  {
    renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
  })




