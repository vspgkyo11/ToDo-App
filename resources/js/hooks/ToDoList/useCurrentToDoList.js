import { useQuery } from "react-query";
import axios from "axios";

const getToDoList = async () => {
    const { data } = await axios.get("/api/toDos");
    return data;
};

const useCurrentToDoList = () => {
    return useQuery("toDoList", getToDoList, {
        staleTime: 5000,
        refetchOnWindowFocus: false
    });
};

export default useCurrentToDoList;
