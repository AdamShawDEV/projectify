import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./modules/NavMenu.module.css";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

const activeStyle = {
  backgroundColor: "#25a35aff",
};

function NavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.menuWrapper}>
      <div
        className={styles.menuButton}
        onClick={() => setMenuOpen((current) => !current)}
      >
        {menuOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
      </div>
      {menuOpen && (
        <div className={styles.menu} onClick={() => setMenuOpen(false)}>
          <ul>
            <li>
              <NavLink
                to="/projects"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/people"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                People
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavMenu;
