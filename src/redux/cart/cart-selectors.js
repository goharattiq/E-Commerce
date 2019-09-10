import {createSelector} from 'reselect';

const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    (cart)=>cart.cartItems
);

export const selectCartItemsCount=createSelector(
    [selectCartItems],
    cartItems =>  cartItems.reduce((acum,cartItem)=>{
        return acum+cartItem.quantity
      },0)
)

export const selectCartTotalPrice=createSelector(
    [selectCartItems],
    cartItems =>  cartItems.reduce((acum,cartItem)=>{
        return acum+cartItem.price
      },0)
)

export const selcetCartHidden=createSelector(
    [selectCart],
    (cart)=>cart.hidden
)