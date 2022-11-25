import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./modules/NavMenu.module.css";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import Menu from "./Menu";

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
        <Menu closeMenu={() => setMenuOpen(false)} side="left">
          <ul className={styles.navMenu}>
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
          </ul>
        </Menu>
      )}
    </div>
  );
}

export default NavMenu;
