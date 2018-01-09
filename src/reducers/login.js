import types from '../store/types';
import { reducerCreators } from '../util/index';

const initialState = {
    loading:false
  };

  export default reducerCreators(initialState,{

    [`${types.LOGIN}`]: (state, data, params) => {
        console.log('reducers success')
        return Object.assign({}, state, {

        });
        // return state.set('isAuth', !state.isAuth);
      },

  })