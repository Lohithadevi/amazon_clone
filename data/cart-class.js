import{verifyDeliveryOptionId} from'../data/deliveryOptions.js'
export class Cart
{
  cartItems;
  #localStorageKey;

  constructor(localstoragekey)
  {
    this.#localStorageKey=localstoragekey;
    this.#loadFromStorage();
  }
  #loadFromStorage(){
    this.cartItems=JSON.parse(localStorage.getItem(this.#localStorageKey));
  if(!this.cartItems)
  {this.cartItems=
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
  };
  saveToStorage(){
    localStorage.setItem(this.#localStorageKey,JSON.stringify(this.cartItems));
  };
  addToCart(productId){
    let matchingItem;
    if(this.cartItems)
    {
      this.cartItems.forEach((cartItem)=>{
        if(productId===cartItem.productId)
          matchingItem=cartItem;
    })
  };
  if(matchingItem)
  {
    matchingItem.quantity+=1;
  }
  else
  {
    this.cartItems.push(
        {
        productId:productId,
        quantity:1 ,
        deliveryOptionId:'1'
        }
      );
      
  }
  this.saveToStorage();
  };
  removeFromCart(productId){
    const newcart=[];
    this.cartItems.forEach((cartItem)=>
    {
      if(cartItem.productId!==productId)
        newcart.push(cartItem);
    })
    this.cartItems=newcart;
    saveToStorage();
  };
  calculateCartQunatity(){
    let cartQuantity=0;
    this.cartItems.forEach((cartItem)=>{
      cartQuantity+=cartItem.quantity;
    });
    return cartQuantity;
  };
  updateQuantity(productId,newQunatity){
    let matchingItem;
    this.cartItems.forEach((cartItem)=>
          {
            if(productId===cartItem.productId)
            {
              matchingItem=cartItem;
            }
          });
          matchingItem.quantity=newQunatity;
          saveToStorage();
  };
  updateDeliveryOption(ProductId,deliveryOptionId){
  
    if(!(verifyDeliveryOptionId(deliveryOptionId)))
      return;
    
   
    let matchingItem;
    this.cartItems.forEach((cartItem)=>{
      if(ProductId===cartItem.productId)
        matchingItem=cartItem;
    });
    if(!matchingItem)
      return;
    
      matchingItem.deliveryOptionId=deliveryOptionId;
    
      saveToStorage();
    
   
    };
}


let cart=new Cart('cart-oop');
let bussiness =new Cart('buss-oop');







