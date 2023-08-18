// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const bgClassName = isDarkTheme ? 'dark-home-theme' : 'light-home-theme'
      const textClassName = isDarkTheme
        ? 'home-heading-dark'
        : 'home-heading-light'
      return (
        <>
          <Navbar />
          <div className="home-container">
            <div className={bgClassName}>
              <img src={homeImageUrl} alt="home" className="home-image" />
              <h1 className={textClassName}>Home</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
