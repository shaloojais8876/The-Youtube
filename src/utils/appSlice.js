import { createSlice } from "@reduxjs/toolkit"
//1st thing create a slice
const appSlice = createSlice({
           name: "app",
           initialState: {
              isMenuOpen : true,
           },
           reducers: {
              toggleMenu:(state) => {
                 state.isMenuOpen = !state.isMenuOpen;
              },
              closeMenu: (state) => {
               state.isMenuOpen = false;
              },
           },
});

export const { toggleMenu, closeMenu } = appSlice.actions;

export default appSlice.reducer;