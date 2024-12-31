import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../features/postsSlice';

const PostsList = () => {
    const dispatch = useDispatch<any>();
    const { posts, loading, error } = useSelector((state:any) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Blog Posts
            </h1>
            <ul>
                {posts?.map((item:any, index:number) => (
                    //index < 10 && <li key={item.id}>{item.title}</li>
                    <li key={index}>
                        <div
                            className=" divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem]/5 text-slate-900 ring-1 shadow-xl shadow-black/5 ring-slate-700/10">
                            <div className="flex items-center p-4">
                                <div className="ml-4 flex-auto">
                                    <div className="font-medium">{item.title}</div>
                                    <div className="mt-1 text-slate-700">{item.body}</div>
                                </div>
                                <div
                                    className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 ring-1 shadow-xs ring-slate-700/10 hover:bg-slate-50">Read
                                    More
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostsList;