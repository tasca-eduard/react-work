import { ChangeEvent, useContext } from "react";
import ThemeContext, { TAccent, TTheme } from "../../context/ThemeContext";

const Header: React.FC = () => {
  const {
    theme,
    setTheme, 
    accent,
    setAccent
  } = useContext(ThemeContext)

  const onSelectTheme = (e: ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value as TTheme);
  const onSelectAccent = (e: ChangeEvent<HTMLSelectElement>) => setAccent(e.target.value as TAccent);

  return (
    <header className="header">
      <div className="header-container">
        <div className="options">
          <label className="label">
            Set Theme
            <br />
            <select className="select" onChange={onSelectTheme} value={theme}>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </label>
          <label className="label">
            Set Accent
            <br />
            <select className="select" onChange={onSelectAccent} value={accent}>
              <option value="yellow">Yellow</option>
              <option value="blue">Blue</option>
            </select>
          </label>
        </div>
      </div>
    </header>
  )
}

export default Header;