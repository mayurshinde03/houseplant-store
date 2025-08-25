import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const initialState = { cart: {} };

function cartReducer(state, action) {
  switch(action.type) {
    case "ADD_TO_CART":
      const plant = action.payload.plant;
      if (state.cart[plant.id]) return state;
      return {...state, cart: {...state.cart, [plant.id]: {...plant, quantity: 1}}};
    case "INCREASE_QUANTITY":
      const incId = action.payload;
      const incPlant = state.cart[incId];
      if(!incPlant) return state;
      return {...state, cart: {...state.cart, [incId]: {...incPlant, quantity: incPlant.quantity + 1}}};
    case "DECREASE_QUANTITY":
      const decId = action.payload;
      const decPlant = state.cart[decId];
      if(!decPlant) return state;
      if(decPlant.quantity === 1) {
        const newCart = {...state.cart};
        delete newCart[decId];
        return {...state, cart: newCart};
      }
      return {...state, cart: {...state.cart, [decId]: {...decPlant, quantity: decPlant.quantity - 1}}};
    case "REMOVE_FROM_CART":
      const remId = action.payload;
      const newCartAfterRem = {...state.cart};
      delete newCartAfterRem[remId];
      return {...state, cart: newCartAfterRem};
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (plant) => dispatch({ type: "ADD_TO_CART", payload: { plant } });
  const increaseQty = (id) => dispatch({ type: "INCREASE_QUANTITY", payload: id });
  const decreaseQty = (id) => dispatch({ type: "DECREASE_QUANTITY", payload: id });
  const removeFromCart = (id) => dispatch({ type: "REMOVE_FROM_CART", payload: id });

  const totalItems = Object.values(state.cart).reduce((sum, p) => sum + p.quantity, 0);
  const totalCost = Object.values(state.cart).reduce((sum, p) => sum + p.quantity * p.price, 0);

  return (
    <CartContext.Provider value={{cart: state.cart, addToCart, increaseQty, decreaseQty, removeFromCart, totalItems, totalCost}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
