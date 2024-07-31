import { createSlice } from "@reduxjs/toolkit";
export interface Product {
  id: number;
  title: string;
  isNew: boolean;
  oldPrice: string; // Assuming oldPrice can also be a string
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  quantity: number;
}
export interface StoreData {
  productData: Product[];
  userInfo: null | string;
  orderData: [];
}
const initialState: StoreData = {
  productData: [],
  userInfo: null,
  orderData: [],
};
export const shoppingslice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const existing = state.productData.find((item: Product) => {
        return item.id === action.payload.id;
      });
      if (existing) existing.quantity += action.payload.quantity;
      else {
        state.productData.push(action.payload);
      }
    },  
    increaseQuantity: (state, action) => {
        const existing = state.productData.find((item: Product) => {
          return item.id === action.payload.id;
        });
        if (existing) {
          existing.quantity++;
        }
      },
      decreaseQuantity: (state, action) => {
        const existing = state.productData.find((item: Product) => {
          return item.id === action.payload.id;
        });
        if (existing && existing.quantity > 1) {
          existing.quantity--;
        }
      },
    ResetProduct: (state) => {
      state.productData = [];
    },
    DeleteProduct: (state,action) => {
        const existing = state.productData.filter((item: Product) => {
            return item.id !== action.payload.id;
          });
          state.productData=existing
    },
  },
});
export const { addtocart, increaseQuantity, decreaseQuantity, DeleteProduct,ResetProduct } =
  shoppingslice.actions;
export default shoppingslice.reducer;
