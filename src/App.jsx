import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";


import "./App.css";

function App() {


  return (
    <>
      <div >

      <Header className="headerBackground"/>
      <NavTabs/>
      <main className="mx-3 main">
        <Outlet />
      </main>
      <Footer />
      </div>
    </>
  );
}

export default App;
