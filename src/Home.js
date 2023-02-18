import {useState} from 'react';
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Welcome to the Black Parade', body: 'I Love You in my dream', author: 'My Chemical Romance', id: 1},
        {title: 'The Recipe for Happy', body: 'I am Happy with You', author: 'Kurnia Cahya', id: 2},
        {title: 'Norwegian Wood', body: 'We cant be together', author: 'Haruki Murakami', id: 3},
        {title: '(MCI Love) Miracle Competition In Love', body: 'I like you, but you dont like me', author: 'Kurnia Cahya', id: 4}
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;