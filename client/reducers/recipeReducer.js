import * as types from '../constants/actionTypes';

const initialState = {
    recipes: [],
    user: 'ChrisWasHere',
    reviewed: [],
    page: 1,
    currentSearch: {}
};


const recipeReducer = (state = initialState, action) =>{
    let titlesList;
    switch(action.type){
        case types.ADD_RATING:

        case types.DATA_REQUEST:

        case types.DATA_SUCCESS:
            //will be an object. Will now create a new object and update 
            //the current titles array in state
            console.log('Success in reducer switch case!');
            console.log(action.payload);
            titlesList = state.recipes.slice();
            titlesList.recipes = Object.assign(action.payload);
            return {
                    recipes: action.payload,
                    user: state.user,
                    reviewed: state.reviewed,
                    page: state.page
            };
        


        case types.DATA_FAILED:
        console.log('Failed!');
        default: 
            return state;
    }
}
export default recipeReducer;