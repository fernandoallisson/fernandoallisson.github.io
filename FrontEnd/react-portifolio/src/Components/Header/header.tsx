import styles from "./header.module.css";

function Header() {
  // This is a simple header component that will be used in all pages.
  return (
    <header className="header">
      <nav>
        <div>
          <a href="#logo">
            <img
              className={styles.div_logo}
              src="
              https://avatars.githubusercontent.com/u/72525421?s=460&u=3d3c3f7d6f8f1d3b4b9b5d6
              4f8d3a8c1d4d3d3f&v=4"
              alt="logo"
            />
          </a>
        </div>
        <div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
