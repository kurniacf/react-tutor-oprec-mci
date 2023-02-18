import { useState, useEffect } from 'react';
import BlogList from './BlogList';

function App() {
    const [blogs, setBlogs] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(response => response.json())
            .then(data => {
                setIsPending(false);
                setBlogs(data.blogs);
            })
            .catch(error => console.log(error));
        }, 1000);
    }, []);

    return (
        <div className="App">
            { isPending && <div>Loading...</div> }
            <BlogList blogs={blogs} />
        </div>
    );
}

export default App;
