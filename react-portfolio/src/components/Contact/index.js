import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return ()=> setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm interested in GPU and Robotics opportunities - especially on advanced and ambitious projects. <br></br>
            You can contact me at ngothinh2511@gmail.com or <a
              href="https://www.linkedin.com/in/ngothinh/"
              target="_blank"
              rel="noreferrer" >
                <FontAwesomeIcon
                icon={faLinkedin}
                color="#fff"
                style={{ fontSize: '18px'}}
                className="anchor-icon"
              />
              </a>.
          </p>
        </div>
        <div className="info-map">
          1 Hacker Way
          <br />
          Menlo Park, CA 94025
          <br />
          <br />
          <span>ngothinh2511@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[37.4848, -122.1484]} zoom={9}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[37.4848, -122.1484]}>
              <Popup>Meta HQ - Come say hi!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
