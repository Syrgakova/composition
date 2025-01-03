import Comment from './components/Comment';
import './App.css';

function App() {
  const user = {
    author: {
      avatarUrl: 'https://media.baamboozle.com/uploads/images/521593/1652275115_58517_gif-url.jpeg',
      name:'Hello Kitty'
    },
    text: 'I hope you enjoy learning React',
    date: new Date()
  }
  return (
    <div className="App">
      <Comment author={user.author} text={user.text} date={user.date} />
    </div>
  );
}

export default App;
