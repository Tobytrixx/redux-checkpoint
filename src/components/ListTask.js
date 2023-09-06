// ListTask.js component
import React, { useState } from "react"; //import dependencies
import AddTasks from "./AddTasks";
import Task from "./Task";
import { useSelector } from 'react-redux';

function ListTask() {
    const [filter, setFilter] = useState("all"); // "all", "done", "notDone"
    const tasks = useSelector(state => state.tasks.allTasks);
    
    const filteredTasks = tasks.filter(task => {
        if (filter === "done") return task.isDone;
        if (filter === "notDone") return !task.isDone;
        return true;
    });

    return (
        <>
            <AddTasks />
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("done")}>Done</button>
            <button onClick={() => setFilter("notDone")}>Not Done</button>
            {filteredTasks.map(task => (
                <Task key={task.id} {...task} />
            ))}
        </>
    );
}

export default ListTask;