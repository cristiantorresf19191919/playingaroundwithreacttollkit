import { combineReducers } from 'redux';
import automataReducer from './reducers/automata/reducer';
import darkModeReducer from './reducers/dark-mode/reducer';
import filesReducer from './reducers/files/reducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  files: filesReducer,
  automata:automataReducer
});

export default rootReducer;
