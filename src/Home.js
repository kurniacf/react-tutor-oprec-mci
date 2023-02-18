import {useState} from 'react';
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Welcome to the Black Parade', body: 'I Love You in my dream', author: 'My Chemical Romance', id: 1},
        {title: 'Norwegian Wood', body: 'We cant be together', author: 'Haruki Murakami', id: 2},
        {title: '(MCI Love) Miracle Competition In Love', body: 'I like you, but you dont like me', author: 'Kurnia Cahya', id: 3}
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
        </div>
    );
}

export default Home;