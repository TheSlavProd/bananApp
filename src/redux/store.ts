import { combineReducers, createStore } from "redux";

import { filterReducer } from "./filterReducer";

const rootReducer = combineReducers({ images: filterReducer });

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
