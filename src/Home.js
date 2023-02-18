import {useState} from 'react';
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Welcome to the Black Parade', body: 'I Love You in my dream', author: 'My Chemical Romance', id: 1},
        {title: 'The Recipe for Happy', body: 'I am Happy with You', author: 'Kurnia Cahya', id: 2},
        {title: 'Norwegian Wood', body: 'We cant be together', author: 'Haruki Murakami', id: 3},
        {title: '(MCI Love) Miracle Competition In Love', body: 'I like you, but you dont like me', author: 'Kurnia Cahya', id: 4}
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter(blog => blog.author === 'Kurnia Cahya')} title="Kurnia's Blogs" />
        </div>
    );
}

export default Home;