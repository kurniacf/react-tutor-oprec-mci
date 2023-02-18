import { useState, useEffect } from 'react';
import BlogList from './BlogList';

function App() {
    const [blogs, setBlogs] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(response => {
                if (!response.ok) { 
                    throw Error('Error fetching data');
                } 
                return response.json();
            })
            .then(data => {
                setIsPending(false);
                setBlogs(data.blogs);
                setError(null);
            })
            .catch(error => {
                setIsPending(false);
                setError(error.message);
            });
        }, 1000);
    }, []);

    return (
        <div className="App">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} /> }
        </div>
    );
}

export default App;
