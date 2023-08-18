// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          <div className="home-container">
            {isDarkTheme ? (
              <div className="dark-home-theme">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="home-image"
                />
                <h1 className="home-heading-dark">Lost Your Way?</h1>
                <p className="home-dark-text">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            ) : (
              <div className="light-home-theme">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="home-image"
                />
                <h1 className="home-heading-light">Lost Your Way?</h1>
                <p className="home-light-text">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            )}
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
