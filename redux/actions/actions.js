//1.Add to Card
export const addToCart = (data) => ({
  type: "ADD_TO_CART",
  payload: data,
});

//2.Remove From Cart
export const removeFromCart = (id) => ({
  type: "REMOVE_FROM_CART",
  payload: id,
});
