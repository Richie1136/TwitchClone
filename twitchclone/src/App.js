import Header from './components/header/Header'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Body from './components/body/Body'
import Profile from './components/profile/Profile'
function App() {
  return (
    <div className="App">
      <Header />
      <div className='app-main'>
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;