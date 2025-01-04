import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const getToDoList = async () => {
    const { data } = await axios.get("/api/toDos");
    return data;
};

const useGetToDoList = () => {
    const queryClient = useQueryClient();
    return useQuery("toDoList", getToDoList, {
        onError: (error) => {
            console.error("Error:", error);
            queryClient.setQueryData("toDoList", []);
        }
    });
};

export default useGetToDoList;
