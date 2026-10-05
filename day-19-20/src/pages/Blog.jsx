import { useEffect, useState } from "react";

const Blog = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data => setPosts(data))
    }, [posts])

    return (
        <div className="max-w-7xl mx-auto my-10 border rounded p-4 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {posts.map((post, i) => (
                <div key={post.id} className="border rounded p-4">
                    <h2>{i + 1}: {post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Blog;