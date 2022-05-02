import { useState } from 'react';
import { Routes, Route, Link, Router, Outlet, useRoutes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import CurrentGame from './pages/CurrentGame';
import { ClockIcon, HomeIcon, PlusIcon, ViewGridAddIcon, ViewGridIcon } from '@heroicons/react/outline';
import NewGame from './pages/NewGame';
function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/' element={<Home />} />
          <Route path='/history' element={<History />} />
        </Route>
        <Route path='/new' element={<NewGame />} />
        <Route path='/current' element={<CurrentGame />} />
      </Routes>
    </div>
  );
}

const Main = () => {
  const router = useLocation();
  return (
    <div className='h-screen'>
      <div className='relative h-36 bg-cyan-500 rounded-bl-4xl  text-white w-full'>
        <svg
          className=' absolute  -bottom-1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fillOpacity='1'
            className='fill-slate-200 dark:fill-slate-700'
            d='M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
        <div className='p-5 flex w-full justify-between'>
          {/* <InformationCircleIcon className='w-6' />
            <ThemeToggler /> */}
        </div>
        <p className='text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-2xl'>
          LOGO HERE
        </p>
      </div>

      <div className='w-full bg-slate-200 h-[calc(100vh-6rem)]  px-6'>
        <Outlet />
      </div>
      <div className=' w-full h-16 fixed bottom-0 bg-white dark:bg-slate-800 dark:text-white flex items-center justify-evenly rounded-t-2xl'>
        <Link
          to='/'
          className={`flex flex-col items-center ${
            router.pathname === '/' ? 'text-cyan-500' : ''
          }`}
        >
          <ViewGridIcon className='w-6' />
          <p>Games</p>
        </Link>

        <Link

          to='/current'
          className='bg-cyan-500 p-5 rounded-full text-white shadow-lg absolute -translate-y-1/2 '
        >
          <PlusIcon className='w-6' />
        </Link>

        <Link
          to={'/history'}
          className={`flex flex-col items-center ml-24 ${
            router.pathname === '/history' ? 'text-cyan-500' : ''
          }`}
        >
          <ClockIcon className='w-6' />
          <p>History</p>
        </Link>
      </div>
    </div>
  );
};

export default App;
