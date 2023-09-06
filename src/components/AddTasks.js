// AddTasks.js component
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch } from 'react-redux';
import { add } from '../redux/tasks';

function AddTasks() {
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (description) {
            dispatch(add({
                id: Date.now(),
                description,
                isDone: false
            }));
            setDescription("");
        }
    };

    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Control
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Task description"
                    aria-label="Task description"
                    aria-describedby="basic-addon2"
                />
                <Button onClick={handleAdd} variant="outline-secondary" id="button-addon2">
                    Add New Task
                </Button>
            </InputGroup>
        </div>
    );
}

export default AddTasks;