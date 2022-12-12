import { startTransition } from "react";

export const initialState = {
    basket: [],
};

//selector

export const getBasketTotal=(basket)=>{
    return (basket?.reduce((amount,item)=> (item.price*item.amount)+amount,0));
}

export const getBasketItemAmount=(basket)=>{
    return (basket?.reduce((amount,item)=> (item.amount)+amount,0));
}

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
            const index2 = state.basket.findIndex(
                (basketItem) => basketItem.title === action.title
            );
            console.log("index 2:"+ index2);
            if(index2>=0){
                state.basket[index2].amount++;
                console.log(state.basket[index2].amount + "amount");
                return {
                    ...state,
                    basket: [...state.basket],
                }
            }
            else{
                return {
                    ...state,
                    basket: [...state.basket, action.item],
                }
            }
            
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.title === action.title
            );

            let newBasket = [...state.basket];

            if (index>=0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product(title: ${action.title}) as its not in the basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }

        case "MINUS_ONE_FROM_BASKET":
            const index3 = state.basket.findIndex(
                (basketItem) => basketItem.title === action.title
            );
            if(index3>=0 && state.basket[index3].amount==1) //remove
            {
                let newBasket = [...state.basket];

              
                    newBasket.splice(index3, 1);
                
    
                return {
                    ...state,
                    basket: newBasket
                }
            }

            if(index3>=0 && state.basket[index3].amount>1){
                state.basket[index3].amount--;
                return {
                    ...state,
                    basket: [...state.basket],
                }
            }
            
            else {
                console.warn(
                    `Can't remove product(title: ${action.title}) as its not in the basket!`
                )
            }

        default:
            return state;
    }
}

export default reducer;