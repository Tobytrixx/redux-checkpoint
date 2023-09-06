// tasks.js redux component
import { createSlice } from "@reduxjs/toolkit";//import createslice from reduxjs

const initialState = {//initializatiion of object state
    allTasks: []
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add: (state, action) => {
            state.allTasks.push(action.payload);
        },
        toggle: (state, action) => {
            const task = state.allTasks.find(t => t.id === action.payload);
            if (task) task.isDone = !task.isDone;
        },
        edit: (state, action) => {
            const task = state.allTasks.find(t => t.id === action.payload.id);
            if (task) task.description = action.payload.description;
        },
        delete: (state, action) => {
            state.allTasks = state.allTasks.filter(t => t.id !== action.payload);
        }
    }
});

export const { add, toggle, edit, delete: deleteTask } = taskSlice.actions; //export action creators

export default taskSlice.reducer; //export default reducer