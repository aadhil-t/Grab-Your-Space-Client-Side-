import {persistReducer} from 'redux-persist';
import userReducer from './UserSlice/UsserSlice'
import hubadminReducer from "./UserSlice/HubAdminSlice"
import storage from 'redux-persist/lib/storage';
import {persistStore} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';


const persistConfig = {
    key: 'root',
    storage,
};

const Persisted ={
    user: persistReducer(persistConfig,userReducer),
    hubadmin: persistReducer(persistConfig,hubadminReducer),
}

const Store = configureStore({
    reducer: Persisted
});

const persistor = persistStore(Store);

export { Store, persistor };
