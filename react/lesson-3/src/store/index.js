import {createStore, combineReducers} from 'redux'

const initalUserInfo = {
  isLogin: false,
  user: {
    name: null
  }
}

function loginReducer(state = {...initalUserInfo}, action) {
  console.log(action.type)
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        isLogin: true,
        user: {
          name: 'Codzla'
        }
      }
    case 'LOGOUT_SUCCESS':
      return {
        isLogin: false,
        user: {
          name: null
        }
      }
    default:
      return state
  }
}

const store = createStore(combineReducers({user: loginReducer}))

export default store