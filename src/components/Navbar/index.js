// Write your code here
import {Link} from 'react'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickToggleTheme = () => {
        toggleTheme()
      }

      const themeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const bgClassName = isDarkTheme
        ? 'dark-view-container'
        : 'light-view-container'

      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navItemClassName = isDarkTheme ? 'nav-text-dark' : 'nav-text-light'

      return (
        <nav className={bgClassName}>
          <div className="nav-item-content">
            <img
              src={websiteLogoUrl}
              alt="website logo"
              className="website-logo"
            />
            <ul className="nav-item-list-container">
              <li className="nav-text-item">
                <Link to="/" className="nav-link">
                  <h1 className={navItemClassName}>Home</h1>
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  <h1 className={navItemClassName}>About</h1>
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="nav-button"
              onClick={onClickToggleTheme}
              data-testid="theme"
            >
              <img src={themeImageUrl} alt="theme" className="theme" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
