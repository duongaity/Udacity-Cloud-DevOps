import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice.js";

export default configureStore({
    reducer:{
        tasks: taskReducer,
    }
});
