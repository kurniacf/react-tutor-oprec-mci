import { useState, useEffect } from 'react';
import BlogList from './BlogList';

function App() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(response => response.json())
        .then(data => setBlogs(data.blogs))
        .catch(error => console.log(error));
    }, []);

    return (
        <div className="App">
            <BlogList blogs={blogs} />
        </div>
    );
}

export default App;
