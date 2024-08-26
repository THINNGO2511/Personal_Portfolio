import { useEffect, useState } from 'react'
import {
  faGitAlt,
  faJsSquare,
  faReact,
  faPython,
  faSwift,
  faAws
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return () => setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a Computer Science student at the University of Houston, seeking internship and new grad roles for 2025. 
          </p>
          <p>
            Currently, I'm an AI/ML Intern at NASA Johnson Space Center, where I work on the On-Device LLM Team, developing a secure and efficient ChatGPT-like terminal for NASA engineers.
          </p>
          <p align="LEFT">
            Outside of work, I enjoy working out, reading, exploring the stock market, and spending time with loved ones.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#306998" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faSwift} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faAws} color="#131A22" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
