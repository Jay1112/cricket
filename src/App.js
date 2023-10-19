import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import HomePage from './Pages/HomePage/HomePage';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className='w-screen h-screen flex items-stretch justify-center'>
        <div className='hidden md:flex'>
          <SideBar />
        </div>
        <div className='flex-1 flex flex-col items-center justify-center overflow-scroll relative'>
          <NavBar />
          <div className='w-full overflow-scroll flex-1'>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='*' component={PageNotFound} />
              </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;