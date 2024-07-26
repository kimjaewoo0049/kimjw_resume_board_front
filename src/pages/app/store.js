// import { configureStore } from '@reduxjs/toolkit'
// import userReducer from './slice/userSlice'

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import userSlice from "./slice/userSlice";

const reducers = combineReducers({
    user: userSlice.reducer,
});

const persistConfig = {
    key: "root",
    storage, // 로컬 스토리지에 저장
    whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;


