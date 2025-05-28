import {renderOrderSummary} from '../../scripts/checkout/orderSummary.js'
import {cart,loadFromStorage} from '../../data/cart.js'
import { loadProductFetch } from '../../data/products.js';

describe('test suite : renderordersummary',()=>
{
  
  beforeAll(async()=>
  {
    await loadProductFetch();
  });
  let productId2='15b6fc6f-327a-4ec4-896f-486349e85a3d';
  let productId1='e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  beforeEach(()=>
  {
    spyOn(localStorage,'setItem');
      document.querySelector('.test-container').innerHTML=`
    <div class="inner-cont-test">
      <div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>
      <div class="checkout-header"></div>
    </div>`;
    spyOn(localStorage,'getItem').and.callFake(()=>
      {
        return JSON.stringify([
          
            {
              productId:productId1,
              quantity:2,
              deliveryOptionId:'1'
            }
            ,
            {
              productId:productId2,
              quantity:1,
              deliveryOptionId:'2'
            }
          ]
        );
      });
      loadFromStorage();
    renderOrderSummary();
  
  });

  afterEach(()=>
  {
    document.querySelector('.test-container').innerHTML="";
  });



  it('displays the cart',()=>
  {
    expect(
      document.querySelector(`.js-product-name-${productId1}`).innerText).toEqual("Black and Gray Athletic Cotton Socks - 6 Pairs");

      expect(
        document.querySelector(`.js-product-name-${productId2}`).innerText).toEqual("Intermediate Size Basketball");
    
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(2);
    
    expect(
      document.querySelector(`.js-product-quantity-${productId1}`).innerText).toContain('Quantity: 2')
    expect(
      document.querySelector(`.js-product-quantity-${productId2}`).innerText).toContain('Quantity: 1');

      expect(document.querySelector(`.js-product-price-${productId2}`).innerText).toEqual('$20.95');
      expect(document.querySelector(`.js-product-price-${productId1}`).innerText).toEqual('$10.90');
      
  });

  it('remove from cart',()=>
    {
      document.querySelector(`.js-delete-link-${productId1}`).click();

      expect(
        document.querySelector(`.js-product-name-${productId2}`).innerText).toEqual("Intermediate Size Basketball");

      expect(
        document.querySelectorAll('.js-cart-item-container').length
      ).toEqual(1);
      expect(document.querySelector(`.js-cart-item-container-${productId1}`)).toEqual(null);
      expect(document.querySelector(`.js-cart-item-container-${productId2}`)).not.toEqual(null);
      expect(cart.length).toEqual(1);
      expect(cart[0].productId).toEqual('15b6fc6f-327a-4ec4-896f-486349e85a3d');
      expect(document.querySelector(`.js-product-price-${productId2}`).innerText).toEqual('$20.95');
    });

    it('update the delivery option',()=>
    {
      document.querySelector(`.js-delivery-option-input-${productId1}-3`).click();
      expect(document.querySelector(`.js-delivery-option-input-${productId1}-3`).checked).toEqual(true);
      expect(cart.length).toEqual(2);
      expect(cart[0].productId).toEqual(productId1);
      expect(cart[0].deliveryOptionId).toEqual('3');

      expect(document.querySelector('.js-payment-summary-shipping').innerText).toEqual('$14.98');
      expect(document.querySelector('.js-payment-summary-total').innerText).toEqual('$57.73');
    });
});



