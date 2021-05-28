import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts'


function App() {
  return (
    <div className="Container-fluid">
      <nav>
        <div className="nav-wrapper center-align">
            <a href="/" className="brand-logo">Employee Contacts</a>
        </div>
      </nav>

      <div className="row">
      <Contacts/>
      </div>
      
    </div>
  );
}

export default App;
