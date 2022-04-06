import { configureStore } from "react-redux";
import tokenReducer from "./tokenreducer";

export default configureStore ({
    reducer: {
        mytoken: tokenReducer
    }
})