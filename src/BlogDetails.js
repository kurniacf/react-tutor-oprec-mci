import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blog/' + id);
    console.log(blogs);
    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blogs && (
                <article>
                    <h2>{ blogs.title }</h2>
                    <p>Written by { blogs.author }</p>
                    <div>{ blogs.body }</div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;