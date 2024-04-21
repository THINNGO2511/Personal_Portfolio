// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import Portrait from '../../../assets/images/Portrait.jpg'
import './index.scss'

const Logo = () => {

  return (
    <div className="logo-container" >
      <img
        className="solid-logo"
        src={Portrait}
        alt="NASA Portrait"
      />
    </div>
  )
}

export default Logo
