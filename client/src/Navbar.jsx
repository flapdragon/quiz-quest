import { NavLink } from "react-router"

const Navbar = ({ handleTheme, theme }) => {

  const ColorBlock = ({ t }) => {
    return (
      <div data-theme={t} className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
        <div className="bg-base-content size-1 rounded-full"></div>
        <div className="bg-primary size-1 rounded-full"></div>
        <div className="bg-secondary size-1 rounded-full"></div>
        <div className="bg-accent size-1 rounded-full"></div>
      </div>
    )
  }

  const Check = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="visible h-3 w-3 shrink-0 text-primary">
        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
      </svg>
    )
  }

  const ThemesSelect = () => {
    const themes = ["light", "dark", "cupcake", "chill", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset", "caramellatte", "abyss", "silk"]
    return (
      <>
        {themes.map(t => (
          <li key={t} onClick={() => handleTheme(t)}><a><ColorBlock t={t} />{t} {theme === t ? <Check /> : ""}</a></li>
        ))}
      </>
    )
  }

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <NavLink to="/">
          <span className="btn btn-ghost text-xl">Edabits</span>
        </NavLink>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            {/* <details>
              <summary>Themes</summary>
              <ul className="p-2 z-10 w-42 dropdown-content">
                <ThemesSelect />
              </ul>

            </details> */}
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="">Themes</div>
              <ul tabIndex={0} className="dropdown-content bg-base-100 rounded-box z-1 w-56 p-2 shadow-sm top-x h-[30.5rem] max-h-[calc(100vh-8.6rem)] overflow-y-auto">
                <ThemesSelect />
                <li>
                  <NavLink to="/jk">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 512 512"><path d="M96,208H48a16,16,0,0,1,0-32H96a16,16,0,0,1,0,32Z"></path><line x1="90.25" y1="90.25" x2="124.19" y2="124.19"></line><path d="M124.19,140.19a15.91,15.91,0,0,1-11.31-4.69L78.93,101.56a16,16,0,0,1,22.63-22.63l33.94,33.95a16,16,0,0,1-11.31,27.31Z"></path><path d="M192,112a16,16,0,0,1-16-16V48a16,16,0,0,1,32,0V96A16,16,0,0,1,192,112Z"></path><line x1="293.89" y1="90.25" x2="259.95" y2="124.19"></line><path d="M260,140.19a16,16,0,0,1-11.31-27.31l33.94-33.95a16,16,0,0,1,22.63,22.63L271.27,135.5A15.94,15.94,0,0,1,260,140.19Z"></path><line x1="124.19" y1="259.95" x2="90.25" y2="293.89"></line><path d="M90.25,309.89a16,16,0,0,1-11.32-27.31l33.95-33.94a16,16,0,0,1,22.62,22.63l-33.94,33.94A16,16,0,0,1,90.25,309.89Z"></path><path d="M219,151.83a26,26,0,0,0-36.77,0l-30.43,30.43a26,26,0,0,0,0,36.77L208.76,276a4,4,0,0,0,5.66,0L276,214.42a4,4,0,0,0,0-5.66Z"></path><path d="M472.31,405.11,304.24,237a4,4,0,0,0-5.66,0L237,298.58a4,4,0,0,0,0,5.66L405.12,472.31a26,26,0,0,0,36.76,0l30.43-30.43h0A26,26,0,0,0,472.31,405.11Z"></path></svg>
                    <div className="grow text-sm font-bold">Make your theme!</div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar