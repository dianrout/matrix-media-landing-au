import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ICart {
  listCart: any
  listTags: any
  listCategory: any
}

const initialState: ICart = {
  listCart: [],
  listTags: [],
  listCategory: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initCart: (state, action) => {
      state.listCart = action.payload
    },
    setCart: (state, action) => {
      localStorage.setItem("cart", JSON.stringify(action.payload))
      state.listCart = action.payload
    },

    setTags: (state, action) => {
      state.listTags = action.payload
    },

    setCategory: (state, action) => {
      state.listCategory = action.payload
    }
  }
})

export const { setCart, initCart, setTags, setCategory } = cartSlice.actions

export default cartSlice.reducer
