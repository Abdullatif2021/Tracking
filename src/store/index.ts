import { combineReducers, configureStore } from '@reduxjs/toolkit';


import { errorsReducer as errors } from './errors';
import { sessionReducer as session } from './gps/sessions';
import { devicesReducer as devices } from './gps/devices';
import { adsManagerReducer as adsManager } from './ads/adsManager';
import { truckPathReducer as truckPath } from '../app/modules/car/store/truckPath';
import { pageTimeManagereReducer  as  pageTimeManager } from './pageTimes/index';
import { terminalPathReducer as terminalPath } from '../app/modules/terminal/store/terminalPath';

import { layoutManagerReducer as layoutManager } from './layout';
import { reportsReducer as reports } from './reports';
import throttleMiddleware from './throttleMiddleware';

const reducer = combineReducers({

  errors,
  session,
  devices,
  truckPath,
  adsManager,
  pageTimeManager,
  terminalPath,
  layoutManager,
  reports

});

export { errorsActions } from './errors';
export { sessionActions } from './gps/sessions';
export {devicesActions} from './gps/devices';
export {truckPathActions} from '../app/modules/car/store/truckPath';
export {terminalPathsActions} from '../app/modules/terminal/store/terminalPath';
export {adsManagerActions} from './ads/adsManager';
export {pageTimeManagerActions} from './pageTimes/index';
export {layoutManagerActions} from './layout';
export {reportsActions} from './reports';
export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({ serializableCheck: false }).concat(throttleMiddleware),
});
