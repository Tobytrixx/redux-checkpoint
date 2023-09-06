import { configureStore } from "@reduxjs/toolkit";//Importation of config store from reduxjs toolkit
import tasksReducer from "./tasks";//import task reducer from tasks

export const store = configureStore ({// configure store function with reducer property
    reducer : {
        tasks : tasksReducer
    }
});//export created store