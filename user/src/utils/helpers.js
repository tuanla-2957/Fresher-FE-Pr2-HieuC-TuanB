export const getDataFromLocalStorage = (key, initial = {}) => {
  return JSON.parse(localStorage.getItem(key)) || initial;
};

export const totalPrice = (items) => {
  return items.reduce((total, item) => {
    return total + item.product.discountPrice * item.quantity;
  }, 0);
};

export const totalItemsInCart = (carts) => {
  return carts.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
};
