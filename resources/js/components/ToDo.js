import {
    Card,
    CardContent,
    CardHeader,
    List,
    ListItem,
    ListItemText,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import ToDoDetail from "./ToDoDetail";
import { useUpdateToDoMutateTask } from "../hooks/ToDo";

function ToDo(props) {
    const [timer, setTimer] = useState(null);

    let toDo = {
        id: props.toDo.id,
        title: props.toDo.title,
    };

    const { updateToDoMutation } = useUpdateToDoMutateTask();
    const eventUpdateToDo = (event) => {
        clearTimeout(timer);

        const newTimer = setTimeout(() => {
            let data = {
                ...toDo,
                title: event.target.value,
            };
            updateToDoMutation.mutate(data);
        }, 500);

        setTimer(newTimer);
    };

    return (
        <Card>
            <TextField
                variant="standard"
                margin="dense"
                defaultValue={props.toDo.title}
                fullWidth
                onChange={eventUpdateToDo}
            />

            <CardContent>
                <List>
                    {props.toDo.to_do_details.map((detail) => (
                        <ListItem key={detail.id}>
                            <ToDoDetail detail={detail} />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}

export default ToDo;
