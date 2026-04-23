function PostCard({ post }) {
    return (
        <div>
            <h3>{post.title}</h3>
            <p><strong>ID:</strong> {post.id}</p>
            <p><strong>User ID:</strong> {post.userId}</p>
            <p>{post.body}</p>
        </div>
    );
}

export default PostCard