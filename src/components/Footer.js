import React from "react";

function Footer(props) {
  return (
    <footer>
      <div className="container">
        <ul className="footer-list">
          <li>
            <a href="https://github.com/t3nna" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/t3nna/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:t3nna1001@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </li>
          <li className={"copyright"}>copyright</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
