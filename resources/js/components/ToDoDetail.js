import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function ToDoDetail(props) {
    return (
        <ListItem
            key={props.id}
            secondaryAction={
                <IconButton edge="end" aria-label="comments">
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton>
                <ListItemIcon>
                    <Checkbox edge="start" />
                </ListItemIcon>
                <ListItemText primary={"TEST ToDoDetail" + props.id } />
            </ListItemButton>
        </ListItem>
    );
}

export default ToDoDetail;