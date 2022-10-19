import {configureStore} from '@reduxjs/toolkit';
import changeTheNumber from "./reducer/upDown";
import { secondReducer } from "./reducer/upDown";
import thirdReducer from "./reducer/thirdReducer";


const store = configureStore({
    reducer: {
        changeTheNumber,
        secondReducer,
        thirdReducer
    }
});

export default store;
