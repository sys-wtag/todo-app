import React from "react"
import { IMAGE_PATHS, SEARCH_ALT, LOGO } from "utils/constants"
import "components/navBar/navBar.scss"

function NavBar() {
  
  return (
    <div className="navbar-container" data-testid="navbar-container">
      <div className="navbar-container__logo">
        <img src={IMAGE_PATHS.BRAND_LOGO} alt={LOGO} />
        <h1>Todos</h1>
      </div>
      <div>
        <img src={IMAGE_PATHS.ICON_SEARCH} alt={SEARCH_ALT} />
      </div>
    </div>
  )
}

export default NavBar
