import { productReducer } from "@/reducer/product";
import { combineReducers,legacy_createStore as createStore } from "redux";


const rootReducer = combineReducers({
    products: productReducer
})
const store = createStore(rootReducer);

export default store