import { Card, CardContent, CartHeader, List } from "@mui/material"
import React from "react"
function ToDo(){
    return(
        <Card>
            <CardHeader title="Test ToDo" />
            <CardContent>
            <List>
                    {[0, 1, 2, 3].map((value) => (
                        <ListItem key={value}>
                            <p>{value}</p>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}

export default ToDo;