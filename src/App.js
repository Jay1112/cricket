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
import TeamsPage from './Pages/TeamsPage/TeamsPage';
import PlayersPage from './Pages/PlayersPage/PlayersPage';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-app relative w-screen h-screen flex flex-col items-stretch justify-start overflow-scroll'>
        {/* Top */}
        <NavBar />
        {/* Bottom */}
        <div className='flex-1 overflow-scroll flex items-stretch justify-center'>
          <div className=''>
            <SideBar />
          </div>
          <div className='px-2 overflow-scroll flex-1 flex flex-col items-center justify-center'>
            <div className='w-full overflow-scroll flex-1 flex flex-col items-center justify-center'>
                <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/teams' component={TeamsPage}/>
                  <Route exact path='/players' component={PlayersPage}/>
                  <Route path='*' component={PageNotFound} />
                </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;