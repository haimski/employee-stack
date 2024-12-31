import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from "../../features/tasksSlice";

interface TasksListProps {
    tasks: any;
    loading: boolean;
    error: any;
}

const TasksList = () => {
    const dispatch:any = useDispatch();
    const { tasks, loading, error } = useSelector((state: any) => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {tasks?.map((item:any, index:any) => (
                index< 10 && <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}

export default TasksList;