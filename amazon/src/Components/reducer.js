export const initialState = {
  basket: [],
  user: null,
  single_product:null
};

//Selector for summing sum the total Money in the basket;

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basktItem) => basktItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Ccant remove product (id :${action.id}) as its not in basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    
      case"SET_SINGLE_PRODUCT":
      return{
        ...state,
        single_product:action.single_product,
      }

    default:
      return state;
  }
};

export default reducer;
