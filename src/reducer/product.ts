import { produce } from "immer";

const iState = {
    products: [],
    error: ""
} as { products: any[]; error: string }
export const productReducer = (state = iState, action: any) => {
    return produce(state, dState => {
        switch (action.type) {
            case "products/listproducts":
                dState.products = action.payload;
                break;
            case"product/addproduct":
                dState.products.push(action.payload);
                break;
            case"product/updateproduct":
            const product = action.payload;
                dState.products = dState.products.map((item:any)=>item.id === product.id ? product:item);
                 break;
                 case "product/deleteproduct":     
                      const id = action.payload;
                      dState.products = dState.products.filter(item => item.id !== id);
                    break; 
           default:
            return state;         
     }
    })
}