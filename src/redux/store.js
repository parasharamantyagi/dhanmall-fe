import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducer/profile.reducer';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});
