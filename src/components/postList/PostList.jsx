import PostCard from "../postCard/PostCard";
import "./postList.css";


const PostList = () => {
    return (
        <section className="postList__container">
            <div className="postList">
                <PostCard />
            </div>
        </section>
    )
}

export default PostList;