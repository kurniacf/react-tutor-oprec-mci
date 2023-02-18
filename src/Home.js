import {useState} from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Welcome to the Black Parade', body: 'I Love You in my dream', author: 'My Chemical Romance', id: 1},
        {title: 'Norwegian Wood', body: 'We cant be together', author: 'Haruki Murakami', id: 2},
        {title: '(MCI Love) Miracle Competition In Love', body: 'I like you, but you dont like me', author: 'Kurnia Cahya', id: 3}
    ])

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;