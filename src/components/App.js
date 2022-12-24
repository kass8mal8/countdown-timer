import '../styles/app.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Message from './Message';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
      <Message />
      <Footer />
    </div>
  );
}

export default App;
