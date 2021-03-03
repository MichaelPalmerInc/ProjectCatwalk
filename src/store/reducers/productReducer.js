var productReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCT':
      return action.currentProduct || null;
    default:
      return state;
  }
};

export default productReducer;
