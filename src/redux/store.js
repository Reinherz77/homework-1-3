import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenReducer";

export default configureStore({
    reducer: {
        token: tokenReducer
    }
}); 