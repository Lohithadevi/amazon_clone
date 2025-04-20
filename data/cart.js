export let cart;
loadFromStorage();

export function loadFromStorage()
{
  cart=JSON.parse(localStorage.getItem('cart'));
if(!cart)
{cart=
  [
    {
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity:2,
      deliveryOptionId:'1'
    }
    ,
    {
      productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity:1,
      deliveryOptionId:'2'
    }
  ];

};
}
//local storage
function saveToStorage()
{
  localStorage.setItem('cart',JSON.stringify(cart));
}

//adding to cart
export function addToCart(productId)
{
  let matchingItem;
  cart.forEach((cartItem)=>{
    if(productId===cartItem.productId)
      matchingItem=cartItem;
});
if(matchingItem)
{
  matchingItem.quantity+=1;
}
else
{
    cart.push(
      {
      productId:productId,
      quantity:1 ,
      deliveryOptionId:'1'
      }
    );
    
}
saveToStorage();
}

//removing from the cart
export function removeFromCart(productId)
{
  const newcart=[];
  cart.forEach((cartItem)=>
  {
    if(cartItem.productId!==productId)
      newcart.push(cartItem);
  })
  cart=newcart;
  saveToStorage();
}

//total quantity in the cart
export function calculateCartQunatity()
{
  let cartQuantity=0;
  cart.forEach((cartItem)=>{
    cartQuantity+=cartItem.quantity;
  });
  return cartQuantity;
}

//update the quantity in the cart
export function updateQuantity(productId,newQunatity)
{
  let matchingItem;
  cart.forEach((cartItem)=>
        {
          if(productId===cartItem.productId)
          {
            matchingItem=cartItem;
          }
        });
        matchingItem.quantity=newQunatity;
        saveToStorage();
}

export function updateDeliveryOption(ProductId,deliveryOptionId)
{
  
  let matchingItem;
  cart.forEach((cartItem)=>{
    if(ProductId===cartItem.productId)
      matchingItem=cartItem;
  });
  matchingItem.deliveryOptionId=deliveryOptionId;
  
  saveToStorage();
  };

