import {createStore} from 'redux'

const initialState = {
  number: 0
}

function reducer(state = initialState, action){
  switch(action.type){
    case 'INCREMENT':
      return Object.assign(state, {number: state.number + 1})
    default:
      return state;
  }
}

const store = createStore(reducer,
  //need this for REDUX CHROME EXTENSION
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
