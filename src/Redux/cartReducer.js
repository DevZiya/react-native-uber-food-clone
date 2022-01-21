import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    selectedItems: {
      items: [],
      restaurantName: '',
    },
  },
  reducers: {
    addToCart: (state, action) => {
      let newState = { ...state };

      if (action.payload.checkboxValue) {

        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.food.title !== action.payload.food.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
      return newState;
    },
  },
});
export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;
