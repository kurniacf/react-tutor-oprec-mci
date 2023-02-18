import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from "./useFetch";

function App() {
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="App">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} /> }
        </div>
    );
}

export default App;
