import './App.css';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Login from './pages/login/Login';
import Chat from './pages/chat/chat';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
    </Router>
  );
}

export default App;