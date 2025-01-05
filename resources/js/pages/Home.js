import React from "react";
import { Grid } from "@mui/material";
import ToDo from "../components/ToDo";
import { useCurrentToDoList } from "../hooks/ToDoList";

function Home() {
    const { data: toDoList = [], isLoading, error } = useCurrentToDoList(); // デフォルト値でエラー回避

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <Grid container spacing={2}>
            {toDoList?.map((toDo) => (
                <Grid item key={toDo.id} xs={3}>
                    <ToDo toDo={toDo} />
                </Grid>
            ))}
        </Grid>
        
    );
}

export default Home;
