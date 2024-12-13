import React from 'react'
import UseFetch from './UseFetch';

function DataDisplay() {

    const { data, loading, error } = UseFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>

    return (
        <>
            <div>
                <h1>Posts</h1>
                <ul>
                    {data.map((post) => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default DataDisplay
