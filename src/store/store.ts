import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import editorReducer from './slices/editorSlice';
import responseReducer from './slices/responseSectionSlice';
import docsReducer from './slices/docsSlice';
import { graphQueryApi } from './api/graphQueryApi';

const rootReducer = combineReducers({
  editor: editorReducer,
  response: responseReducer,
  docs: docsReducer,
  [graphQueryApi.reducerPath]: graphQueryApi.reducer,
});
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(graphQueryApi.middleware),
    preloadedState,
  });
}
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
