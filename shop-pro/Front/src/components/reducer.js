export const initialState = {
    basket: [],
};

//selector

export const getBasketTotal=(basket)=>{
    return (basket?.reduce((amount,item)=> item.price+amount,0));
}

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
            state.basket.map((item)=>{
                console.log('enterrrr');
                if(item.title===action.title){
                    console.log("this item is in the busket");
                    item.amount++;
                    return{
                        ...state,
                        basket: [...state.basket],
                    }
                }
            })
            return {
                ...state,
                basket: [...state.basket, action.item],
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

        default:
            return state;
    }
}

export default reducer;