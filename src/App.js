import './App.css';

function App() {
  const title = 'Selamat Datang di Blog Saya';
  const likes = 100;

  const link = 'http://www.google.com';

  return (
    <div className="App">
      <div className='content'>
        <h1>{title}</h1>
        <p>Liked {likes} times</p>

        <p>{10}</p>
        <p>{"Hello, Kurnia"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
