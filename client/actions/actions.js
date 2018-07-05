import * as types from '../constants/actionTypes';

export const addRating = (data) => ({
    type: types.ADD_RATING,
    payload: data
});

export function DataRequest(email, password) {
    const user = {email: email, password: password};
    return { user, type: types.DATA_REQUEST };
  }

export function dataSuccess(response) {
    console.log('response in dataSucccess ', response)
    return dispatch => {
      dispatch({ payload: response, 
        type: types.DATA_SUCCESS });
      //router.transitionTo('/dashboard');
    };
  }

export function dataFailed(error) {
   return { error, type: types.DATA_FAILED };
}
  
  
  
  export function data(searchData) {
     // let url =['http://www.recipepuppy.com/api/?i=ice%20cream'];
     //http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3
     console.log('this is searchData', searchData);
      let url = 'http://localhost:4000/api'
        
    return dispatch =>
      fetch(url, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
          body: JSON.stringify(searchData)
      }) 
      .then(function (response) {
        return response.json();
      }).then(function(response) {
          console.log('response in fetch ', response);
          dispatch(dataSuccess(response.results));
      })
      .catch(error => { 
          console.log('request failed', error); 
          dispatch(dataFailed(error));  });
  }


//   export function data(searchData) {
//     // let url =['http://www.recipepuppy.com/api/?i=ice%20cream'];
//     //http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3
//     console.log('this is searchData', searchData);
//      let url = 'http://localhost:4000/api'
       
//    return dispatch =>
//      fetch(url, {
//          method: 'POST'
//      }) 
//      .then(function (response) {
//        return response.json();
//      }).then(function(response) {
//          console.log('response in fetch ', response);
//          dispatch(dataSuccess(response.results));
//      })
//      .catch(error => { 
//          console.log('request failed', error); 
//          dispatch(dataFailed(error));  });
//  }