import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos } from "../../features/photosSlice";

const TasksList = () => {
    const dispatch:any = useDispatch();
    const { photos, loading, error } = useSelector((state: any) => state.photos);

    useEffect(() => {
        dispatch(fetchPhotos());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {photos?.map((item: any, index: any) => (
                index < 10 && <li key={item.id}>
                    <div className="grid grid-rows-4 grid-flow-col gap-4">
                        <img alt={item.title} src={item.thumbnailUrl}/>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TasksList;