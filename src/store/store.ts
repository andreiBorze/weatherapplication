import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/appReducer';
import weatherReducer from './reducers/weatherReducer';
import newsReducer from './reducers/newsReducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
    weather: weatherReducer,
    news: newsReducer,
  },
});

export type AppStore = ReturnType<typeof store.getState>;


