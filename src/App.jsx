import Book from "./components/home/Book"
import Hero from "./components/home/Hero"
import Models from "./components/home/Models"
import Plan from "./components/home/Plan"
import Choose from "./components/home/Choose"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useRecoilValue } from "recoil"
import { modalOpenState } from "./atoms/modalAtom"
import Modal from "./components/Modal"


function App() {

  const modal = useRecoilValue(modalOpenState)

  if(modal) {
    return (
      <Modal />
    )
  }

  return (
    <div >
      <Navbar />
      <Hero />
      <Book />
      <Plan />
      <Models />
      <Choose />
      <Footer />
    </div>
  )
}

export default App
