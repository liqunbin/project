
import types from '../store/types';


export function login(param) {
    // console.log('ssss')
    // return 'success';
    
  return (dispatch, getState) => {
      console.log('rrr',getState)
      dispatch({
          type: types.LOGIN,
          data:param
      })
  }
}
