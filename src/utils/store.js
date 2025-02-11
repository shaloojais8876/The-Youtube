import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
//2nd thing have to add our reducer appSlice to our store
const store = configureStore({
    reducer:{
        //Here we added our appSlice to our store
        app: appSlice,
        search: searchSlice,
        chat : chatSlice,
    },
});

export default store;
