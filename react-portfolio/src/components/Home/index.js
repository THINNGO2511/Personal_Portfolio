import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo16th from '../../assets/images/16th.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['D', 'i', 'n', 'h',' ','T','h','i','n','h',' ','N','g','o',',' ]
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return ()=> setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _14`}> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
          </h1>
          <h2>CS @ University of Houston | SWE Intern @ NASA</h2>
          <Link to="/Personal_Portfolio/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <div className="portrait-container">
        <img src={Logo16th} alt="Logo-16th" />
      </div>
      <Loader type="pacman" />
    </>

  )
}

export default Home
