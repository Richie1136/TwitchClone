import Header from './components/header/Header'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'
import Profile from './components/profile/Profile'
function App() {
  return (
    <div className="App">
      <Header />
      <div className='app-main'>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;