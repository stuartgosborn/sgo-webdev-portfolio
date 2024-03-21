import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import photo from "./assets/igthumbnail.jpeg";

import "./App.css";

function App() {
  return (
    <>
      <div >

      <Header className="headerBackground"/>
      <NavTabs photo={photo}/>
      <main className="mx-3 main">
        <Outlet />
      </main>
      <Footer />
      </div>
    </>
  );
}

export default App;
