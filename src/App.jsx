import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/NavTabs';


function App() {
  return (
    <>
      <Header />
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App
