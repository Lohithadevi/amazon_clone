import {renderCheckoutHeader} from './checkout/checkoutHeader.js'
import {renderOrderSummary} from './checkout/orderSummary.js'
import {renderPaymentSummary} from './checkout/paymentSummary.js'

import {Cart} from'../data/cart-class.js'
// import '../data/backendPract.js'
import {loadProductFetch} from '../data/products.js'
import {loadCart, loadCartFetch} from '../data/cart.js'

async function loadPage()
{
  try{

    
    Promise.all([loadProductFetch(),loadCartFetch()]);

  await new Promise((resolve)=>
      {
        loadCart(()=>
        {resolve();});
      });
      
  }catch(error)
  {
    console.log("error raised");
    console.log(error);
  }
  
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();

}
loadPage();

// Promise.all(
//   [

//   loadProductFetch(),
//   new Promise((resolve)=>
//   {
//     loadCart(()=>
//     {resolve();});
//   })
//   ]).then(()=>
//   {
//     renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymentSummary();
//   })




