import { configureStore } from "@reduxjs/toolkit";
import { persistStore /* persistReducer */ } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults
import { filterReducer } from "./features/filter/filterSlice";
import { positionReducer } from "./features/positions/postionSlice";

// const persistConfig = {
//     key: "root",
//     storage,
//     // обычно используется один лист
//     whitelist: ["filters", "positions"], // сохраняет определенные редюсеры
//     // blacklist:[] // удаляет определенные редюсеры
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: {
        filters: filterReducer,
        positions: positionReducer,
    },
    devTools: true,
});

// export const persistor = persistStore(store);
