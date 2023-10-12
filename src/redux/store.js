import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducer/profile.reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, profileReducer)


export const store = configureStore({
  reducer: {
    profile: persistedReducer,
    middleware: [thunk]
  },
});

export const persistor = persistStore(store)
