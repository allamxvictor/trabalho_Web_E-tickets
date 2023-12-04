import { combineReducers } from "redux";

import eventoReducer from "./Evento/Reducer";

const rootReducer = combineReducers({eventoReducer});

export default rootReducer;