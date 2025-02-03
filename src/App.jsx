import './App.css'
import Header from "./components/header/header.jsx";
import Home from "./pages/home/home.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {

  return <>
      <Header/>
      <main>
          <Home/>
      </main>
      <Footer/>

  </>
}

export default App
