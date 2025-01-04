import {
    Card,
    CardContent,
    CardHeader,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import React from "react";
import ToDoDetail from "./ToDoDetail";

function ToDo() {
    return (
        <Card>
            <CardHeader title="Test ToDo" />

            <CardContent>
                <List>
                    {[0, 1, 2, 3].map((value) => (
                        <ListItem key={value}>
                            <ToDoDetail id={value} />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}

export default ToDo;
