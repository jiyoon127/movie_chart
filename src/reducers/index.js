import get_details from './getDetails';

import { combineReducers } from 'redux';

const reducers = combineReducers({
  detailData: get_details,
});

export default reducers;
