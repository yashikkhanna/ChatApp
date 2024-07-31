import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/chats' component={ChatPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
