export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };

export const removeItemToCart=(cartItems,cartItemToRemove)=>{
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem) {

    if(existingCartItem.quantity===1){
      return cartItems.filter(cartItem=>{
        return cartItem.id !== existingCartItem.id 
      })
    }
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return [...cartItems];

} 

export const deleteItemToCart=(cartItems,cartItemToDelete)=>{
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToDelete.id
  );

  if (existingCartItem) {
      return cartItems.filter(cartItem=>{
        return cartItem.id !== existingCartItem.id 
      })
    }
  return [...cartItems];
} 