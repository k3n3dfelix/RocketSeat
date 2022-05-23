import { Reducer } from "redux";
import produce from 'immer';
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
    items: [] 
}
const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
    return produce(state, draft => {
        switch(action.type){
            case 'ADD_PRODUCT_TO_CART': {
                const {product} = action.payload;

                //Forma sem biblioteca
                // return { 
                //     ...state,
                //     items:[
                //         ...state.items,
                //         {
                //             product,
                //             quantity: 1,
                //         }
                //     ]
                // };

                //Forma com immer
            
                draft.items.push({
                    product,
                    quantity:1,
                });
                break;
            
            }default:{
                return draft;
            }
        }
    });
}


export default cart;