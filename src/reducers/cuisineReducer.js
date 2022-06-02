const initState = {
    africanCuisine : [],
    americanCuisine: [],
    italianCuisine: [],
    britishCuisine: []
}

const cuisineReducer = (state=initState, action) => {
       switch(action.type){
          case "FETCH_CUISINE":
              return {...state}
              default:
                  return {...state} 
       }

}


export default cuisineReducer;