import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from "../../features/commentsSlice";

const CommentsList = () => {
    const dispatch: any = useDispatch();
    const { comments, loading, error } = useSelector((state: any) => state.comments);

    useEffect(() => {
        dispatch(fetchComments());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {comments?.map((item: any, index: any) => (
                index < 10 && <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}

export default CommentsList;