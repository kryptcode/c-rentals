import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Ac from "../components/about/Ac"
import Plan from "../components/home/Plan"
import Footer from "../components/Footer"
import Modal from "../components/Modal"
import { useRecoilValue } from "recoil"
import { modalOpenState } from "../atoms/modalAtom"

const About = () => {

    const modal = useRecoilValue(modalOpenState)

  if(modal) {
    return (
      <Modal />
    )
  }

  return (
    <div>
        <Navbar />

        <div className="w-[90%] mx-auto mt-8">
            <h2 className="text-3xl font-bold">
                About
            </h2>
            <div className="mt-3 font-semibold">
                <Link className="hover:text-violet-950" to={'/'}>
                    Home
                </Link>
                {' '} / About
            </div>
        </div>

        <Ac />
        <Plan />
        <Footer />
    </div>
  )
}

export default About