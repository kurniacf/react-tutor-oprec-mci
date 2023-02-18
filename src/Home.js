import {useState} from 'react';

const Home = () => {
    const [name, setName] = useState('Kurnia');
    const [age, setAge] = useState(21);

    const handleClick = (e) => {
        setName('Cahya');
        setAge(30);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;