import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <header className="flex-row px-1">
      <h1>Rochelle Davis</h1>
      <nav>
        <ul className="nav nav-tabs flex-row">
          <li className="nav-item mx-2">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </li>
          <li className="nav-item mx-2">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              //  TODO: Add a comment explaining what this logic is doing

              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item mx-2">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              //  TODO: Add a comment explaining what this logic is doing

              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li className="nav-item mx-2">
            <a
              href="#contact"
              //  TODO: Add a comment explaining what this logic is doing

              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
