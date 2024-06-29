import './Card.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

function Card() {
    return (
        <div className='card'>
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default Card