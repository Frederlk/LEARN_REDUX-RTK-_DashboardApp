import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults

import { filterReducer } from "./features/filter/filterSlice";
import { positionReducer } from "./features/positions/postionSlice";

const rootReducer = combineReducers({
    filters: filterReducer,
    positions: positionReducer,
});

const persistConfig = {
    key: "root",
    storage,
    // обычно используется один лист
    whitelist: ["filters", "positions"], // сохраняет определенные редюсеры
    // blacklist:[] // удаляет определенные редюсеры
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
