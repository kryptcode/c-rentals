import Book from "./components/home/Book"
import Hero from "./components/home/Hero"
import Models from "./components/home/Models"
import Plan from "./components/home/Plan"
import Choose from "./components/home/Choose"
import Navbar from "./components/Navbar"


function App() {

  return (
    <div >
      <Navbar />
      <Hero />
      <Book />
      <Plan />
      <Models />
      <Choose />
    </div>
  )
}

export default App
